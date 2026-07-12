import { useNavigate } from "react-router-dom";
import { useBuild } from "../contexts/BuildContext";
import { generateBuild } from "../services/buildEngineV2";

type Component = {
  type: string;
  name: string;
  price: number;
};

export default function Result() {
  const navigate = useNavigate();
  const { build: userBuild } = useBuild();

const generated = generateBuild({
  budget: userBuild.budget,
  wifi: userBuild.wifi,
  rgb: userBuild.rgb,
});
const build = [
  {
    type: "CPU",
    name: generated.cpu.name,
    price: generated.cpu.price,
  },
  {
    type: "GPU",
    name: generated.gpu.name,
    price: generated.gpu.price,
  },
  {
    type: "Motherboard",
    name: generated.motherboard.name,
    price: generated.motherboard.price,
  },
  {
    type: "RAM",
    name: generated.ram.name,
    price: generated.ram.price,
  },
  {
    type: "SSD",
    name: generated.ssd.name,
    price: generated.ssd.price,
  },
  {
    type: "Fonte",
    name: generated.psu.name,
    price: generated.psu.price,
  },
  {
    type: "Cooler",
    name: generated.cooler.name,
    price: generated.cooler.price,
  },
  {
    type: "Caixa",
    name: generated.case.name,
    price: generated.case.price,
  },
];

  const total = build.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          A tua Build
        </h1>

        <p className="text-zinc-400 mb-8">
          PC gerado pelo PC Forge
        </p>


        <div className="space-y-4">

          {build.map((item) => (
            <div
              key={item.type}
              className="bg-zinc-900 rounded-xl p-5 flex justify-between"
            >

              <div>
                <p className="text-blue-400">
                  {item.type}
                </p>

                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>
              </div>

              <p className="text-xl font-bold">
                {item.price}€
              </p>

            </div>
          ))}

        </div>


        <div className="mt-8 bg-blue-600 rounded-xl p-6 text-center">

          <p className="text-xl">
            Preço total
          </p>

          <p className="text-5xl font-bold">
            {total}€
          </p>

        </div>


        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-zinc-800 rounded-xl py-4"
        >
          Voltar ao início
        </button>

      </div>

    </div>
  );
} 