export function getRandomItems<T>(array: T[], count: number): T[] {
  // Garante que não vamos pedir mais itens do que o array possui
  const max = Math.min(count, array.length);

  // Cria uma cópia do array para não modificar o original
  const shuffled = [...array];

  // Algoritmo de Fisher-Yates para embaralhar
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Retorna apenas a quantidade desejada
  return shuffled.slice(0, max);
}
