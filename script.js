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
                <div class="menu-item">
                    <p>С шпинатом - 600 руб.</p>
                </div>
                <div class="menu-item">
                    <p>С креветками - 650 руб.</p>
                </div>
                <!-- Добавьте другие пиццы по аналогии -->
            </div>
            <div class="menu-category">
                <h3>Хот доги</h3>
                <div class="menu-item">
                    <p>Хот дог - 200 руб.</p>
                </div>
                <!-- Добавьте другие хот доги по аналогии -->
            </div>
            <!-- Добавьте другие категории по аналогии -->
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
});
