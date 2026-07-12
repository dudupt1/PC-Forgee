export interface SSD {
  id: number;
  brand: string;
  name: string;
  capacity: number;
  interface: "SATA" | "NVMe PCIe 3.0" | "NVMe PCIe 4.0" | "NVMe PCIe 5.0";
  readSpeed: number;
  writeSpeed: number;
  formFactor: "2.5" | "M.2 2280";
  price: number;
}

export const ssds: SSD[] = [
  {
    id: 1,
    brand: "Kingston",
    name: "NV3",
    capacity: 1000,
    interface: "NVMe PCIe 4.0",
    readSpeed: 6000,
    writeSpeed: 4000,
    formFactor: "M.2 2280",
    price: 65,
  },

  {
    id: 2,
    brand: "WD",
    name: "Black SN850X",
    capacity: 1000,
    interface: "NVMe PCIe 4.0",
    readSpeed: 7300,
    writeSpeed: 6300,
    formFactor: "M.2 2280",
    price: 109,
  },

  {
    id: 3,
    brand: "Samsung",
    name: "990 PRO",
    capacity: 2000,
    interface: "NVMe PCIe 4.0",
    readSpeed: 7450,
    writeSpeed: 6900,
    formFactor: "M.2 2280",
    price: 179,
  },

  {
    id: 4,
    brand: "Crucial",
    name: "P3 Plus",
    capacity: 1000,
    interface: "NVMe PCIe 4.0",
    readSpeed: 5000,
    writeSpeed: 4200,
    formFactor: "M.2 2280",
    price: 62,
  },

  {
    id: 5,
    brand: "Corsair",
    name: "MP600 Elite",
    capacity: 2000,
    interface: "NVMe PCIe 4.0",
    readSpeed: 7000,
    writeSpeed: 6500,
    formFactor: "M.2 2280",
    price: 169,
  },

  {
    id: 6,
    brand: "Lexar",
    name: "NM790",
    capacity: 1000,
    interface: "NVMe PCIe 4.0",
    readSpeed: 7400,
    writeSpeed: 6500,
    formFactor: "M.2 2280",
    price: 79,
  }
];