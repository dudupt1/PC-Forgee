export interface Game {
  id: number;
  name: string;
  category: "FPS" | "Racing" | "RPG" | "Sandbox" | "MOBA";
  cpuWeight: number;
  gpuWeight: number;
}

export const games: Game[] = [
  {
    id: 1,
    name: "Counter-Strike 2",
    category: "FPS",
    cpuWeight: 0.6,
    gpuWeight: 0.4,
  },
  {
    id: 2,
    name: "Fortnite",
    category: "FPS",
    cpuWeight: 0.4,
    gpuWeight: 0.6,
  },
  {
    id: 3,
    name: "Minecraft",
    category: "Sandbox",
    cpuWeight: 0.7,
    gpuWeight: 0.3,
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    category: "RPG",
    cpuWeight: 0.3,
    gpuWeight: 0.7,
  },
  {
    id: 5,
    name: "GTA V",
    category: "Sandbox",
    cpuWeight: 0.5,
    gpuWeight: 0.5,
  },
  {
    id: 6,
    name: "Valorant",
    category: "FPS",
    cpuWeight: 0.7,
    gpuWeight: 0.3,
  },
  {
    id: 7,
    name: "Call of Duty",
    category: "FPS",
    cpuWeight: 0.35,
    gpuWeight: 0.65,
  },
  {
    id: 8,
    name: "Forza Horizon 5",
    category: "Racing",
    cpuWeight: 0.4,
    gpuWeight: 0.6,
  }
];