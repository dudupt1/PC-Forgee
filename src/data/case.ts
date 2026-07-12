export interface Case {
  id: number;
  brand: string;
  name: string;
  formFactor: ("ATX" | "Micro-ATX" | "Mini-ITX")[];
  color: "Black" | "White";
  rgb: boolean;
  maxGpuLength: number;
  maxCoolerHeight: number;
  fansIncluded: number;
  price: number;
}

export const cases: Case[] = [
  {
    id: 1,
    brand: "NZXT",
    name: "H5 Flow",
    formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
    color: "Black",
    rgb: false,
    maxGpuLength: 365,
    maxCoolerHeight: 165,
    fansIncluded: 2,
    price: 89,
  },

  {
    id: 2,
    brand: "Corsair",
    name: "4000D Airflow",
    formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
    color: "Black",
    rgb: false,
    maxGpuLength: 360,
    maxCoolerHeight: 170,
    fansIncluded: 2,
    price: 99,
  },

  {
    id: 3,
    brand: "Lian Li",
    name: "Lancool 216 RGB",
    formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
    color: "Black",
    rgb: true,
    maxGpuLength: 392,
    maxCoolerHeight: 180,
    fansIncluded: 3,
    price: 119,
  },

  {
    id: 4,
    brand: "Montech",
    name: "AIR 903 MAX",
    formFactor: ["ATX", "Micro-ATX"],
    color: "White",
    rgb: true,
    maxGpuLength: 400,
    maxCoolerHeight: 180,
    fansIncluded: 4,
    price: 85,
  },

  {
    id: 5,
    brand: "Fractal Design",
    name: "North",
    formFactor: ["ATX", "Micro-ATX"],
    color: "Black",
    rgb: false,
    maxGpuLength: 355,
    maxCoolerHeight: 170,
    fansIncluded: 2,
    price: 149,
  }
];