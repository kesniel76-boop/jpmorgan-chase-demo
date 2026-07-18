import { useState } from "react";
import api from "../../../services/api";
import { getCurrentUser } from "../../../services/authService";


function TransactionPinModal({
    open,
    onClose,
    onSuccess,
}) {


    const [pin, setPin] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    if (!open) return null;





    const handleChange = (e) => {


        const value =
            e.target.value.replace(/\D/g, "");



        if(value.length <= 4){


            setPin(value);

            setError("");

        }


    };






const verifyPin = async () => {
  if (pin.length !== 4) {
    setError("Please enter your 4-digit PIN.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const currentUser = getCurrentUser();

    const response = await api.post("/auth/verify-pin", {
      customerId: currentUser.customerId,
      transactionPin: pin,
    });

    if (response.data.success) {
      setLoading(false);
      setPin("");
      onSuccess();
    }
  } catch (error) {
    setLoading(false);

    setError(
      error.response?.data?.message ||
        "Incorrect Transaction PIN."
    );
  }
};




    return (



        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">



            <div className="bg-slate-900 rounded-3xl p-8 w-full max-w-md border border-slate-700">





                <h2 className="text-3xl font-bold text-white text-center">

                    Transaction PIN

                </h2>






                <p className="text-gray-400 text-center mt-3">

                    Enter your 4-digit transaction PIN

                </p>







                <input


                    type="password"


                    value={pin}


                    onChange={handleChange}


                    maxLength={4}


                    className="w-full mt-8 bg-slate-800 rounded-xl p-5 text-center text-3xl tracking-[20px] text-white outline-none"


                />








                {error && (


                    <p className="text-red-400 mt-4 text-center">

                        {error}

                    </p>


                )}









                <div className="grid grid-cols-2 gap-4 mt-8">





                    <button


                        onClick={onClose}


                        className="bg-slate-700 hover:bg-slate-600 rounded-xl py-4 text-white font-bold"


                    >

                        Cancel

                    </button>







                    <button


                        onClick={verifyPin}


                        disabled={loading}


                        className="bg-green-500 hover:bg-green-600 rounded-xl py-4 text-white font-bold disabled:opacity-60"


                    >


                        {
                            loading
                            ?
                            "Verifying..."
                            :
                            "Confirm"
                        }


                    </button>






                </div>






            </div>





        </div>


    );


}



export default TransactionPinModal;