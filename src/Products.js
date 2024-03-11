import { html } from 'lit';
import { useEffect, useState } from '@pionjs/pion';

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const Products = ({ searchKeyword }) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(async () => {
    const response = await fetch(`${url}${searchKeyword}`);
    const cocktailsData = await response.json();

    console.log(cocktailsData?.drinks);

    setCocktails(cocktailsData?.drinks);
  }, [searchKeyword]);

  return html`<div class="products-wrapper">
      ${cocktails.map((cocktail) => {
        return html`<app-product .cocktailData=${cocktail}></app-product>`;
      })}
    </div>
    <style>
      .products-wrapper {
        min-height: 200px;
        border: 1px solid black;
      }
    </style> `;
};

Products.observedAttributes = ['search-keyword'];

export default Products;
