import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Store = {
  id: number;
  name: string;
};

export default function Store() {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState<number | null>(null);

  const stores: Store[] = [
    { id: 1, name: "PCDIGA" },
    { id: 2, name: "Chip7" },
    { id: 3, name: "Globaldata" },
    { id: 4, name: "Worten" },
    { id: 5, name: "Switch Technology" },
    { id: 6, name: "Melhor Preço" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">
      <div className="w-full max-w-xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          Escolhe a loja
        </h1>

        <p className="text-zinc-400 mb-8">
          Seleciona a loja onde pretendes comprar os componentes.
        </p>

        <div className="space-y-3">
          {stores.map((store) => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store.id)}
              className={`w-full rounded-xl p-4 border transition ${
                selectedStore === store.id
                  ? "bg-blue-600 border-blue-600"
                  : "bg-zinc-900 border-zinc-800 hover:border-blue-500"
              }`}
            >
              {store.name}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-8 gap-4">
          <button
            onClick={() => navigate("/country")}
            className="w-full rounded-xl bg-zinc-800 py-4 hover:bg-zinc-700"
          >
            Voltar
          </button>

          <button
            disabled={selectedStore === null}
            onClick={() => navigate("/budget")}
            className="w-full rounded-xl bg-green-600 py-4 font-semibold disabled:bg-zinc-700"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
} 