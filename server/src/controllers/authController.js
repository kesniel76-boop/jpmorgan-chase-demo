  const bcrypt = require("bcrypt");
  const db = require("../config/database");

  function generateCustomerId() {
    return "JPM" + Math.floor(100000 + Math.random() * 900000);
  }

  function generateAccountNumber() {
    return Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
  }

  // =======================
  // REGISTER
  // =======================
  exports.register = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        password,
        transactionPin,
      } = req.body;

      const existing = await db.query(
        "SELECT id FROM customers WHERE email=$1",
        [email]
      );

      if (existing.rows.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Email already exists.",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const hashedPin = await bcrypt.hash(transactionPin, 10);

      const customerId = generateCustomerId();
      const accountNumber = generateAccountNumber();

      await db.query(
        `INSERT INTO customers
        (
          customer_id,
          account_number,
          first_name,
          last_name,
          email,
          phone,
          password,
          transaction_pin,
          balance,
          account_type,
          status
        )
        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [
          customerId,
          accountNumber,
          firstName,
          lastName,
          email,
          phone,
          hashedPassword,
          hashedPin,
          1000000,
          "Savings",
          "Active",
        ]
      );

      return res.status(201).json({
        success: true,
        message: "Account created successfully.",
      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Server error.",
      });

    }
  };

  // =======================
  // LOGIN
  // =======================
  exports.login = async (req, res) => {

    try {

      const { email, password } = req.body;

      const result = await db.query(
        `SELECT * FROM customers
        WHERE email=$1`,
        [email]
      );

      if (result.rows.length === 0) {

        return res.status(401).json({
          success: false,
          message: "Invalid email or password.",
        });

      }

      const customer = result.rows[0];

      const validPassword = await bcrypt.compare(
        password,
        customer.password
      );

      if (!validPassword) {

        return res.status(401).json({
          success: false,
          message: "Invalid email or password.",
        });

      }

      return res.json({

        success: true,

        user: {

          id: customer.id,
          customerId: customer.customer_id,
          accountNumber: customer.account_number,
          name:
            customer.first_name +
            " " +
            customer.last_name,
          email: customer.email,
          phone: customer.phone,
          balance: Number(customer.balance),
          accountType: customer.account_type,
          status: customer.status,
          currency: "$",

        },

      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Server error.",
      });

    }

  };

  // =======================
// VERIFY TRANSACTION PIN
// =======================
exports.verifyTransactionPin = async (req, res) => {
  try {
    const { customerId, transactionPin } = req.body;

    const result = await db.query(
      `SELECT transaction_pin
       FROM customers
       WHERE customer_id = $1`,
      [customerId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    const validPin = await bcrypt.compare(
      transactionPin,
      result.rows[0].transaction_pin
    );

    if (!validPin) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Transaction PIN.",
      });
    }

    return res.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error.",
    });

  }
};