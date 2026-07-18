const db = require("../config/database");

function generateReference() {
  const now = new Date();

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");

  const random = Math.floor(
    100000 + Math.random() * 900000
  );

  return `JPMC-${yyyy}${mm}${dd}-${random}`;
}

// ======================================
// GET ALL TRANSFERS
// ======================================

exports.getAllTransfers = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT
        id,
        reference,
        customer_id,
        sender_name,
        sender_account,
        recipient_name,
        recipient_account,
        bank,
        amount,
        narration,
        transaction_type,
        status,
        created_at
      FROM transactions
      ORDER BY created_at DESC
    `);

    const transfers = result.rows.map((row) => ({
      id: row.id,
      reference: row.reference,
      customerId: row.customer_id,
      senderName: row.sender_name,
      senderAccount: row.sender_account,
      recipient: row.recipient_name,
      recipientAccount: row.recipient_account,
      bank: row.bank,
      amount: Number(row.amount),
      narration: row.narration,
      type: row.transaction_type,
      status: row.status,
      date: row.created_at,
    }));

    return res.json({
      success: true,
      transfers,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to load transfers.",
    });

  }
};

// ======================================
// APPROVE TRANSFER
// ======================================

exports.approveTransfer = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await db.query(
      `
      UPDATE transactions
      SET status = 'Successful'
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found.",
      });
    }

    return res.json({
      success: true,
      message: "Transfer approved successfully.",
      transaction: result.rows[0],
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error.",
    });

  }
};

// ======================================
// CREATE TRANSFER
// ======================================

exports.createTransfer = async (req, res) => {

  const client = await db.connect();

  try {

    const {
      customerId,
      bank,
      recipientName,
      recipientAccount,
      amount,
      narration,
    } = req.body;

    if (
      !customerId ||
      !bank ||
      !recipientName ||
      !recipientAccount ||
      !amount
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    await client.query("BEGIN");

    const customerResult = await client.query(
      `
      SELECT
        customer_id,
        account_number,
        first_name,
        last_name,
        balance
      FROM customers
      WHERE customer_id = $1
      FOR UPDATE
      `,
      [customerId]
    );

    if (customerResult.rows.length === 0) {

      await client.query("ROLLBACK");

      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });

    }

    const customer = customerResult.rows[0];

    const transferAmount = Number(amount);

    if (Number(customer.balance) < transferAmount) {

      await client.query("ROLLBACK");

      return res.status(400).json({
        success: false,
        message: "Insufficient account balance.",
      });

    }

    const newBalance =
      Number(customer.balance) - transferAmount;

    await client.query(
      `
      UPDATE customers
      SET balance = $1
      WHERE customer_id = $2
      `,
      [
        newBalance,
        customerId,
      ]
    );

    const reference = generateReference();

    const transactionResult = await client.query(
      `
      INSERT INTO transactions
      (
        reference,
        customer_id,
        sender_name,
        sender_account,
        recipient_name,
        recipient_account,
        bank,
        amount,
        narration,
        transaction_type,
        status
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
      RETURNING *
      `,
      [
        reference,
        customer.customer_id,
        `${customer.first_name} ${customer.last_name}`,
        customer.account_number,
        recipientName,
        recipientAccount,
        bank,
        transferAmount,
        narration || "",
        "Transfer",
        "Pending",
      ]
    );

    await client.query("COMMIT");

    const row = transactionResult.rows[0];

    const transaction = {
      id: row.id,
      reference: row.reference,
      senderName: row.sender_name,
      senderAccount: row.sender_account,
      recipient: row.recipient_name,
      recipientAccount: row.recipient_account,
      bank: row.bank,
      amount: Number(row.amount),
      narration: row.narration,
      status: row.status,
      date: row.created_at,
    };

    return res.status(201).json({
      success: true,
      message: "Transfer submitted successfully.",
      transaction,
      balance: newBalance,
    });

  } catch (error) {

    await client.query("ROLLBACK");

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error.",
    });

  } finally {

    client.release();

  }
};

// ======================================
// GET CUSTOMER TRANSFERS
// ======================================

exports.getCustomerTransfers = async (req, res) => {
  try {
    const { customerId } = req.params;

    const result = await db.query(
      `
      SELECT
        id,
        reference,
        sender_name,
        sender_account,
        recipient_name,
        recipient_account,
        bank,
        amount,
        narration,
        transaction_type,
        status,
        created_at
      FROM transactions
      WHERE customer_id = $1
      ORDER BY created_at DESC
      `,
      [customerId]
    );

    const transactions = result.rows.map((row) => ({
      id: row.id,
      reference: row.reference,
      senderName: row.sender_name,
      senderAccount: row.sender_account,
      recipient: row.recipient_name,
      recipientAccount: row.recipient_account,
      bank: row.bank,
      amount: Number(row.amount),
      narration: row.narration,
      type: row.transaction_type,
      status: row.status,
      date: row.created_at,
    }));

    return res.json({
      success: true,
      transactions,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to load transactions.",
    });

  }
};