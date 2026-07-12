import { CPU } from "../data/cpus";
import { GPU } from "../data/gpus";

export interface BottleneckResult {
  percentage: number;
  status: "Excelente" | "Bom" | "Aceitável" | "Mau";
  description: string;
}

export function checkBottleneck(
  cpu: CPU,
  gpu: GPU
): BottleneckResult {
  const cpuPerformance = cpu.score;
  const gpuPerformance = gpu.score;

  const difference = Math.abs(cpuPerformance - gpuPerformance);
  const percentage = Math.round((difference / Math.max(cpuPerformance, gpuPerformance)) * 100);

  let status: BottleneckResult["status"];
  let description: string;

  if (percentage <= 5) {
    status = "Excelente";
    description = "CPU e GPU estão muito bem equilibrados.";
  } else if (percentage <= 10) {
    status = "Bom";
    description = "Combinação equilibrada para a maioria dos jogos.";
  } else if (percentage <= 20) {
    status = "Aceitável";
    description = "Existe um pequeno bottleneck.";
  } else {
    status = "Mau";
    description = "A combinação pode limitar significativamente o desempenho.";
  }

  return {
    percentage,
    status,
    description,
  };
}