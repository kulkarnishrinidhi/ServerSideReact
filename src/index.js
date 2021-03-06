// to use async and await babel polyfill needs to be imported
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  //the reason we are creating here is to get data first
  const store = createStore();
  
  // Some logic to initialize and load data into 
  // the store before we attemt to call renderer function
  matchRoutes(Routes, req.path).map( ({ route }) =>  {
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});

