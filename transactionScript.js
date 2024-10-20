document.addEventListener('DOMContentLoaded', () => {
    const stockSymbolElement = document.getElementById('stock-symbol');
    const stockPriceElement = document.getElementById('stock-price');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const confirmButton = document.getElementById('confirm-transaction');
    const processingMessageElement = document.getElementById('processingMessage');

    // Parse the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const stockSymbol = urlParams.get('symbol');
    const stockPrice = parseFloat(urlParams.get('price'));
    const action = urlParams.get('action');

    // Display stock details
    stockSymbolElement.textContent = `Stock: ${stockSymbol}`;
    stockPriceElement.textContent = `Price: $${stockPrice.toFixed(2)}`;

    // Handle suggested quantity buttons
    document.querySelectorAll('.suggestion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const suggestedValue = button.getAttribute('data-value');
            quantityInput.value = suggestedValue;
            updateTotalPrice();
        });
    });

    // Update the total price when quantity changes
    quantityInput.addEventListener('input', updateTotalPrice);

    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value);
        if (quantity && quantity > 0) {
            const totalPrice = stockPrice * quantity;
            totalPriceElement.value = `$${totalPrice.toFixed(2)}`;
        } else {
            totalPriceElement.value = '$0.00';
        }
    }

    // Handle confirm button click
    confirmButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        if (quantity && quantity > 0) {
            const totalPrice = stockPrice * quantity;
            processingMessageElement.textContent = 'Processing... Please wait.';

            // Show "Processing..." message for 60 seconds
            setTimeout(() => {
                const incrementedValue = totalPrice * 1.2;
                processingMessageElement.textContent = 'Transaction Completed! Redirecting...';

                // Store data for the next page
                localStorage.setItem('incrementedValue', incrementedValue.toFixed(2));
                localStorage.setItem('stockSymbol', stockSymbol);
                localStorage.setItem('quantity', quantity);

                // Redirect to the next page after a short delay
                setTimeout(() => {
                    window.location.href = 'summary.html';
                }, 2000); // 2 seconds delay
            }, 60000); // 60 seconds processing time
        } else {
            alert('Please enter a valid quantity.');
        }
    });
});
