import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './components/store';
import Stock from './components/stock';
import Cart from './components/cart';
import CartNotify from './components/cartNotify';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="jumbotron">
        <h1>Redux Workshop</h1>
        <h2>
          <CartNotify/>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Stock/>
          </div>
          <div className="col">
            <Cart/>
          </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
