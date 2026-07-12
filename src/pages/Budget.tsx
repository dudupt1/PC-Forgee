import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Budget() {
  const navigate = useNavigate();

  const [budget, setBudget] = useState(1000);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">
      <div className="w-full max-w-xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          Orçamento
        </h1>

        <p className="text-zinc-400 mb-8">
          Escolhe quanto pretendes gastar.
        </p>

        <div className="bg-zinc-900 rounded-xl p-6">

          <h2 className="text-5xl font-bold text-center mb-6">
            €{budget}
          </h2>

          <input
            type="range"
            min="300"
            max="10000"
            step="50"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full"
          />

          <div className="flex justify-between text-zinc-400 mt-2">
            <span>300€</span>
            <span>10000€</span>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            onClick={() => navigate("/store")}
            className="bg-zinc-800 hover:bg-zinc-700 rounded-xl py-4"
          >
            Voltar
          </button>

          <button
            onClick={() => navigate("/preferences")}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl py-4 font-semibold"
          >
            Continuar
          </button>

        </div>

      </div>
    </div>
  );
} 