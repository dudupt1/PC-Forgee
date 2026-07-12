import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">

      <div className="w-full max-w-xl p-8 text-center">

        <h1 className="text-4xl font-bold mb-4">
          ❤️ Favoritos
        </h1>

        <p className="text-zinc-400 mb-8">
          As tuas builds guardadas vão aparecer aqui.
        </p>


        <div className="bg-zinc-900 rounded-xl p-8">

          <p className="text-zinc-500">
            Ainda não tens nenhuma build guardada.
          </p>

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
          Voltar ao início
        </button>


      </div>

    </div>
  );
} 