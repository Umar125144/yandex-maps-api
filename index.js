const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/api/maps', (req, res) => {
  const apiKey = '2c552bf6-3375-44aa-aa37-cb9e272d1503';
  const address = 'Москва, Красная площадь';
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${address}`;

  axios.get(url)
    .then(response => {
      const geoObject = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
      res.json(geoObject);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при запросе к API' });
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
