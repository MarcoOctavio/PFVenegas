let cart = [];
        const cartTotalElement = document.getElementById('cart-total');

        document.querySelectorAll('.shopping-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productElement = e.target.closest('.product-item');
                const productName = productElement.querySelector('h5').innerText;
                const productPrice = parseFloat(productElement.getAttribute('data-price'));

                cart.push({ name: productName, price: productPrice });
                updateCartTotal();
            });
        });

        function updateCartTotal() {
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotalElement.innerText = total.toFixed(2);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        window.addEventListener('load', () => {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartTotal();
            }
        });

        document.getElementById('btnCheckout').addEventListener('click', () => {
            alert(`Total a pagar: $${cartTotalElement.innerText}`);
        });