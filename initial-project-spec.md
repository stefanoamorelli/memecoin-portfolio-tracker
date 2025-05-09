📝 One-Page Memecoin Portfolio Tracker – Product Requirements
🎯 Goal
A single-page web app that mocks a memecoin portfolio. All data is fake. Built with React and Tailwind CSS. Focus on fun UI/UX, minimal complexity.

📐 Layout Overview
+---------------------------------------------+
|           🚀 My Memecoin Portfolio          |
+---------------------------------------------+
| Total Value: $69,420.00       ▲ +4.20%      |
| “You’re going to the moon! 🌕”              |
+---------------------------------------------+

| Coin   | Holdings | Price   | 24h % | Value   |
|--------|----------|---------|-------|---------|
| 🐶 DOGE | 10,000   | $0.08   | +2.1% | $800.00 |
| 🐸 PEPE | 42,069K  | $0.0001 | -1.2% | $4,206.90|
| 🍌 BAN  | 900      | $0.69   | +69%  | $621.00 |
+---------------------------------------------+

[ Refresh 🔄 ]         [ Dark Mode 🌙 ]
✅ Requirements
1. Single React Page
No routing.

One main component (App.jsx or similar).

State stored via useState.

2. Mock Data
Hardcoded in the component:

[
  { symbol: 'DOGE', name: 'DogeCoin', icon: '🐶', holdings: 10000, price: 0.08, change: 2.1 },
  { symbol: 'PEPE', name: 'PepeCoin', icon: '🐸', holdings: 42069000, price: 0.0001, change: -1.2 },
  { symbol: 'BAN',  name: 'Banana Token', icon: '🍌', holdings: 900, price: 0.69, change: 69 }
]
3. Core UI Sections
Header: Title, total value (sum of all holdings × price), 24h gain/loss %.

Quote: Meme quote like “To the moon!”

Table:

Icon + name

Holdings

Price

24h change (% with color: green/red)

Value per coin

Buttons:

🔄 Fake refresh (randomizes 24h %)

🌙 Light/Dark mode toggle

4. Styling
Tailwind for layout, spacing, color, responsiveness

Responsive down to mobile

Fun meme fonts/colors (e.g., bold, Comic Sans–like optional vibe)

