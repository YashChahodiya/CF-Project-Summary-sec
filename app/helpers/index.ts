export const formatCurrency = (value: any) => {
  // Convert string to number, divide by 100 to get the correct decimal place
  const number = parseFloat(value) / 100;

  // Format the number as currency
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};
