import { cpus } from "../data/cpus";
import { gpus } from "../data/gpus";
import { motherboards } from "../data/motherboards";
import { ramModules } from "../data/ram";
import { ssds } from "../data/ssd";

export interface BuildRequest {
  budget: number;
}

export interface PCBuild {
  cpu: any;
  gpu: any;
  motherboard: any;
  ram: any;
  ssd: any;
  totalPrice: number;
}

export function generateBuild(request: BuildRequest): PCBuild {

  const cpu = [...cpus]
    .sort((a, b) => b.score - a.score)
    .find(cpu => cpu.price <= request.budget * 0.22);

  const gpu = [...gpus]
    .sort((a, b) => b.score - a.score)
    .find(gpu => gpu.price <= request.budget * 0.40);

  const motherboard = motherboards.find(
    board => board.socket === cpu?.socket
  );

  const ram = ramModules.find(
    ram => ram.type === motherboard?.ddr
  );

  const ssd = ssds.find(
    ssd => ssd.price <= request.budget * 0.08
  );

  const totalPrice =
    (cpu?.price ?? 0) +
    (gpu?.price ?? 0) +
    (motherboard?.price ?? 0) +
    (ram?.price ?? 0) +
    (ssd?.price ?? 0);

  return {
    cpu,
    gpu,
    motherboard,
    ram,
    ssd,
    totalPrice,
  };
}