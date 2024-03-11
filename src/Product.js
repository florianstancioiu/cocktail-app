import { html } from 'lit';

const Product = ({ cocktailData }) => {
  const { strDrinkThumb, idDrink, strDrink, strInstructions } = cocktailData;

  return html`<div class="product-wrapper">
    <img src=${strDrinkThumb} alt=${strDrink} />
  </div>`;
};

export default Product;
