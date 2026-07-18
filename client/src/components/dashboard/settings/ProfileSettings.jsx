import { useState } from "react";
import { getCurrentUser } from "../../../services/authService";

function ProfileSettings() {

  const user = getCurrentUser();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [message, setMessage] = useState("");

  const saveProfile = () => {

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
    };

    localStorage.setItem(
      "pcb_user",
      JSON.stringify(updatedUser)
    );

    setMessage("Profile updated successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);

  };

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-10">

      <h2 className="text-2xl font-bold text-white">
        Profile Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div>

          <label className="text-gray-400">
            Full Name
          </label>

          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 mt-2 text-white outline-none"
          />

        </div>

        <div>

          <label className="text-gray-400">
            Email Address
          </label>

          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 mt-2 text-white outline-none"
          />

        </div>

        <div>

          <label className="text-gray-400">
            Phone Number
          </label>

          <input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="+234..."
            className="w-full bg-slate-800 rounded-xl p-4 mt-2 text-white outline-none"
          />

        </div>

      </div>

      {message && (

        <div className="mt-6 bg-green-500/20 border border-green-500 rounded-xl p-4 text-green-400">

          {message}

        </div>

      )}

      <button
        onClick={saveProfile}
        className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold text-white"
      >
        Save Changes
      </button>

    </div>

  );

}

export default ProfileSettings;