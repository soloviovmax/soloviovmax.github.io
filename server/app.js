import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();
const app = express();

app.use(bodyParser.json());

app.get('/cards/:sortType', function(req, res) {
  db.cardsList(req.params.sortType).then(data => res.send(data));
});

app.post('/cards', function(req, res) {
  db.addCard(req.body).then(data => res.send(data));
});

app.delete('/cards/:id', function(req, res) {
  db.removeCard(req.params.id).then(data => res.send(data));
});

app.listen(8080, () => {
  console.log('Server running');
})
