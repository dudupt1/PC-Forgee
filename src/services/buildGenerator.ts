import { cpus } from "../data/cpus";
import { gpus } from "../data/gpus";
import { motherboards } from "../data/motherboards";
import { ramModules } from "../data/ram";
import { ssds } from "../data/ssd";
import { psus } from "../data/psu";
import { cases } from "../data/cases";
import { coolers } from "../data/coolers";

export interface BuildRequest {
  budget: number;
  wifi: boolean;
  rgb: boolean;
}

export function generateBuild(request: BuildRequest) {
  const cpuBudget = request.budget * 0.20;
  const gpuBudget = request.budget * 0.40;
  const motherboardBudget = request.budget * 0.12;
  const ramBudget = request.budget * 0.08;
  const ssdBudget = request.budget * 0.08;
  const psuBudget = request.budget * 0.07;
  const coolerBudget = request.budget * 0.05;
  const caseBudget = request.budget * 0.10;

  const cpu = cpus
    .filter(c => c.price <= cpuBudget)
    .sort((a, b) => b.score - a.score)[0];

  const gpu = gpus
    .filter(g => g.price <= gpuBudget)
    .sort((a, b) => b.score - a.score)[0];

  const motherboard = motherboards
    .filter(m =>
      m.socket === cpu.socket &&
      m.price <= motherboardBudget &&
      (!request.wifi || m.wifi)
    )
    .sort((a, b) => b.price - a.price)[0];

  const ram = ramModules
    .filter(r =>
      r.type === motherboard.ddr &&
      r.price <= ramBudget &&
      (!request.rgb || r.rgb)
    )
    .sort((a, b) => b.speed - a.speed)[0];

  const ssd = ssds
    .filter(s => s.price <= ssdBudget)
    .sort((a, b) => b.readSpeed - a.readSpeed)[0];

  const psu = psus
    .filter(p => p.price <= psuBudget)
    .sort((a, b) => b.wattage - a.wattage)[0];

  const cooler = coolers
    .filter(c =>
      c.price <= coolerBudget &&
      (!request.rgb || c.rgb)
    )
    .sort((a, b) => b.tdpSupport - a.tdpSupport)[0];

  const pcCase = cases
    .filter(c =>
      c.price <= caseBudget &&
      (!request.rgb || c.rgb) &&
      c.formFactor.includes(motherboard.formFactor)
    )
    .sort((a, b) => b.fansIncluded - a.fansIncluded)[0];

  const totalPrice =
    cpu.price +
    gpu.price +
    motherboard.price +
    ram.price +
    ssd.price +
    psu.price +
    cooler.price +
    pcCase.price;

  return {
    cpu,
    gpu,
    motherboard,
    ram,
    ssd,
    psu,
    cooler,
    case: pcCase,
    totalPrice,
  };
}