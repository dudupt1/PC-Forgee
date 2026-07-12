import { cpus } from "../data/cpus";
import { gpus } from "../data/gpus";

export interface OptimizerOptions {
  budget: number;
}

export function calculateCpuScore(cpu: any) {
  return cpu.score / cpu.price;
}

export function calculateGpuScore(gpu: any) {
  return gpu.score / gpu.price;
}

export function optimizeBuild(options: OptimizerOptions) {
  let bestBuild: any = null;
  let bestScore = 0;

  for (const cpu of cpus) {
    for (const gpu of gpus) {
      const total = cpu.price + gpu.price;

      if (total > options.budget) continue;

      const score =
        calculateCpuScore(cpu) * 0.35 +
        calculateGpuScore(gpu) * 0.65;

      if (score > bestScore) {
        bestScore = score;

        bestBuild = {
          cpu,
          gpu,
          score,
          total,
        };
      }
    }
  }

  return bestBuild;
}