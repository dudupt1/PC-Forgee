import { cpus } from "../data/cpus";
import { gpus } from "../data/gpus";
import { motherboards } from "../data/motherboards";
import { ramModules } from "../data/ram";
import { ssds } from "../data/ssd";

interface BuildOptions {
  budget: number;
  wifi: boolean;
  rgb: boolean;
}

export function generateBuild(options: BuildOptions) {
  const cpuBudget = options.budget * 0.20;
  const gpuBudget = options.budget * 0.40;
  const motherboardBudget = options.budget * 0.12;
  const ramBudget = options.budget * 0.08;
  const ssdBudget = options.budget * 0.08;

  const cpu = cpus
    .filter(cpu => cpu.price <= cpuBudget)
    .sort((a, b) => b.score - a.score)[0];

  const gpu = gpus
    .filter(gpu => gpu.price <= gpuBudget)
    .sort((a, b) => b.score - a.score)[0];

  const motherboard = motherboards
    .filter(board =>
      board.socket === cpu.socket &&
      board.price <= motherboardBudget &&
      (!options.wifi || board.wifi)
    )
    .sort((a, b) => a.price - b.price)[0];

  const ram = ramModules
    .filter(memory =>
      memory.type === motherboard.ddr &&
      memory.price <= ramBudget &&
      (!options.rgb || memory.rgb)
    )
    .sort((a, b) => b.speed - a.speed)[0];

  const ssd = ssds
    .filter(storage => storage.price <= ssdBudget)
    .sort((a, b) => b.readSpeed - a.readSpeed)[0];

  const totalPrice =
    cpu.price +
    gpu.price +
    motherboard.price +
    ram.price +
    ssd.price;

  return {
    cpu,
    gpu,
    motherboard,
    ram,
    ssd,
    totalPrice,
  };
}