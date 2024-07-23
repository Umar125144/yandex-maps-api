document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout');
    const notification = document.getElementById('notification');
    const toppings = [
        { name: 'Шампиньоны', price: 70 },
        { name: 'Чесночный соус', price: 70 },
        { name: 'Черри', price: 70 },
        { name: 'Курица', price: 70 },
        { name: 'Сыр пармезан', price: 70 },
        { name: 'Сыр моцарелла', price: 70 },
        { name: 'Соус сырный', price: 70 },
        { name: 'Соус BBQ', price: 70 },
        { name: 'Сосиски', price: 80 },
        { name: 'Ветчина', price: 70 }
    ];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = button.dataset.item;
            const price = button.dataset.price;
            const quantity = 1;

            addItemToCart(item, price, quantity);
            showNotification('Успешно добавлено в корзину');

            if (item.toLowerCase().includes('пицца')) {
                showToppingsButton(button, item, price, quantity);
            }
        });
    });

    function addItemToCart(item, price, quantity) {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item} - ${quantity} шт - ${price} руб</p>
            <div class="quantity-controls">
                <button class="decrease-quantity">-</button>
                <input type="number" value="${quantity}" min="1">
                <button class="increase-quantity">+</button>
            </div>
        `;
        cart.appendChild(itemElement);

        const decreaseButton = itemElement.querySelector('.decrease-quantity');
        const increaseButton = itemElement.querySelector('.increase-quantity');
        const quantityInput = itemElement.querySelector('input');

        decreaseButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = --currentQuantity;
            }
        });

        increaseButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = ++currentQuantity;
        });

        quantityInput.addEventListener('change', function() {
            if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }
        });
    }

    function showToppingsButton(button, item, price, quantity) {
        const toppingButton = document.createElement('button');
        toppingButton.classList.add('add-topping');
        toppingButton.textContent = 'Добавить топпинг';
        button.parentElement.appendChild(toppingButton);

        toppingButton.addEventListener('click', function() {
            showToppingsModal(item, price, quantity);
        });
    }

    function showToppingsModal(item, price, quantity) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = `<h3>Добавки для ${item}</h3>`;

        toppings.forEach(topping => {
            const toppingElement = document.createElement('div');
            toppingElement.innerHTML = `
                <label>
                    <input type="checkbox" data-item="${topping.name}" data-price="${topping.price}">
                    ${topping.name} - ${topping.price} руб
                </label>
            `;
            modalContent.appendChild(toppingElement);
        });

        const addButton = document.createElement('button');
        addButton.classList.add('add-to-cart');
        addButton.textContent = 'Добавить';
        modalContent.appendChild(addButton);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        addButton.addEventListener('click', function() {
            const selectedToppings = modalContent.querySelectorAll('input[type="checkbox"]:checked');
            selectedToppings.forEach(topping => {
                addItemToCart(topping.dataset.item, topping.dataset.price, quantity);
            });
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    }

    checkoutButton.addEventListener('click', function() {
        alert('Оформление заказа...');
    });
});
