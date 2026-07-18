import { useState } from "react";

function SecuritySettings() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const [message, setMessage] = useState("");

  const changePassword = () => {

    if (
      currentPassword !== "Demo@12345"
    ) {

      alert("Current password is incorrect.");

      return;

    }

    setMessage("Password changed successfully (Demo Mode).");

    setCurrentPassword("");
    setNewPassword("");

  };

  const changePin = () => {

    if (currentPin !== "6169") {

      alert("Current Transaction PIN is incorrect.");

      return;

    }

    if (newPin.length !== 4) {

      alert("PIN must be exactly 4 digits.");

      return;

    }

    localStorage.setItem(
      "transaction_pin",
      newPin
    );

    addNotification(
  "Transaction PIN Updated",
  "Your transaction PIN has been changed successfully."
);

    setMessage("Transaction PIN updated successfully.");

    setCurrentPin("");
    setNewPin("");

  };

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-10">

      <h2 className="text-2xl font-bold text-white">

        Security

      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div>

          <h3 className="text-lg text-white font-semibold">

            Change Password

          </h3>

          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e)=>setCurrentPassword(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 mt-4 text-white"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 mt-4 text-white"
          />

          <button
            onClick={changePassword}
            className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white"
          >
            Change Password
          </button>

        </div>

        <div>

          <h3 className="text-lg text-white font-semibold">

            Transaction PIN

          </h3>

          <input
            type="password"
            maxLength={4}
            placeholder="Current PIN"
            value={currentPin}
            onChange={(e)=>setCurrentPin(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 mt-4 text-white"
          />

          <input
            type="password"
            maxLength={4}
            placeholder="New PIN"
            value={newPin}
            onChange={(e)=>setNewPin(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 mt-4 text-white"
          />

          <button
            onClick={changePin}
            className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white"
          >
            Update PIN
          </button>

        </div>

      </div>

      {message && (

        <div className="mt-8 bg-green-500/20 border border-green-500 p-4 rounded-xl text-green-400">

          {message}

        </div>

      )}

    </div>

  );

}

export default SecuritySettings;