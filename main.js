import { html } from 'lit';
import { component, useState } from '@pionjs/pion';

import Search from './src/Search';
import Product from './src/Product';
import Products from './src/Products';
import ShoppingList from './src/ShoppingList';
import ShoppingListItem from './src/ShoppingListItem';

customElements.define('app-search', component(Search));
customElements.define('app-product', component(Product));
customElements.define('app-products', component(Products));
customElements.define('app-shopping-list', component(ShoppingList));
customElements.define('app-shopping-list-item', component(ShoppingListItem));

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('mojito');
  const [cart, setCart] = useState([]);

  const updateKeyword = (value) => {
    setSearchKeyword(value);
  };

  const addToCart = (cocktail) => {
    setCart([...cart, cocktail]);
  };

  return html`<div class="wrapper">
      <app-search
        .updateKeyword=${updateKeyword}
        search-keyword=${searchKeyword}
      ></app-search>
      <div class="main">
        <app-products
          .addToCart=${addToCart}
          search-keyword=${searchKeyword}
        ></app-products>
        <app-shopping-list .cartItems=${cart}></app-shopping-list>
      </div>
    </div>
    <style>
      .wrapper {
        max-width: 900px;
        margin: 0 auto;
      }

      .main {
        display: grid;
        grid-template-columns: 4fr 2fr;
        gap: 20px;
      }
    </style>`;
};

customElements.define('main-app', component(App));
