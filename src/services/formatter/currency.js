export function moneyFormatter (value) {
    const val = value.toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL'
    }).toString();
  
    return val;
  }