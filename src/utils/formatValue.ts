const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'Brl',
  }).format(value);

export default formatValue;
