export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  desc: {
    symbol: string;
    name: string;
    image: string;
  };
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface Global {
  active_cryptocurrencies: number;
  market_cap_percentage: {
    btc: number;
    eth: number;
    ada: number;
    usdt: number;
    bnb: number;
    xrp: number;
    sol: number;
    dot: number;
    doge: number;
  };
}

export interface ItemTrending {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    thumb: string;
    market_cap_rank: number;
    large: string;
  };
}

export interface FormParams {
  address: string;
  amountIn: number;
  perSlippage: number;
  gasPrice: number;
  gasLimit: number;
  swapBy: "BNB" | "BUSD";
  price: number;
  privateKey: string;
}

export interface Pair {
  token: string;
  pool_amount: string;
}

export interface Res {
  status: number;
  message: string;
  data: any;
}

export interface SwapParams {
  routerContract: any;
  pair: string[];
  amountIn: number;
  perSlippage: number;
  gasPrice: number;
  gasLimit: number;
  price: number;
  account: string;
}

export interface Token {
  name: string;
  symbol: string;
  address: string;
}

export interface Setting {
  gasPrice?: number;
  account?: string;
  slippage?: number;
}
