import { CPU } from "../data/cpus";
import { GPU } from "../data/gpus";
import { Motherboard } from "../data/motherboards";
import { RAM } from "../data/ram";
import { SSD } from "../data/ssd";
import { PSU } from "../data/psu";
import { Case } from "../data/cases";
import { Cooler } from "../data/coolers";

export interface CompatibilityResult {
  compatible: boolean;
  errors: string[];
}

export function checkCompatibility(
  cpu: CPU,
  gpu: GPU,
  motherboard: Motherboard,
  ram: RAM,
  ssd: SSD,
  psu: PSU,
  pcCase: Case,
  cooler: Cooler
): CompatibilityResult {
  const errors: string[] = [];

  // Socket
  if (cpu.socket !== motherboard.socket) {
    errors.push("CPU incompatível com a motherboard.");
  }

  // RAM
  if (ram.type !== motherboard.ddr) {
    errors.push("RAM incompatível com a motherboard.");
  }

  // Cooler
  if (cooler.tdpSupport < cpu.tdp) {
    errors.push("Cooler insuficiente para o CPU.");
  }

  // Fonte
  const estimatedPower = cpu.tdp + gpu.power + 150;

  if (psu.wattage < estimatedPower) {
    errors.push("Fonte insuficiente.");
  }

  return {
    compatible: errors.length === 0,
    errors,
  };
}