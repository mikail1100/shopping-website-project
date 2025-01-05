document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const cartCount = document.getElementById("cart-count");

    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    };

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const product = {
                id: productElement.dataset.id,
                name: productElement.dataset.name,
                price: parseFloat(productElement.dataset.price),
            };

            cart.push(product);
            alert(`${product.name} added to the cart!`);
            updateCartCount();
        });
    });

    document.getElementById("cart-button").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
        } else {
            let cartDetails = "Items in your cart:\n";
            cart.forEach(item => {
                cartDetails += `${item.name} - $${item.price.toFixed(2)}\n`;
            });
            alert(cartDetails);
        }
    });
});
