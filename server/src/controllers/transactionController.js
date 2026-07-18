const db = require("../config/database");


// Get customer transactions
exports.getTransactions = async (req, res) => {

  try {

    const { customerId } = req.params;


    const result = await db.query(
      `
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

      WHERE customer_id = $1

      ORDER BY created_at DESC
      `,
      [customerId]
    );


    res.json({

      success:true,

      transactions:result.rows

    });



  } catch(error) {


    console.error(error);


    res.status(500).json({

      success:false,

      message:"Failed to fetch transactions."

    });


  }

};






// Create transaction
exports.createTransaction = async (req,res)=>{


  try{


    const {

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


    } = req.body;




    const result = await db.query(

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

      (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
      )


      RETURNING *

      `,


      [

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

      ]

    );




    res.json({

      success:true,

      transaction:result.rows[0]

    });



  }catch(error){


    console.error(error);



    res.status(500).json({

      success:false,

      message:"Failed to create transaction."

    });


  }


};