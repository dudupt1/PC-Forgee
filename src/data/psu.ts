export interface PSU {
  id: number;
  brand: string;
  name: string;
  wattage: number;
  efficiency: "80+ Bronze" | "80+ Gold" | "80+ Platinum";
  modular: boolean;
  price: number;
}

export const psus: PSU[] = [
  {
    id: 1,
    brand: "Corsair",
    name: "CX650",
    wattage: 650,
    efficiency: "80+ Bronze",
    modular: false,
    price: 69,
  },

  {
    id: 2,
    brand: "MSI",
    name: "MAG A750GL",
    wattage: 750,
    efficiency: "80+ Gold",
    modular: true,
    price: 99,
  },

  {
    id: 3,
    brand: "be quiet!",
    name: "Pure Power 12 M",
    wattage: 750,
    efficiency: "80+ Gold",
    modular: true,
    price: 109,
  },

  {
    id: 4,
    brand: "Corsair",
    name: "RM850e",
    wattage: 850,
    efficiency: "80+ Gold",
    modular: true,
    price: 129,
  },

  {
    id: 5,
    brand: "Seasonic",
    name: "Focus GX-850",
    wattage: 850,
    efficiency: "80+ Gold",
    modular: true,
    price: 139,
  }
];