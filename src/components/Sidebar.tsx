 import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "🏠 Início", path: "/" },
  { name: "🌍 País", path: "/country" },
  { name: "🏪 Loja", path: "/store" },
  { name: "💰 Orçamento", path: "/budget" },
  { name: "⚙️ Preferências", path: "/preferences" },
  { name: "🖥️ Resultado", path: "/result" },
  { name: "❤️ Favoritos", path: "/favorites" },
  { name: "🔧 Definições", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-zinc-900 border-r border-zinc-800 p-6">

      <h2 className="text-3xl font-bold text-white mb-8">
        ⚒️ PC Forge
      </h2>

      <nav className="flex flex-col gap-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}