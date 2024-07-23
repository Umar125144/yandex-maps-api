document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout');
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

    // Пример добавления товара в корзину
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = button.dataset.item;
            const price = button.dataset.price;
            const quantity = 1; // Здесь можно добавить выбор количества
            if (item.toLowerCase().includes('пицца')) {
                showToppingsModal(item, price, quantity);
            } else {
                addItemToCart(item, price, quantity);
            }
        });
    });

    function addItemToCart(item, price, quantity) {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item} - ${quantity} шт - ${price} руб`;
        cart.appendChild(itemElement);
    }

    function showToppingsModal(item, price, quantity) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = `<h3>Добавки для ${item}</h3>`;
        
        toppings.forEach(topping => {
            const toppingElement = document.createElement('div');
            toppingElement.innerHTML = `<input type="checkbox" id="${topping.name}" name="${topping.name}" value="${topping.price}">
                                        <label for="${topping.name}">${topping.name} - ${topping.price} руб</label>`;
            modalContent.appendChild(toppingElement);
        });

        const addButton = document.createElement('button');
        addButton.textContent = 'Добавить в корзину';
        addButton.addEventListener('click', function() {
            let totalPrice = parseFloat(price);
            const selectedToppings = [];
            modalContent.querySelectorAll('input:checked').forEach(topping => {
                selectedToppings.push(topping.name);
                totalPrice += parseFloat(topping.value);
            });

            addItemToCart(`${item} с добавками: ${selectedToppings.join(', ')}`, totalPrice, quantity);
            document.body.removeChild(modal);
        });
        modalContent.appendChild(addButton);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    checkoutButton.addEventListener('click', function() {
        alert('Ваш заказ оформлен!');
        cart.innerHTML = ''; // Очистить корзину после оформления заказа
    });
});
