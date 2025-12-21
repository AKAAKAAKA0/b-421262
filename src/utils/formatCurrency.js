export const formatCurrency = (amount, minimumFractionDigits = 2) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits }).format(amount);
};
