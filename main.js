import { html } from 'lit';
import { component, useState } from '@pionjs/pion';
import './style.css';

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

  return html`<div class="wrapper">
      <app-search></app-search>
      <div class="main">
        <app-products search-keyword=${searchKeyword}></app-products>
        <app-shopping-list></app-shopping-list>
      </div>
    </div>
    <style>
      .wrapper {
        max-width: 900px;
        margin: 0 auto;
      }

      .main {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 20px;
      }
    </style>`;
};

customElements.define('main-app', component(App));
