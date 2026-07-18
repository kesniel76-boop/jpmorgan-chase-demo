import {
  FaPaperPlane,
  FaWallet,
  FaCreditCard,
  FaFileInvoice,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";

const actions = [
  {
    icon: <FaPaperPlane />,
    title: "Transfer",
  },
  {
    icon: <FaWallet />,
    title: "Deposit",
  },
  {
    icon: <FaCreditCard />,
    title: "Cards",
  },
  {
    icon: <FaFileInvoice />,
    title: "Statements",
  },
  {
    icon: <FaUsers />,
    title: "Beneficiaries",
  },
  {
    icon: <FaMobileAlt />,
    title: "Airtime",
  },
];

function QuickActions() {
  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {actions.map((action) => (
          <button
            key={action.title}
            className="bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-3xl text-green-400 flex justify-center mb-4">
              {action.icon}
            </div>

            <p className="text-white font-medium">
              {action.title}
            </p>
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;