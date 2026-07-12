import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="w-full max-w-2xl text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          PC Forge
        </h1>

        <p className="text-xl text-zinc-400 mb-10">
          Forge the perfect PC.
        </p>

        <div className="space-y-4">
          <Button
            text="Começar"
            onClick={() => navigate("/country")}
          />

          <Button
            text="Favoritos"
            onClick={() => navigate("/favorites")}
          />

          <Button
            text="Definições"
            onClick={() => navigate("/settings")}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          © 2026 PC Forge
        </p>
      </div>
    </div>
  );
} 