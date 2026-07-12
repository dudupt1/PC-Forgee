import { CPU } from "../data/cpus";
import { GPU } from "../data/gpus";

export interface FPSResult {
  game: string;
  fps1080p: number;
  fps1440p: number;
  fps4K: number;
}

const games = [
  "CS2",
  "Fortnite",
  "Valorant",
  "Minecraft",
  "GTA V",
  "Cyberpunk 2077",
  "Call of Duty",
  "Forza Horizon 5",
];

export function estimateFPS(cpu: CPU, gpu: GPU): FPSResult[] {
  const performance = (cpu.score * 0.4) + (gpu.score * 0.6);

  return games.map((game) => ({
    game,
    fps1080p: Math.round(performance * 3),
    fps1440p: Math.round(performance * 2.2),
    fps4K: Math.round(performance * 1.2),
  }));
}