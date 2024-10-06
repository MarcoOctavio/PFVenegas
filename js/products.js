// Fetch de productos desde el JSON local
let productos = [];
let cart = [];  // Definimos el carrito aquí
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');

// Cargar productos desde el archivo JSON
fetch('../data/productos.json')
    .then(resp => resp.json())
    .then((data) => {
        productos = data;
        console.log(data);
        cargarProductos(productos); //a HTML
    })
    .catch(error => console.error("Error al cargar los productos", error));

const container = document.querySelector(".product-grid");

function cargarProductos(productos) {
    container.innerHTML = "";  // Limpiamos el contenedor de productos
    productos.forEach((producto) => {
        container.innerHTML += `
            <div class="product-item" data-name="${producto.name}" data-price="${producto.price}">
                <img src="${producto.image}" alt="${producto.name}">
                <h5>${producto.name}</h5>
                <p>$ ${producto.price}</p>
                <button class="shopping-btn btn btn-primary">Comprar</button>
            </div>`;
    });


    document.querySelectorAll('.shopping-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product-item');
            const productName = productElement.querySelector('h5').innerText;
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            // Añadimos el producto al carrito
            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });
}


function updateCart() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.innerText = total.toFixed(2);
    localStorage.setItem('cart', JSON.stringify(cart));

    cartItemsElement.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });
}

window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
});


document.getElementById('btnCheckout').addEventListener('click', () => {
    Swal.fire({
        title: "Confirmación de compra",
        text: `Total a pagar: $${cartTotalElement.innerText}`,
        icon: 'success',
        confirmButtonText: 'Pagar'
    });
});

document.getElementById('btnClearCart').addEventListener('click', () => {
    Swal.fire({
        title: "¿Está seguro de vaciar el carrito?",
        text: "Vaciando...",
        icon: 'warning',
        showCancelButton: true, 
        confirmButtonText: "Si, vaciar carrito",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed){
            cart = [];  
            updateCart(); 
            localStorage.removeItem('cart'); 
            Swal.fire(
                'Carrito Vaciado',
                'El carrito ha sido vaciado con éxito.',
                'success'
            );
        }
        
    });
});

