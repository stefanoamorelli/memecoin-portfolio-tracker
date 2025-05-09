import React, { useState } from 'react';
import './App.css'; // optional for custom fonts

const initialCoins = [
  { symbol: 'DOGE', name: 'DogeCoin', icon: '🐶', holdings: 10000, price: 0.08, change: 2.1 },
  { symbol: 'PEPE', name: 'PepeCoin', icon: '🐸', holdings: 42069000, price: 0.0001, change: -1.2 },
  { symbol: 'BAN', name: 'Banana Token', icon: '🍌', holdings: 900, price: 0.69, change: 69 }
];

export default function App() {
  const [coins, setCoins] = useState(initialCoins);
  const [darkMode, setDarkMode] = useState(false);

  const totalValue = coins.reduce((sum, coin) => sum + coin.holdings * coin.price, 0);
  const totalChange = coins.reduce((sum, coin) => sum + ((coin.price * coin.change) / 100) * coin.holdings, 0);
  const totalChangePercent = ((totalChange / totalValue) * 100).toFixed(2);

  const refreshData = () => {
    const newCoins = coins.map(coin => ({
      ...coin,
      change: (Math.random() * 20 - 10).toFixed(1) // random between -10% and +10%
    }));
    setCoins(newCoins);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4`}>
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">🚀 My Memecoin Portfolio</h1>
          <div className="text-xl">
            Total Value: ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            <span className={`ml-2 ${totalChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>▲ {totalChangePercent}%</span>
          </div>
          <p className="italic mt-2">“You’re going to the moon! 🌕”</p>
        </header>

        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700 text-left">
              <th className="p-2">Coin</th>
              <th className="p-2">Holdings</th>
              <th className="p-2">Price</th>
              <th className="p-2">24h %</th>
              <th className="p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(coin => (
              <tr key={coin.symbol} className="border-b border-gray-200 dark:border-gray-800">
                <td className="p-2">{coin.icon} {coin.symbol}</td>
                <td className="p-2">{coin.holdings.toLocaleString()}</td>
                <td className="p-2">${coin.price.toFixed(4)}</td>
                <td className={`p-2 ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>{coin.change}%</td>
                <td className="p-2">${(coin.holdings * coin.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center gap-4">
          <button
            onClick={refreshData}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            🔄 Refresh
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
} 
