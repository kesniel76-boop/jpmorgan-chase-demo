import { useState } from "react";

function SettingsPanel() {

  const [bankName, setBankName] = useState("JP Morgan Chase");
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(true);

  const saveSettings = () => {

    localStorage.setItem(
      "jpm_admin_settings",
      JSON.stringify({
        bankName,
        language,
        darkMode,
      })
    );

    alert("Settings saved successfully.");

  };

  return (

    <div className="mt-10 space-y-8">

      {/* Bank Information */}

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

        <h2 className="text-2xl font-bold text-white">

          Bank Information

        </h2>

        <div className="mt-6">

          <label className="text-gray-400">

            Bank Name

          </label>

          <input
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-3 w-full bg-slate-800 rounded-xl p-4 text-white"
          />

        </div>

      </div>

      {/* Language */}

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

        <h2 className="text-2xl font-bold text-white">

          Language

        </h2>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mt-6 bg-slate-800 rounded-xl p-4 text-white"
        >
          <option>English</option>
          <option>Spanish</option>
        </select>

      </div>

      {/* Appearance */}

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

        <h2 className="text-2xl font-bold text-white">

          Appearance

        </h2>

        <div className="flex items-center justify-between mt-6">

          <p className="text-gray-300">

            Dark Mode

          </p>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-6 py-3 rounded-xl text-white font-semibold ${
              darkMode
                ? "bg-green-500"
                : "bg-gray-600"
            }`}
          >
            {darkMode ? "Enabled" : "Disabled"}
          </button>

        </div>

      </div>

      {/* Save */}

      <button
        onClick={saveSettings}
        className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-white font-bold"
      >

        Save Settings

      </button>

    </div>

  );

}

export default SettingsPanel;