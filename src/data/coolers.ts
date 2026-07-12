export interface Cooler {
  id: number;
  brand: string;
  name: string;
  type: "Air" | "AIO 240" | "AIO 360";
  tdpSupport: number;
  rgb: boolean;
  price: number;
}

export const coolers: Cooler[] = [
  {
    id: 1,
    brand: "DeepCool",
    name: "AK400",
    type: "Air",
    tdpSupport: 220,
    rgb: false,
    price: 35,
  },

  {
    id: 2,
    brand: "Thermalright",
    name: "Peerless Assassin 120 SE",
    type: "Air",
    tdpSupport: 265,
    rgb: false,
    price: 42,
  },

  {
    id: 3,
    brand: "Cooler Master",
    name: "Hyper 212 Halo",
    type: "Air",
    tdpSupport: 200,
    rgb: true,
    price: 49,
  },

  {
    id: 4,
    brand: "Arctic",
    name: "Liquid Freezer III 240",
    type: "AIO 240",
    tdpSupport: 300,
    rgb: false,
    price: 89,
  },

  {
    id: 5,
    brand: "Corsair",
    name: "iCUE H150i RGB Elite",
    type: "AIO 360",
    tdpSupport: 350,
    rgb: true,
    price: 179,
  },

  {
    id: 6,
    brand: "NZXT",
    name: "Kraken 360 RGB",
    type: "AIO 360",
    tdpSupport: 350,
    rgb: true,
    price: 199,
  }
];