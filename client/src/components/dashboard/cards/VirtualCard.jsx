import { useState } from "react";
import { FaEye, FaEyeSlash, FaWifi } from "react-icons/fa";
import { getCard } from "../../../services/cardService";

function VirtualCard() {
  const [show, setShow] = useState(false);

  const card = getCard();

  return (
    <div className="mt-10">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-green-900 to-black p-8 shadow-2xl max-w-2xl">

        <div className="flex justify-between items-center">

          <h2 className="text-white text-3xl font-bold">
            JP Morgan Chase
          </h2>

          <FaWifi className="text-white text-3xl rotate-90" />

        </div>

        <div className="mt-12">

          <p className="text-gray-300 text-sm">
            Card Number
          </p>

          <h3 className="text-white text-3xl tracking-widest mt-2">

            {show
              ? card.number
              : "•••• •••• •••• 4589"}

          </h3>

        </div>

        <div className="flex justify-between mt-10">

          <div>

            <p className="text-gray-400 text-sm">

              Card Holder

            </p>

            <h4 className="text-white text-xl mt-2">

              {card.holder}

            </h4>

          </div>

          <div>

            <p className="text-gray-400 text-sm">

              Expires

            </p>

            <h4 className="text-white text-xl mt-2">

              {card.expiry}

            </h4>

          </div>

        </div>

        <div className="flex justify-between items-center mt-12">

          <button
            onClick={() => setShow(!show)}
            className="bg-white/10 hover:bg-white/20 rounded-xl px-5 py-3 flex items-center gap-3 text-white"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
            {show ? "Hide" : "Show"} Number
          </button>

          <h2 className="text-3xl text-white font-bold">
            {card.type}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default VirtualCard;