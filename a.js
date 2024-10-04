document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Registered: ${username}`);
});

document.getElementById('waste-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const wasteType = document.getElementById('waste-type').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    alert(`Listed Waste: ${wasteType}, Quantity: ${quantity} kg, Price: $${price}/kg`);
});

document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    // Simulated waste data for demonstration
    const wasteData = [
        { type: 'Rice Straw', quantity: 100, price: 1.5 },
        { type: 'Wheat Stubble', quantity: 200, price: 1.0 },
        { type: 'Corn Husk', quantity: 150, price: 1.2 },
    ];

    wasteData.forEach(item => {
        if (item.type.toLowerCase().includes(searchInput)) {
            const li = document.createElement('li');
            li.textContent = `${item.type}: ${item.quantity} kg at $${item.price}/kg`;
            searchResults.appendChild(li);
        }
    });

    if (searchResults.children.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        searchResults.appendChild(li);
    }
});