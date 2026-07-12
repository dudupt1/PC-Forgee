export function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao guardar:", error);
  }
}

export function load<T>(key: string): T | null {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  } catch (error) {
    console.error("Erro ao carregar:", error);
    return null;
  }
}

export function remove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover:", error);
  }
}

export function clear(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar:", error);
  }
}