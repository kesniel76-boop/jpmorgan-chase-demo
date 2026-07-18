const API_URL = "http://localhost:5000/api/customers";

const STORAGE_KEY = "jpm_customers";




// ===============================
// Get all customers from database
// ===============================
export async function getCustomers() {

  try {

    const response = await fetch(API_URL);

    const data = await response.json();

    return data.customers || [];


  } catch (error) {

    console.error(
      "Failed to fetch customers:",
      error
    );

    return [];

  }

}




// ===============================
// Get single customer from database
// ===============================
export async function getCustomer(customerId) {

  try {


    const response = await fetch(
      `${API_URL}/${customerId}`
    );


    const data = await response.json();



    if (!data.success) {

      return null;

    }


    return data.customer;



  } catch(error) {


    console.error(
      "Failed to fetch customer:",
      error
    );


    return null;


  }

}





// ===============================
// Update customer in PostgreSQL
// ===============================
export async function updateCustomerDatabase(
  customerId,
  customerData
) {


  try {


    const response = await fetch(

      `${API_URL}/${customerId}`,

      {

        method:"PUT",

        headers:{

          "Content-Type":"application/json",

        },


        body:JSON.stringify(customerData)

      }

    );



    const data = await response.json();



    return data;



  } catch(error) {


    console.error(
      "Failed to update customer:",
      error
    );


    return {

      success:false

    };


  }

}





// ===============================
// Local storage fallback
// ===============================
export function getLocalCustomers() {


  const data = localStorage.getItem(STORAGE_KEY);


  return data
    ? JSON.parse(data)
    : [];


}





export function saveCustomer(customer) {


  const customers = getLocalCustomers();


  customers.push(customer);


  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(customers)

  );


}





// Legacy local update
export function updateCustomer(updatedCustomer) {


  const customers = getLocalCustomers();



  const updatedCustomers = customers.map(

    (customer)=>{


      if(

        customer.customerId ===
        updatedCustomer.customerId

      ){

        return updatedCustomer;

      }


      return customer;


    }

  );



  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedCustomers)

  );


}





export function findCustomer(email) {


  const customers = getLocalCustomers();



  return customers.find(

    (customer)=>

      customer.email.toLowerCase() ===
      email.toLowerCase()

  );


}





export function generateCustomerId() {


  return (

    "JPM" +

    Math.floor(
      100000 + Math.random()*900000
    )

  );


}





export function generateAccountNumber() {


  return Math.floor(

    1000000000 +
    Math.random()*9000000000

  ).toString();


}