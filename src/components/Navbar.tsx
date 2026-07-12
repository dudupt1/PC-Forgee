import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="
        w-full
        bg-zinc-950
        border-b
        border-zinc-800
        px-8
        py-4
        flex
        justify-between
        items-center
        text-white
      "
    >

      <button
        onClick={() => navigate("/")}
        className="
          text-2xl
          font-bold
          hover:text-blue-500
          transition
        "
      >
        ⚒️ PC Forge
      </button>


      <div className="flex gap-6">

        <button
          onClick={() => navigate("/favorites")}
          className="hover:text-blue-500 transition"
        >
          ❤️ Favoritos
        </button>


        <button
          onClick={() => navigate("/settings")}
          className="hover:text-blue-500 transition"
        >
          ⚙️ Definições
        </button>

      </div>

    </nav>
  );
} 