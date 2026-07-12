export interface RAM {
  id: number;
  brand: string;
  name: string;
  capacity: number;
  modules: string;
  speed: number;
  type: "DDR4" | "DDR5";
  rgb: boolean;
  price: number;
}

export const ramModules: RAM[] = [
  {
    id: 1,
    brand: "Corsair",
    name: "Vengeance LPX",
    capacity: 16,
    modules: "2x8GB",
    speed: 3200,
    type: "DDR4",
    rgb: false,
    price: 49,
  },

  {
    id: 2,
    brand: "Corsair",
    name: "Vengeance RGB",
    capacity: 32,
    modules: "2x16GB",
    speed: 6000,
    type: "DDR5",
    rgb: true,
    price: 119,
  },

  {
    id: 3,
    brand: "Kingston",
    name: "FURY Beast",
    capacity: 32,
    modules: "2x16GB",
    speed: 6000,
    type: "DDR5",
    rgb: false,
    price: 109,
  },

  {
    id: 4,
    brand: "G.Skill",
    name: "Trident Z5 RGB",
    capacity: 32,
    modules: "2x16GB",
    speed: 6400,
    type: "DDR5",
    rgb: true,
    price: 149,
  },

  {
    id: 5,
    brand: "Crucial",
    name: "Pro",
    capacity: 16,
    modules: "2x8GB",
    speed: 5600,
    type: "DDR5",
    rgb: false,
    price: 69,
  },

  {
    id: 6,
    brand: "TeamGroup",
    name: "T-Force Delta RGB",
    capacity: 32,
    modules: "2x16GB",
    speed: 6000,
    type: "DDR5",
    rgb: true,
    price: 125,
  }
];