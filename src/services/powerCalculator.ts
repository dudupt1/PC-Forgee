import { CPU } from "../data/cpus";
import { GPU } from "../data/gpus";

export interface PowerResult {
  estimatedPower: number;
  recommendedPSU: number;
}

export function calculatePower(cpu: CPU, gpu: GPU): PowerResult {
  // Consumo aproximado dos restantes componentes
  const extraPower = 80;

  const estimatedPower = cpu.tdp + gpu.power + extraPower;

  let recommendedPSU = 550;

  if (estimatedPower > 400) recommendedPSU = 650;
  if (estimatedPower > 550) recommendedPSU = 750;
  if (estimatedPower > 700) recommendedPSU = 850;
  if (estimatedPower > 850) recommendedPSU = 1000;

  return {
    estimatedPower,
    recommendedPSU,
  };
}