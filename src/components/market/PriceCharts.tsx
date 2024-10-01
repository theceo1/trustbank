// src/components/market/PriceCharts.tsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchPriceChartData } from '../../services/api';
 
// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceCharts: React.FC<{ coin: string }> = ({ coin }) => {
  const [chartData, setChartData] = useState<any>(null); // Initialize as null or appropriate type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPriceChartData(coin); // Your API call
        setChartData(data);
      } catch (error) {
        console.error('Failed to fetch price chart data:', error);
        setChartData(null); // Set to null or handle error state
      }
    };
    fetchData();
  }, [coin]);

  if (!chartData) {
    return <div>Loading...</div>; // Or handle loading/error state
  }

  const data = {
    labels: chartData.prices.map((price: number[]) => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${coin.toUpperCase()} Price`,
        data: chartData.prices.map((price: number[]) => price[1]),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="bg-teal-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{coin.toUpperCase()} Price Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default PriceCharts;
