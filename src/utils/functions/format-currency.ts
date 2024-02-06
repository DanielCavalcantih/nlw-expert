export function formatCurrency(value: number | undefined) {
  return value?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
