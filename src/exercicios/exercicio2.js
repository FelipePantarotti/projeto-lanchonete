const precosString = ["R$ 10.00", "R$ 25.50", "R$ 75.90"];

const precosNumeros = precosString.map(preco => {
  const apenasNumero = preco.replace("R$ ", "");
  return parseFloat(apenasNumero);
});

console.log(precosNumeros); 