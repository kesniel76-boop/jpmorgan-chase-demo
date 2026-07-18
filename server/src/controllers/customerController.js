const db = require("../config/database");


// Get all customers
exports.getCustomers = async (req, res) => {

  try {

    const result = await db.query(`
      SELECT
        id,
        customer_id,
        account_number,
        first_name,
        last_name,
        email,
        phone,
        account_type,
        balance,
        currency,
        status,
        created_at
      FROM customers
      ORDER BY created_at DESC
    `);


    res.json({
      success: true,
      customers: result.rows,
    });


  } catch (error) {

    console.error(error);


    res.status(500).json({
      success: false,
      message: "Failed to fetch customers.",
    });

  }

};




// Get single customer by customerId
exports.getCustomer = async (req, res) => {

  try {


    const { customerId } = req.params;



    const result = await db.query(
      `
      SELECT
        id,
        customer_id,
        account_number,
        first_name,
        last_name,
        email,
        phone,
        account_type,
        balance,
        currency,
        status,
        created_at
      FROM customers
      WHERE customer_id = $1
      LIMIT 1
      `,
      [customerId]
    );



    if (result.rows.length === 0) {


      return res.status(404).json({

        success: false,

        message: "Customer not found.",

      });


    }



    res.json({

      success: true,

      customer: result.rows[0],

    });



  } catch (error) {


    console.error(error);



    res.status(500).json({

      success: false,

      message: "Failed to fetch customer.",

    });


  }

};






// Update customer (Admin actions)
exports.updateCustomer = async (req, res) => {


  try {


    const { customerId } = req.params;


    const {
      balance,
      status
    } = req.body;




    const result = await db.query(

      `
      UPDATE customers

      SET

        balance = COALESCE($1, balance),

        status = COALESCE($2, status)


      WHERE customer_id = $3


      RETURNING
        id,
        customer_id,
        account_number,
        first_name,
        last_name,
        email,
        balance,
        currency,
        status

      `,

      [
        balance,
        status,
        customerId
      ]

    );





    if (result.rows.length === 0) {


      return res.status(404).json({

        success:false,

        message:"Customer not found."

      });


    }




    res.json({

      success:true,

      customer: result.rows[0]

    });




  } catch(error) {


    console.error(error);



    res.status(500).json({

      success:false,

      message:"Failed to update customer."

    });


  }


};