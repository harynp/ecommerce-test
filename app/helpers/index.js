export function formatRupiah(number) {
  if (isNaN(number)) {
    return "Invalid number";
  }

  const options = {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat("id-ID", options);
  return formatter.format(number);
}
