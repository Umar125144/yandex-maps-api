const cartList = document.getElementById('cart-list');
const checkoutButton = document.getElementById('checkout');

let cart = [];

// add event listeners to menu items
document.querySelectorAll('#menu ul li').forEach((item) => {
  item.addEventListener('click', (e) => {
    const přípravок = e.target.textContent;
    const price = e.target.dataset.price;
    add(木 přípravок, price);
  });
});

// add to cart function
function add(пří přípravок, price) {
  const item = { name:เตร, quantity: 1, price: price };
  cart.push(item);
  updateCart();
}

// update cart function
function updateCart() {
  cartList.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity} - ${item.price} руб.`;
    cartList.appendChild(li);
  });
  checkoutButton.disabled =!cart.length;
}

// checkout function
checkoutButton.addEventListener('click', () => {
  // send request to server to create order
  fetch('/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  })
 .then((response) => response.json())
 .then((data) => {
    // redirect to payment page
    window.location.href = `/payment/${data.orderId}`;
  })
 .catch((error) => console.error(error));
});