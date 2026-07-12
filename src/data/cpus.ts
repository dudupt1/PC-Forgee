export interface CPU {
  id: number;
  brand: "AMD" | "Intel";
  name: string;
  socket: string;
  cores: number;
  threads: number;
  tdp: number;
  price: number;
  score: number;
}

export const cpus: CPU[] = [
  {
    id: 1,
    brand: "AMD",
    name: "Ryzen 5 5600",
    socket: "AM4",
    cores: 6,
    threads: 12,
    tdp: 65,
    price: 109,
    score: 84,
  },

  {
    id: 2,
    brand: "AMD",
    name: "Ryzen 7 5700X",
    socket: "AM4",
    cores: 8,
    threads: 16,
    tdp: 65,
    price: 169,
    score: 90,
  },

  {
    id: 3,
    brand: "AMD",
    name: "Ryzen 7 7700",
    socket: "AM5",
    cores: 8,
    threads: 16,
    tdp: 65,
    price: 279,
    score: 94,
  },

  {
    id: 4,
    brand: "AMD",
    name: "Ryzen 7 7800X3D",
    socket: "AM5",
    cores: 8,
    threads: 16,
    tdp: 120,
    price: 379,
    score: 100,
  },

  {
    id: 5,
    brand: "Intel",
    name: "Core i5-14400F",
    socket: "LGA1700",
    cores: 10,
    threads: 16,
    tdp: 65,
    price: 199,
    score: 91,
  },

  {
    id: 6,
    brand: "Intel",
    name: "Core i7-14700K",
    socket: "LGA1700",
    cores: 20,
    threads: 28,
    tdp: 125,
    price: 399,
    score: 99,
  },
];