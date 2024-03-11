import { html } from 'lit';
import { component, useState } from '@pionjs/pion';
import { getCocktailIngredients, capitalize } from './helpers';
import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';

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
  const [searchKeyword, setSearchKeyword] = useState('Margarita');
  const [cart, setCart] = useState([]);

  const updateKeyword = (value) => {
    setSearchKeyword(value);
  };

  const addToCart = (cocktail) => {
    const currentIngredients = getCocktailIngredients(cocktail);
    const allIngredients = [...cart, ...currentIngredients];
    let uniqueIngredients = [
      ...new Set(allIngredients.map((ingredient) => ingredient.toLowerCase())),
    ];

    uniqueIngredients = uniqueIngredients.map((ingredient) =>
      capitalize(ingredient)
    );

    setCart(uniqueIngredients);

    Toastify({
      text: 'Ingredients added to cart',
      duration: 2000,
    }).showToast();
  };

  const removeCartItemHandler = (ingredient) => {
    const filteredCart = cart.filter((cartIngredient) => {
      if (cartIngredient === ingredient) {
        return false;
      }

      return true;
    });

    setCart(filteredCart);

    Toastify({
      text: 'Ingredient removed from cart',
      duration: 2000,
    }).showToast();
  };

  return html`<div class="wrapper">
      <app-search
        .searchKeyword=${searchKeyword}
        .updateKeyword=${updateKeyword}
      ></app-search>
      <div class="main">
        <app-products
          .searchKeyword=${searchKeyword}
          .addToCart=${addToCart}
        ></app-products>
        <app-shopping-list
          .cartItems=${cart}
          .removeItem=${removeCartItemHandler}
        ></app-shopping-list>
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

      @media print {
        app-search,
        app-products {
          display: none;
        }
      }
    </style>`;
};

customElements.define('main-app', component(App));
