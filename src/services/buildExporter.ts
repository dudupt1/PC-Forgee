import { Build } from "../types/Build";

export function exportBuild(build: Build): string {
  return JSON.stringify(build, null, 2);
}

export function downloadBuild(build: Build) {
  const data = exportBuild(build);

  const blob = new Blob([data], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `pc-forge-build-${Date.now()}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

export function importBuild(file: File): Promise<Build> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const build = JSON.parse(
          reader.result as string
        ) as Build;

        resolve(build);
      } catch {
        reject(new Error("Build inválida."));
      }
    };

    reader.onerror = () => {
      reject(new Error("Erro ao ler o ficheiro."));
    };

    reader.readAsText(file);
  });
}