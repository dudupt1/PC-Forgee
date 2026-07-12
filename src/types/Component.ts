export interface Component {
  id: number;

  type:
    | "CPU"
    | "GPU"
    | "Motherboard"
    | "RAM"
    | "SSD"
    | "PSU"
    | "Cooler"
    | "Case";

  brand: string;
  model: string;

  price: number;

  score: number;

  image?: string;

  url?: string;

  inStock: boolean;

  country: string;

  store: string;
}