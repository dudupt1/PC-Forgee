import { createContext, useContext, useState, ReactNode } from "react";

interface BuildData {
  country: string;
  store: string;
  budget: number;
  purpose: string;
  wifi: boolean;
  bluetooth: boolean;
  rgb: boolean;
}

interface BuildContextType {
  build: BuildData;
  setBuild: React.Dispatch<React.SetStateAction<BuildData>>;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export function BuildProvider({ children }: { children: ReactNode }) {
  const [build, setBuild] = useState<BuildData>({
    country: "",
    store: "",
    budget: 1000,
    purpose: "",
    wifi: false,
    bluetooth: false,
    rgb: false,
  });

  return (
    <BuildContext.Provider value={{ build, setBuild }}>
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild() {
  const context = useContext(BuildContext);

  if (!context) {
    throw new Error("useBuild deve ser usado dentro de BuildProvider");
  }

  return context;
}