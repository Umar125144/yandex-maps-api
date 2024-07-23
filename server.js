const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Telegram bot API token
const TELEGRAM_API_TOKEN = '6427439123:AAE7EEMgjxGyH3n_uyx0CXUdwWKp3VbemO4';

// Yandex Maps API key
const YANDEX_API_KEY = '2c552bf6-3375-44aa-aa37-cb9e272d1503';

// create order endpoint
app.post('/create-order', (req, res) => {
  const cart = req.body;
  const orderId = generateOrderId();
  // create order in database
  //...
  res.json({ orderId: orderId });
});

// payment endpoint
app.get('/payment/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  // redirect to payment page
  res.redirect(`https://payment.example.com/${orderId}`);
});

// generate order id function
function generateOrderId() {
  return Math.random().toString(36).substr(2, 9);
}

// yandex maps api
app.get('/get-address', (req, res) => {
  const address = req.query.address;
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_API_KEY}&format=json&geocode=${address}`;

  axios.get(url)
    .then(response => {
      const geoObject = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
      const coordinates = geoObject.Point.pos.split(' ');
      res.json({ lat: coordinates[1], lon: coordinates[0] });
    })
    .catch(error => {
      console.error(error);
      res.status(400).json({ error: 'Invalid address' });
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
