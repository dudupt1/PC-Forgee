import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Country() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");

  const countries = [
    { code: "PT", name: "🇵🇹 Portugal" },
    { code: "ES", name: "🇪🇸 Espanha" },
    { code: "FR", name: "🇫🇷 França" },
    { code: "DE", name: "🇩🇪 Alemanha" },
    { code: "IT", name: "🇮🇹 Itália" },
    { code: "UK", name: "🇬🇧 Reino Unido" },
    { code: "US", name: "🇺🇸 Estados Unidos" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="w-full max-w-xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          Escolhe o país
        </h1>

        <p className="text-zinc-400 mb-8">
          Seleciona o país onde vais comprar os componentes.
        </p>

        <div className="space-y-3">
          {countries.map((item) => (
            <button
              key={item.code}
              onClick={() => setCountry(item.code)}
              className={`w-full rounded-xl p-4 border transition ${
                country === item.code
                  ? "bg-blue-600 border-blue-600"
                  : "bg-zinc-900 border-zinc-800 hover:border-blue-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          disabled={!country}
          onClick={() => navigate("/store")}
          className="mt-8 w-full rounded-xl bg-green-600 py-4 font-semibold disabled:bg-zinc-700"
        >
          Continuar
        </button>
      </div>
    </div>
  );
} 