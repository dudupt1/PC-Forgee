export interface GPU {
  id: number;
  brand: "NVIDIA" | "AMD" | "Intel";
  name: string;
  vram: number;
  power: number;
  price: number;
  score: number;
  rayTracing: boolean;
  dlss: boolean;
  fsr: boolean;
}

export const gpus: GPU[] = [
  {
    id: 1,
    brand: "NVIDIA",
    name: "RTX 4060",
    vram: 8,
    power: 115,
    price: 299,
    score: 82,
    rayTracing: true,
    dlss: true,
    fsr: false,
  },

  {
    id: 2,
    brand: "NVIDIA",
    name: "RTX 5060",
    vram: 8,
    power: 145,
    price: 329,
    score: 88,
    rayTracing: true,
    dlss: true,
    fsr: false,
  },

  {
    id: 3,
    brand: "NVIDIA",
    name: "RTX 5060 Ti",
    vram: 16,
    power: 180,
    price: 449,
    score: 94,
    rayTracing: true,
    dlss: true,
    fsr: false,
  },

  {
    id: 4,
    brand: "NVIDIA",
    name: "RTX 5070",
    vram: 12,
    power: 250,
    price: 629,
    score: 98,
    rayTracing: true,
    dlss: true,
    fsr: false,
  },

  {
    id: 5,
    brand: "AMD",
    name: "RX 7700 XT",
    vram: 12,
    power: 245,
    price: 389,
    score: 90,
    rayTracing: true,
    dlss: false,
    fsr: true,
  },

  {
    id: 6,
    brand: "AMD",
    name: "RX 7800 XT",
    vram: 16,
    power: 263,
    price: 499,
    score: 95,
    rayTracing: true,
    dlss: false,
    fsr: true,
  },

  {
    id: 7,
    brand: "Intel",
    name: "Arc B580",
    vram: 12,
    power: 190,
    price: 289,
    score: 84,
    rayTracing: true,
    dlss: false,
    fsr: false,
  },
];