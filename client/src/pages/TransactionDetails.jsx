import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { getTransactions } from "../services/transactionService";

import ReceiptHeader from "../components/dashboard/receipt/ReceiptHeader";
import ReceiptStatus from "../components/dashboard/receipt/ReceiptStatus";
import ReceiptSender from "../components/dashboard/receipt/ReceiptSender";
import ReceiptRecipient from "../components/dashboard/receipt/ReceiptRecipient";
import ReceiptSummary from "../components/dashboard/receipt/ReceiptSummary";

function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const receiptRef = useRef(null);

  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const loadTransaction = () => {
      const found = getTransactions().find(
        (item) => item.id.toString() === id
      );

      setTransaction(found || null);
    };

    loadTransaction();

    const interval = setInterval(loadTransaction, 1000);

    return () => clearInterval(interval);
  }, [id]);

  const downloadReceipt = async () => {
    if (!receiptRef.current) return;

    const canvas = await html2canvas(receiptRef.current, {
      scale: 2,
      backgroundColor: "#020617",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const imgHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      imgHeight
    );

    pdf.save(
      `PenCraftBank_${transaction.reference}.pdf`
    );
  };

  if (!transaction) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <h1 className="text-white text-3xl">
          Transaction Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <div
          ref={receiptRef}
          className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8"
        >

          <ReceiptHeader />

          <ReceiptStatus transaction={transaction} />

          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            <ReceiptSender />

            <ReceiptRecipient
              transaction={transaction}
            />

          </div>

          <div className="mt-6">

            <ReceiptSummary
              transaction={transaction}
            />

          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-10">

            <button
              onClick={() => window.print()}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition"
            >
              🖨 Print Receipt
            </button>

            <button
              onClick={downloadReceipt}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition"
            >
              ⬇ Download PDF
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-xl transition"
            >
              🏠 Back to Dashboard
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TransactionDetails;