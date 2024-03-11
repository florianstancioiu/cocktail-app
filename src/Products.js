import { html } from 'lit';
import { useEffect, useState } from '@pionjs/pion';

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const Products = ({ searchKeyword, addToCart }) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getData = setTimeout(async () => {
      if (searchKeyword === '') {
        return false;
      }

      const response = await fetch(`${url}${searchKeyword}`);
      const cocktailsData = await response.json();

      setCocktails(cocktailsData?.drinks === null ? [] : cocktailsData?.drinks);
    }, 500);

    return () => clearTimeout(getData);
  }, [searchKeyword]);

  return html`<div class="products-wrapper">
      ${cocktails.length > 0
        ? cocktails.map((cocktail) => {
            return html`<app-product
              .addToCart=${addToCart}
              .cocktailData=${cocktail}
            ></app-product>`;
          })
        : html`<h2>No products were found for the keyword</h2>`}
    </div>
    <style>
      .products-wrapper {
        min-height: 100px;
        border: 1px solid black;
        padding: 20px;
      }

      app-product {
        margin-bottom: 20px;
        display: block;
      }

      app-product:last-child {
        margin-bottom: 0;
      }
    </style> `;
};

export default Products;
