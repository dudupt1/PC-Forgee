import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt");
  const [currency, setCurrency] = useState("EUR");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">

      <div className="w-full max-w-xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          ⚙️ Definições
        </h1>

        <p className="text-zinc-400 mb-8">
          Personaliza a aplicação.
        </p>


        <div className="space-y-4">

          <label className="flex justify-between bg-zinc-900 p-4 rounded-xl">
            🌙 Modo escuro

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </label>


          <div className="bg-zinc-900 p-4 rounded-xl">

            <p className="mb-2">
              🌍 Idioma
            </p>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-zinc-800 p-3 rounded-lg"
            >
              <option value="pt">
                Português
              </option>

              <option value="en">
                English
              </option>

              <option value="es">
                Español
              </option>

            </select>

          </div>


          <div className="bg-zinc-900 p-4 rounded-xl">

            <p className="mb-2">
              💶 Moeda
            </p>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full bg-zinc-800 p-3 rounded-lg"
            >
              <option value="EUR">
                Euro (€)
              </option>

              <option value="USD">
                Dólar ($)
              </option>

              <option value="GBP">
                Libra (£)
              </option>

            </select>

          </div>


          <label className="flex justify-between bg-zinc-900 p-4 rounded-xl">

            🔔 Notificações

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />

          </label>


        </div>


        <button
          onClick={() => navigate("/")}
          className="
            mt-8
            w-full
            bg-blue-600
            hover:bg-blue-700
            rounded-xl
            py-4
            font-semibold
          "
        >
          Guardar e voltar
        </button>


      </div>

    </div>
  );
} 