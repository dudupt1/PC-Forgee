import { Build } from "../types/Build";

export interface ComparisonResult {
  winner: "Build A" | "Build B" | "Empate";
  scoreA: number;
  scoreB: number;
  advantages: string[];
}

export function compareBuilds(
  buildA: Build,
  buildB: Build
): ComparisonResult {
  let scoreA = 0;
  let scoreB = 0;
  const advantages: string[] = [];

  if (buildA.cpu.score > buildB.cpu.score) {
    scoreA += 10;
    advantages.push("Build A tem um CPU mais potente.");
  } else if (buildB.cpu.score > buildA.cpu.score) {
    scoreB += 10;
    advantages.push("Build B tem um CPU mais potente.");
  }

  if (buildA.gpu.score > buildB.gpu.score) {
    scoreA += 20;
    advantages.push("Build A tem uma GPU mais potente.");
  } else if (buildB.gpu.score > buildA.gpu.score) {
    scoreB += 20;
    advantages.push("Build B tem uma GPU mais potente.");
  }

  if (buildA.ram.score > buildB.ram.score) {
    scoreA += 5;
  } else if (buildB.ram.score > buildA.ram.score) {
    scoreB += 5;
  }

  if (buildA.totalPrice < buildB.totalPrice) {
    scoreA += 5;
    advantages.push("Build A é mais barata.");
  } else if (buildB.totalPrice < buildA.totalPrice) {
    scoreB += 5;
    advantages.push("Build B é mais barata.");
  }

  const winner =
    scoreA > scoreB
      ? "Build A"
      : scoreB > scoreA
      ? "Build B"
      : "Empate";

  return {
    winner,
    scoreA,
    scoreB,
    advantages,
  };
}