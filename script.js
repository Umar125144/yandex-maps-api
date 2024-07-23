document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout');

    // Пример добавления товара в корзину
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = button.dataset.item;
            const price = button.dataset.price;
            const quantity = 1; // Здесь можно добавить выбор количества
            addItemToCart(item, price, quantity);
        });
    });

    function addItemToCart(item, price, quantity) {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item} - ${quantity} шт - ${price} руб`;
        cart.appendChild(itemElement);
    }

    checkoutButton.addEventListener('click', function() {
        alert('Ваш заказ оформлен!');
        cart.innerHTML = ''; // Очистить корзину после оформления заказа
    });
});
