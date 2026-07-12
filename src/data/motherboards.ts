export interface Motherboard {
  id: number;
  brand: string;
  name: string;
  socket: string;
  chipset: string;
  formFactor: "ATX" | "Micro-ATX" | "Mini-ITX";
  wifi: boolean;
  bluetooth: boolean;
  ddr: "DDR4" | "DDR5";
  maxRam: number;
  m2Slots: number;
  price: number;
}

export const motherboards: Motherboard[] = [
  {
    id: 1,
    brand: "MSI",
    name: "B550M PRO-VDH WIFI",
    socket: "AM4",
    chipset: "B550",
    formFactor: "Micro-ATX",
    wifi: true,
    bluetooth: true,
    ddr: "DDR4",
    maxRam: 128,
    m2Slots: 2,
    price: 119,
  },

  {
    id: 2,
    brand: "Gigabyte",
    name: "B650 Gaming X AX",
    socket: "AM5",
    chipset: "B650",
    formFactor: "ATX",
    wifi: true,
    bluetooth: true,
    ddr: "DDR5",
    maxRam: 192,
    m2Slots: 3,
    price: 199,
  },

  {
    id: 3,
    brand: "ASUS",
    name: "TUF Gaming B650-PLUS WIFI",
    socket: "AM5",
    chipset: "B650",
    formFactor: "ATX",
    wifi: true,
    bluetooth: true,
    ddr: "DDR5",
    maxRam: 192,
    m2Slots: 3,
    price: 229,
  },

  {
    id: 4,
    brand: "MSI",
    name: "PRO Z790-P WIFI",
    socket: "LGA1700",
    chipset: "Z790",
    formFactor: "ATX",
    wifi: true,
    bluetooth: true,
    ddr: "DDR5",
    maxRam: 192,
    m2Slots: 4,
    price: 259,
  },

  {
    id: 5,
    brand: "Gigabyte",
    name: "B760M DS3H AX",
    socket: "LGA1700",
    chipset: "B760",
    formFactor: "Micro-ATX",
    wifi: true,
    bluetooth: true,
    ddr: "DDR5",
    maxRam: 192,
    m2Slots: 2,
    price: 169,
  }
];