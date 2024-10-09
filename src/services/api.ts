import axios from 'axios';
import { createClient, AuthResponse as SupabaseAuthResponse, OAuthResponse } from '@supabase/supabase-js';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';

// Define interfaces
export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  image?: string;
  current_price?: number;
  price_change_percentage_24h?: number;
  market_cap?: number;
  market_cap_rank?: number;
  thumb?: string;
  small?: string;
  large?: string;
  price_btc?: number;
  score?: number;
  fully_diluted_valuation: number | null;
  ath: number;
}

export interface ChartData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface MarketStats {
  active_cryptocurrencies: number;
  markets: number;
  total_market_cap: { [key: string]: number };
  total_volume: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
  market_cap_change_percentage_24h_usd: number;
}

// Add delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const apiCallWithDelay = async <T>(apiCall: () => Promise<T>): Promise<T> => {
  await delay(1000); // 1 second delay
  return apiCall();
};

// Fetch top cryptocurrencies
export const fetchTopCryptos = async (limit: number = 10): Promise<Crypto[]> => {
  return apiCallWithDelay(async () => {
    try {
      const response = await axios.get<Crypto[]>(`${COINGECKO_API_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: limit,
          page: 1,
          sparkline: false,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top cryptocurrencies:', error);
      throw error;
    }
  });
};

// Fetch market overview
export const fetchMarketOverview = async (): Promise<MarketStats> => {
  try {
    const response = await axios.get<{ data: MarketStats }>(`${COINGECKO_API_URL}/global`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching market overview:', error);
    throw error;
  }
};

// Fetch price chart data
export const fetchPriceChartData = async (coinId: string, days = 7): Promise<ChartData> => {
  try {
    const response = await axios.get<ChartData>(`${COINGECKO_API_URL}/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: days,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching price chart data:', error);
    throw error;
  }
};

// Fetch trending cryptocurrencies
export const fetchTrendingCryptos = async (): Promise<Crypto[]> => {
  try {
    const response = await axios.get<{ coins: { item: Crypto }[] }>(`${COINGECKO_API_URL}/search/trending`);
    return response.data.coins.map(coin => ({
      ...coin.item,
      image: coin.item.large || coin.item.small || coin.item.thumb,
    }));
  } catch (error) {
    console.error('Error fetching trending cryptocurrencies:', error);
    throw error;
  }
};


console.log('COINGECKO_API_URL:', COINGECKO_API_URL);