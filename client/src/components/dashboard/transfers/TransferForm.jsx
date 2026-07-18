// ===============================
// IMPORTS
// ===============================
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUniversity,
  FaUser,
  FaMoneyBillWave,
  FaStickyNote,
  FaArrowRight,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

import banks from "../../../data/banks";

import TransactionPinModal from "../modals/TransactionPinModal";

import { getCurrentUser } from "../../../services/authService";

import { saveTransaction } from "../../../services/transactionService";
import { useAuth } from "../../../contexts/AuthContext";

function TransferForm() {
  const navigate = useNavigate();

  const currentUser = getCurrentUser();

  const [loading, setLoading] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [showPinModal, setShowPinModal] = useState(false);

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    bank: "",
    recipientName: "",
    recipientAccount: "",
    amount: "",
    narration: "",
  });

  // ===============================
  // REFERENCE PREVIEW
  // ===============================

  const reference = useMemo(() => {
    const random = Math.floor(
      100000 + Math.random() * 900000
    );

    return `JPMC-PREVIEW-${random}`;
  }, []);

  // ===============================
  // LIVE SUMMARY
  // ===============================

  const summary = useMemo(() => {
    return {
      bank:
        form.bank || "Select destination bank",

      recipient:
        form.recipientName || "Recipient name",

      account:
        form.recipientAccount || "0000000000",

      amount:
        Number(form.amount || 0),

      narration:
        form.narration || "No narration",

      fee: 0,

      status: "Ready",

      reference,
    };
  }, [form, reference]);

  // ===============================
  // INPUT HANDLER
  // ===============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "recipientAccount") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "amount") {
      newValue = value.replace(/[^\d.]/g, "");
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ===============================
  // VALIDATION
  // ===============================

  const validateForm = () => {
    const validationErrors = {};

    if (!form.bank) {
      validationErrors.bank =
        "Please select a destination bank.";
    }

    if (!form.recipientName.trim()) {
      validationErrors.recipientName =
        "Recipient name is required.";
    }

    if (form.recipientAccount.length !== 10) {
      validationErrors.recipientAccount =
        "Account number must contain exactly 10 digits.";
    }

    if (
      !form.amount ||
      Number(form.amount) <= 0
    ) {
      validationErrors.amount =
        "Enter a valid transfer amount.";
    }

    setErrors(validationErrors);

    return (
      Object.keys(validationErrors).length === 0
    );
  };

  // ===============================
  // CONTINUE
  // ===============================

  const handleContinue = () => {
    if (!validateForm()) return;

    setShowConfirm(true);
  };

  // ===============================
  // FINAL TRANSFER
  // ===============================

 const submitTransfer = async () => {

  setLoading(true);


  const transaction = await saveTransaction({

    reference,

    customerId:
      currentUser.customerId,


    senderName:
      currentUser.name,


    senderAccount:
      currentUser.accountNumber,


    recipient:
      form.recipientName,


    recipientAccount:
      form.recipientAccount,


    bank:
      form.bank,


    amount:
      Number(form.amount),


    narration:
      form.narration,


    type:
      "Transfer",


    status:
      "Pending"

  });



  setLoading(false);



  if(!transaction){

    alert(
      "Transfer failed. Please try again."
    );

    return;

  }



  sessionStorage.setItem(
    "latestReceipt",
    JSON.stringify(transaction)
  );



  navigate(
    "/receipt",
    {
      state:{
        transaction
      }
    }
  );


};  // ===============================
  // JSX
  // ===============================

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* ===============================
            TRANSFER FORM
        =============================== */}

        <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 px-8 py-8">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">

                <FaShieldAlt className="text-white text-3xl" />

              </div>

              <div>

                <h1 className="text-3xl font-bold text-white">
                  JP Morgan Chase
                </h1>

                <p className="text-blue-100 mt-1">
                  Secure Domestic & International Transfer
                </p>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="p-8 space-y-7">

            {/* Bank */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination Bank
              </label>

              <div className="relative">

                <FaUniversity className="absolute left-4 top-4 text-gray-400" />

                <select
                  name="bank"
                  value={form.bank}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border pl-12 pr-4 py-4 outline-none transition
                  ${
                    errors.bank
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-700"
                  }`}
                >

                  <option value="">
                    Select Destination Bank
                  </option>

                  {banks.map((bank) => (
                    <option
                      key={bank}
                      value={bank}
                    >
                      {bank}
                    </option>
                  ))}

                </select>

              </div>

              {errors.bank && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.bank}
                </p>
              )}

            </div>

            {/* Recipient */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recipient Name
              </label>

              <div className="relative">

                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="recipientName"
                  value={form.recipientName}
                  onChange={handleChange}
                  placeholder="Recipient Full Name"
                  className={`w-full rounded-2xl border pl-12 pr-4 py-4 outline-none transition
                  ${
                    errors.recipientName
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-700"
                  }`}
                />

              </div>

              {errors.recipientName && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.recipientName}
                </p>
              )}

            </div>

            {/* Account */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Account Number
              </label>

              <input
                type="text"
                name="recipientAccount"
                value={form.recipientAccount}
                onChange={handleChange}
                maxLength={10}
                placeholder="0123456789"
                className={`w-full rounded-2xl border px-4 py-4 outline-none transition
                ${
                  errors.recipientAccount
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-700"
                }`}
              />

              {errors.recipientAccount && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.recipientAccount}
                </p>
              )}

            </div>

            {/* Amount */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amount
              </label>

              <div className="relative">

                <FaMoneyBillWave className="absolute left-4 top-4 text-green-600" />

                <input
                  type="text"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className={`w-full rounded-2xl border pl-12 pr-4 py-4 outline-none transition
                  ${
                    errors.amount
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-700"
                  }`}
                />

              </div>

              {errors.amount && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.amount}
                </p>
              )}

            </div>

            {/* Narration */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Narration
              </label>

              <div className="relative">

                <FaStickyNote className="absolute left-4 top-5 text-gray-400" />

                <textarea
                  rows={4}
                  name="narration"
                  value={form.narration}
                  onChange={handleChange}
                  placeholder="Payment description"
                  className="w-full rounded-2xl border border-gray-300 pl-12 pr-4 py-4 outline-none resize-none focus:border-blue-700"
                />

              </div>

            </div>

            <button
              type="button"
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-blue-900 to-green-700 hover:opacity-95 transition rounded-2xl py-5 text-white font-semibold flex items-center justify-center gap-3"
            >

              Continue Transfer

              <FaArrowRight />

            </button>

          </div>

        </div>        {/* ===============================
            LIVE SUMMARY
        =============================== */}

        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl shadow-2xl text-white h-fit overflow-hidden">

          <div className="px-8 py-7 border-b border-white/10">

            <div className="flex items-center gap-3">

              <FaCheckCircle className="text-green-400 text-2xl" />

              <div>

                <h2 className="text-2xl font-bold">
                  Live Transfer Summary
                </h2>

                <p className="text-blue-200 text-sm mt-1">
                  Review your transfer before submission.
                </p>

              </div>

            </div>

          </div>

          <div className="p-8 space-y-6">

            <SummaryRow
              label="Bank"
              value={summary.bank}
            />

            <SummaryRow
              label="Recipient"
              value={summary.recipient}
            />

            <SummaryRow
              label="Account"
              value={summary.account}
            />

            <SummaryRow
              label="Amount"
              value={`${currentUser?.currency || "$"}${summary.amount.toLocaleString()}`}
            />

            <SummaryRow
              label="Narration"
              value={summary.narration}
            />

            <SummaryRow
              label="Transfer Fee"
              value="$0.00"
            />

            <SummaryRow
              label="Status"
              value={summary.status}
            />

            <SummaryRow
              label="Reference"
              value={summary.reference}
            />

          </div>

        </div>

      </div>

      {
      
      /* ===============================
          CONFIRMATION MODAL
      =============================== */}

      {showConfirm && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40 px-5">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden">

            <div className="bg-gradient-to-r from-blue-900 to-green-700 p-7">

              <h2 className="text-3xl font-bold text-white">

                Confirm Transfer

              </h2>

              <p className="text-blue-100 mt-2">

                Please review the transfer details carefully.

              </p>

            </div>

            <div className="p-8 space-y-5">

              <SummaryRowDark
                label="Sender"
                value={currentUser?.name}
              />

              <SummaryRowDark
                label="Sender Account"
                value={currentUser?.accountNumber}
              />

              <SummaryRowDark
                label="Destination Bank"
                value={summary.bank}
              />

              <SummaryRowDark
                label="Recipient"
                value={summary.recipient}
              />

              <SummaryRowDark
                label="Account Number"
                value={summary.account}
              />

              <SummaryRowDark
                label="Amount"
                value={`$${summary.amount.toLocaleString()}`}
              />

              <SummaryRowDark
                label="Narration"
                value={summary.narration}
              />

              <SummaryRowDark
                label="Reference"
                value={summary.reference}
              />

            </div>

            <div className="border-t border-gray-200 p-6 flex justify-end gap-4">

              <button
                onClick={() => setShowConfirm(false)}
                className="px-7 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >

                Cancel

              </button>

              <button
  disabled={loading}
  onClick={() => {
    setShowConfirm(false);
    setShowPinModal(true);
  }}
  className="px-7 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold disabled:opacity-60"
>
  {loading ? "Processing..." : "Confirm Transfer"}
</button>

            </div>

          </div>

        </div>

      )}

      {
      /* ===============================
          TRANSACTION PIN
      =============================== */}

      <TransactionPinModal
        open={showPinModal}
        onClose={() => setShowPinModal(false)}
        onSuccess={() => {

          setShowPinModal(false);

          submitTransfer();

        }}
      />    </>
  );
}

/* =====================================================
   SUMMARY COMPONENTS
===================================================== */

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
      <span className="text-gray-300 text-sm">
        {label}
      </span>

      <span className="text-right font-semibold break-all">
        {value}
      </span>
    </div>
  );
}

function SummaryRowDark({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-gray-200 py-3">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-gray-900 text-right break-all">
        {value}
      </span>

    </div>
  );
}

export default TransferForm;