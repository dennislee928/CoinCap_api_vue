export async function getMarkets() {
  const response = await fetch("https://api.coincap.io/v2/markets");
  if (!response.ok) {
    throw new Error("Failed to fetch markets");
  }
  const data = await response.json();
  return data.data;
}

export async function getCandles() {
  const response = await fetch(
    "https://api.coincap.io/v2/candles?exchange=binance&interval=d1&baseId=bitcoin&quoteId=usd"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch candles");
  }
  const data = await response.json();
  return data.data;
}
