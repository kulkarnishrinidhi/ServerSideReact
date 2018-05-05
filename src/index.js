import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  //the reason we are creating here is to get data first
  const store = createStore();

  // Some logic to initialize and load data into 
  // the store before we attemt to call renderer function

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});

