import { useLocation, useNavigate } from "react-router-dom";
import {
    FaCheckCircle,
    FaUniversity,
    FaUser,
    FaMoneyBillWave,
    FaReceipt,
    FaCalendarAlt,
    FaArrowLeft,
    FaPrint,
    FaDownload,
} from "react-icons/fa";

function Receipt() {
    const location = useLocation();

const navigate = useNavigate();

const transaction =
  location.state?.transaction ||
  JSON.parse(sessionStorage.getItem("latestReceipt"));

    if (!transaction) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">

                <div className="bg-slate-900 rounded-3xl p-10 text-center">

                    <h2 className="text-white text-3xl font-bold">
                        Receipt Not Found
                    </h2>

                    <button
                        onClick={() => navigate("/transfer")}
                        className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white"
                    >
                        Go Back
                    </button>

                </div>

            </div>
        );
    }

    return (

        <div className="min-h-screen bg-slate-950 py-14">

            <div className="max-w-4xl mx-auto px-5">

                <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">

                    {/* Header */}

                    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 p-10 text-center">

                        <FaCheckCircle className="mx-auto text-7xl text-green-300" />

                        <h1 className="text-4xl font-bold text-white mt-5">

                            Transfer Submitted

                        </h1>

                        <p className="text-blue-100 mt-2">

                            Your transfer request has been received.

                        </p>

                    </div>
                    {/* ===============================
    RECEIPT DETAILS
================================ */}

<div className="p-10">

    <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-6">

                <FaUser className="text-green-400 text-2xl" />

                <h3 className="text-white text-xl font-bold">
                    Sender
                </h3>

            </div>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span className="text-gray-400">
                        Name
                    </span>

                    <span className="text-white">
                        {transaction.senderName}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">
                        Account
                    </span>

                    <span className="text-white">
                        {transaction.senderAccount}
                    </span>

                </div>

            </div>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-6">

                <FaUniversity className="text-blue-400 text-2xl" />

                <h3 className="text-white text-xl font-bold">
                    Recipient
                </h3>

            </div>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span className="text-gray-400">
                        Name
                    </span>

                    <span className="text-white">
                        {transaction.recipient}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">
                        Bank
                    </span>

                    <span className="text-white">
                        {transaction.bank}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">
                        Account
                    </span>

                    <span className="text-white">
                        {transaction.recipientAccount}
                    </span>

                </div>

            </div>

        </div>

    </div>

    <div className="bg-slate-800 rounded-2xl p-8 mt-8">

        <div className="flex items-center gap-3 mb-6">

            <FaReceipt className="text-yellow-400 text-2xl" />

            <h3 className="text-white text-xl font-bold">
                Transaction Details
            </h3>

        </div>

        <div className="space-y-5">

            <div className="flex justify-between">

                <span className="text-gray-400">
                    Amount
                </span>

                <span className="text-green-400 text-2xl font-bold">
                    $
                    {Number(transaction.amount).toLocaleString()}
                </span>

            </div>

            <div className="flex justify-between">

                <span className="text-gray-400">
                    Narration
                </span>

                <span className="text-white">
                    {transaction.narration || "-"}
                </span>

            </div>

            <div className="flex justify-between">

                <span className="text-gray-400">
                    Reference
                </span>

                <span className="text-white font-mono">
                    {transaction.reference}
                </span>

            </div>

            <div className="flex justify-between">

                <span className="text-gray-400">
                    Date
                </span>

                <span className="text-white">
                    {transaction.date}
                </span>

            </div>

            <div className="flex justify-between">

                <span className="text-gray-400">
                    Status
                </span>

                <span
                    className={`px-4 py-1 rounded-full font-semibold ${
                    transaction.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                    }`}
                    >
                        {transaction.status}
                </span>

            </div>

        </div>

    </div>
        {/* ===============================
        ACTION BUTTONS
    ================================ */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

        <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition rounded-2xl py-4 text-white font-semibold"
        >
            <FaPrint />
            Print
        </button>

        <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition rounded-2xl py-4 text-white font-semibold"
        >
            <FaDownload />
            Save PDF
        </button>

        <button
            onClick={() => navigate("/transfer")}
            className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 transition rounded-2xl py-4 text-black font-semibold"
        >
            <FaMoneyBillWave />
            New Transfer
        </button>

        <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center justify-center gap-3 bg-slate-700 hover:bg-slate-600 transition rounded-2xl py-4 text-white font-semibold"
        >
            <FaArrowLeft />
            Dashboard
        </button>

    </div>

</div>

{/* Footer */}

<div className="border-t border-slate-700 px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

    <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} JP Morgan Chase Demo Banking
    </p>

    <div className="flex items-center gap-2 text-gray-500 text-sm">

        <FaCalendarAlt />

        Generated on {new Date().toLocaleString()}

    </div>

</div>

                </div>

            </div>

        </div>

    );
}

export default Receipt;