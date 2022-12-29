const FormatCoin = (coin: string) => {
  let vTitle = parseFloat(coin);
  let coinFormated = vTitle.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return coinFormated;
};

export default FormatCoin;
