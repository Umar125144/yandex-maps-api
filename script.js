document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('order-btn').addEventListener('click', showOrderMenu);
    document.getElementById('menu-btn').addEventListener('click', showMenu);
    document.getElementById('cart-btn').addEventListener('click', showCart);
    document.getElementById('contact-btn').addEventListener('click', showContacts);

    function showOrderMenu() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <h2>Сделать заказ</h2>
            <div class="menu-item" data-id="1">
                <img src="path/to/pizza-image.jpg" alt="Пицца">
                <p>Пицца</p>
                <button class="add-to-cart">Добавить в корзину</button>
            </div>
            <div class="menu-item" data-id="2">
                <img src="path/to/hotdog-image.jpg" alt="Хот дог">
                <p>Хот дог</p>
                <button class="add-to-cart">Добавить в корзину</button>
            </div>
            <!-- Добавьте другие категории по аналогии -->
        `;

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const menuItem = event.target.closest('.menu-item');
                const itemId = menuItem.dataset.id;
                addToCart(itemId);
            });
        });
    }

    function showMenu() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <h2>Меню</h2>
            <div class="menu-category">
                <h3>Пицца</h3>
                ${generateMenuItems(pizzaMenu)}
            </div>
            <div class="menu-category">
                <h3>Панини</h3>
                ${generateMenuItems(paniniMenu)}
            </div>
            <div class="menu-category">
                <h3>Десерты</h3>
                ${generateMenuItems(dessertMenu)}
            </div>
            <div class="menu-category">
                <h3>Напитки</h3>
                ${generateMenuItems(drinkMenu)}
            </div>
        `;
    }

    function showCart() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <h2>Корзина</h2>
            <p>Корзина пуста.</p>
        `;
    }

    function showContacts() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <h2>Контакты</h2>
            <div class="contact-info">
                <p>Адрес: ул. Примерная, д. 1</p>
                <p>Телефон: +7 (123) 456-78-90</p>
            </div>
        `;
    }

    function addToCart(itemId) {
        // Добавить товар в корзину (здесь логика для обработки корзины)
        console.log('Товар добавлен в корзину: ', itemId);
    }

    function generateMenuItems(menu) {
        return menu.map(item => `
            <div class="menu-item">
                <p>${item.name} - ${item.price} руб.</p>
            </div>
        `).join('');
    }

    const pizzaMenu = [
        { name: 'С шпинатом', price: 600 },
        { name: 'С креветками', price: 650 },
        { name: 'С горгонзолой', price: 480 },
        { name: 'С баклажанами', price: 650 },
        { name: 'Поло Песто', price: 480 },
        { name: 'Пицца фреш', price: 680 },
        { name: 'Пицца CiaoBella', price: 650 },
        { name: 'Пепперони с горгонзола', price: 680 },
        { name: 'Пепперони', price: 560 },
        { name: 'Ветчина со страчателлой', price: 700 },
        { name: 'Ветчина с грибами', price: 520 },
        { name: '4 сыра', price: 520 },
        { name: '4 Сезона', price: 550 },
        { name: 'Маргарита', price: 400 },
        { name: 'Гавайская', price: 520 },
        { name: 'CiaoBella Rossa', price: 650 }
    ];

    const paniniMenu = [
        { name: 'Панини с сыром страчателла', price: 300 },
        { name: 'Панини с ветчиной и рукколой', price: 250 },
        { name: 'Панини с баклажанами', price: 250 },
        { name: 'Пепперони', price: 350 }
    ];

    const dessertMenu = [
        { name: 'Торт фисташка', price: 300 },
        { name: 'Халопени', price: 70 }
    ];

    const drinkMenu = [
        { name: 'Чай 0,3', price: 60 },
        { name: 'Морс 0,25', price: 120 },
        { name: 'Rioba Сок 0,25', price: 120 },
        { name: 'Pepsi Cola', price: 120 },
        { name: 'Добрый 0,33 ж/б', price: 110 },
        { name: 'Молочный коктейль 0,4л', price: 250 }
    ];
});
