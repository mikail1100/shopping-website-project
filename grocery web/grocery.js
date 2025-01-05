document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');

    searchBtn.addEventListener('click', function () {
        let searchQuery = searchInput.value.trim();
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
        } else {
            alert('Please enter a search term');
        }
    });

    // Cart functionality (basic)
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Item added to cart');
        });
    });
});
