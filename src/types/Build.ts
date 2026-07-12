import { Component } from "./Component";

export interface Build {
  cpu: Component;
  gpu: Component;
  motherboard: Component;
  ram: Component;
  ssd: Component;
  psu: Component;
  cooler: Component;
  case: Component;

  totalPrice: number;

  score: number;

  compatible: boolean;
}