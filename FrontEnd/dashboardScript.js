document.addEventListener('DOMContentLoaded', () => {
    const stockTableBody = document.querySelector('#stock-table tbody');

    const allStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', price: 150.54, change: 0.5 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800.66, change: -1.2 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3401.46, change: 2.1 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', price: 299.35, change: -0.3 },
        { symbol: 'FB', name: 'Meta Platforms Inc.', price: 355.23, change: 1.4 },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: 720.25, change: 0.8 },
        { symbol: 'NFLX', name: 'Netflix Inc.',
            price: 510.89, change: -0.6 },
           { symbol: 'NVDA', name: 'NVIDIA Corporation',
            price: 198.67, change: 1.2 },
           { symbol: 'PYPL', name: 'PayPal Holdings Inc.', 
           price: 245.12, change: -0.4 },
           { symbol: 'INTC', name: 'Intel Corporation',
            price: 54.22, change: 0.3 },
           { symbol: 'CSCO', name: 'Cisco Systems Inc.',
            price: 53.45, change: -0.2 },
           { symbol: 'PEP', name: 'PepsiCo Inc.',
            price: 148.87, change: 0.7 },
           { symbol: 'KO', name: 'The Coca-Cola Company',
            price: 54.95, change: 0.6 },
           { symbol: 'PFE', name: 'Pfizer Inc.',
            price: 41.21, change: -0.1 },
           { symbol: 'JNJ', name: 'Johnson & Johnson',
            price: 163.45, change: 0.2 },
           { symbol: 'V', name: 'Visa Inc.', 
           price: 222.34, change: -0.5 },
           { symbol: 'MA', name: 'Mastercard Incorporated',
            price: 349.56, change: 0.4 },
           { symbol: 'DIS', name: 'The Walt Disney Company',
            price: 179.32, change: -0.8 },
           { symbol: 'ADBE', name: 'Adobe Inc.', 
           price: 590.67, change: 1.1 },
           { symbol: 'CRM', name: 'Salesforce.com Inc.',
            price: 252.44, change: -0.7 },
           { symbol: 'ORCL', name: 'Oracle Corporation',
            price: 87.32, change: 0.3 },
           { symbol: 'IBM', name: 'International Business Machines Corporation',
            price: 142.31, change: 0.2 },
           { symbol: 'UBER', name: 'Uber Technologies Inc.',
            price: 51.23, change: 1.0 },
           { symbol: 'LYFT', name: 'Lyft Inc.',
            price: 47.56, change: -1.1 },
           { symbol: 'TWTR', name: 'Twitter Inc.',
            price: 64.98, change: 0.9 },
           { symbol: 'SNAP', name: 'Snap Inc.', 
           price: 70.55, change: -0.5 },
           { symbol: 'SQ', name: 'Block Inc.', 
           price: 245.67, change: 1.3 },
           { symbol: 'SPOT', name: 'Spotify Technology S.A.', 
           price: 265.78, change: -0.4 },
           { symbol: 'ZM', name: 'Zoom Video Communications Inc.',
            price: 355.67, change: -1.0 },
           { symbol: 'DOCU', name: 'DocuSign Inc.',
            price: 285.34, change: 0.6 },
           { symbol: 'BABA', name: 'Alibaba Group Holding Limited',
            price: 230.45, change: -0.8 },
           { symbol: 'JD', name: 'JD.com Inc.',
            price: 81.23, change: 0.7 },
           { symbol: 'SHOP', name: 'Shopify Inc.',
            price: 1220.78, change: 1.4 },
           { symbol: 'WMT', name: 'Walmart Inc.',
            price: 139.54, change: -0.2 },
           { symbol: 'TGT', name: 'Target Corporation',
            price: 230.56, change: 0.5 },
           { symbol: 'MCD', name: 'McDonald\'s Corporation',
            price: 232.67, change: -0.3 },
           { symbol: 'SBUX', name: 'Starbucks Corporation', 
           price: 114.23, change: 0.2 },
           { symbol: 'NKE', name: 'NIKE Inc.',
            price: 147.56, change: 0.8 },
           { symbol: 'LULU', name: 'Lululemon Athletica Inc.', 
           price: 372.45, change: -0.5 },
           { symbol: 'BA', name: 'The Boeing Company', 
           price: 241.78, change: 1.0 },
           { symbol: 'GE', name: 'General Electric Company', 
           price: 106.23, change: -0.1 },
           { symbol: 'F', name: 'Ford Motor Company',
            price: 14.56, change: 0.4 },
           { symbol: 'GM', name: 'General Motors Company', 
           price: 56.78, change: -0.7 },
           { symbol: 'TM', name: 'Toyota Motor Corporation',
            price: 151.23, change: 0.3 },
           { symbol: 'HMC', name: 'Honda Motor Co. Ltd.',
            price: 31.45, change: -0.2 },
           { symbol: 'UBS', name: 'UBS Group AG',
            price: 16.23, change: 0.6 },
           { symbol: 'DB', name: 'Deutsche Bank AG'
           , price: 12.45, change: -0.1 },
           { symbol: 'HSBC', name: 'HSBC Holdings plc',
            price: 30.67, change: 0.5 }
    ];

    function displayStocks(stocks) {
        stockTableBody.innerHTML = '';
        stocks.forEach(stock => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stock.name}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td>${stock.change.toFixed(2)}%</td>
                <td>
                    <button class="buy-btn" data-symbol="${stock.symbol}" data-price="${stock.price}">Buy</button>
                    <button class="sell-btn" data-symbol="${stock.symbol}" data-price="${stock.price}">Sell</button>
                </td>
            `;
            stockTableBody.appendChild(row);
        });

        document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', handleBuySell);
        });
        document.querySelectorAll('.sell-btn').forEach(button => {
            button.addEventListener('click', handleBuySell);
        });
    }

    function handleBuySell(event) {
        const button = event.target;
        const stockSymbol = button.getAttribute('data-symbol');
        const stockPrice = button.getAttribute('data-price');
        const action = button.classList.contains('buy-btn') ? 'buy' : 'sell';

        // Redirect to the new page with stock details as query parameters
        window.location.href = `transaction.html?symbol=${stockSymbol}&price=${stockPrice}&action=${action}`;
    }

    displayStocks(allStocks);
});
