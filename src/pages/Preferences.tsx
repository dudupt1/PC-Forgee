import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBuild } from "../contexts/BuildContext";

export default function Preferences() {
  const navigate = useNavigate();
  const { build, setBuild } = useBuild();

  const [purpose, setPurpose] = useState("");
  const [wifi, setWifi] = useState(false);
  const [rgb, setRgb] = useState(false);
  const [bluetooth, setBluetooth] = useState(false);
  const [performance, setPerformance] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">
      <div className="w-full max-w-xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          Preferências
        </h1>

        <p className="text-zinc-400 mb-8">
          Personaliza o teu PC.
        </p>

        <div className="space-y-4">

          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full bg-zinc-900 rounded-xl p-4"
          >
            <option value="">Objetivo</option>
            <option value="gaming">🎮 Gaming</option>
            <option value="streaming">🎥 Streaming</option>
            <option value="work">💼 Trabalho</option>
            <option value="editing">🎬 Edição</option>
          </select>


          <label className="flex justify-between bg-zinc-900 p-4 rounded-xl">
            🛜 Wi-Fi obrigatório
            <input
              type="checkbox"
              checked={wifi}
              onChange={() => setWifi(!wifi)}
            />
          </label>


          <label className="flex justify-between bg-zinc-900 p-4 rounded-xl">
            🌈 RGB obrigatório
            <input
              type="checkbox"
              checked={rgb}
              onChange={() => setRgb(!rgb)}
            />
          </label>


          <label className="flex justify-between bg-zinc-900 p-4 rounded-xl">
            🔵 Bluetooth obrigatório
            <input
              type="checkbox"
              checked={bluetooth}
              onChange={() => setBluetooth(!bluetooth)}
            />
          </label>


          <label className="flex justify-between bg-zinc-900 p-4 rounded-xl">
            ⚡ Priorizar desempenho
            <input
              type="checkbox"
              checked={performance}
              onChange={() => setPerformance(!performance)}
            />
          </label>

        </div>


        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            onClick={() => navigate("/budget")}
            className="bg-zinc-800 rounded-xl py-4"
          >
            Voltar
          </button>


          <button
            onClick={() => navigate("/result")}
            className="bg-green-600 rounded-xl py-4 font-semibold"
          >
            Gerar PC
          </button>

        </div>

      </div>
    </div>
  );
} 