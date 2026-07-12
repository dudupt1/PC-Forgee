import { CPU } from "../data/cpus";
import { GPU } from "../data/gpus";
import { RAM } from "../data/ram";
import { SSD } from "../data/ssd";

export interface UpgradeSuggestion {
  component: string;
  reason: string;
  priority: "Alta" | "Média" | "Baixa";
}

export function getUpgradeSuggestions(
  cpu: CPU,
  gpu: GPU,
  ram: RAM,
  ssd: SSD
): UpgradeSuggestion[] {
  const suggestions: UpgradeSuggestion[] = [];

  if (cpu.score < 90) {
    suggestions.push({
      component: "CPU",
      reason: "Um processador mais potente pode melhorar o desempenho geral.",
      priority: "Alta",
    });
  }

  if (gpu.score < 90) {
    suggestions.push({
      component: "GPU",
      reason: "Uma placa gráfica mais potente aumentará os FPS nos jogos.",
      priority: "Alta",
    });
  }

  if (ram.capacity < 32) {
    suggestions.push({
      component: "RAM",
      reason: "32 GB de RAM são recomendados para jogos e multitarefa.",
      priority: "Média",
    });
  }

  if (ssd.capacity < 1000) {
    suggestions.push({
      component: "SSD",
      reason: "Um SSD de 1 TB ou superior oferece mais espaço para jogos e aplicações.",
      priority: "Baixa",
    });
  }

  return suggestions;
}