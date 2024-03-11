import { html } from 'lit';

const Product = ({ cocktailData, addToCart }) => {
  const { strDrinkThumb, idDrink, strDrink, strInstructions } = cocktailData;

  const addToCartHandler = () => {
    addToCart(cocktailData);
  };

  return html`<div class="product-wrapper">
      <div class="image-wrapper">
        <img class="image" src=${strDrinkThumb} alt=${strDrink} />
      </div>
      <div class="details">
        <p class="drink-id">${idDrink}</p>
        <p class="title">${strDrink}</p>
        <p class="instructions">${strInstructions}</p>
      </div>
      <div class="button-wrapper">
        <button @click=${() => addToCartHandler(cocktailData)}>+</button>
      </div>
    </div>
    <style>
      .product-wrapper {
        display: grid;
        grid-template-columns: 2fr 4fr 1fr;
        margin-bottom: 20px;
        border: 1px solid black;
        padding-right: 20px;
      }

      .details {
        padding-right: 20px;
      }

      .drink-id {
        font-size: 12px;
      }

      .image-wrapper,
      .button-wrapper {
        display: grid;
        place-items: center;
      }

      .image {
        max-width: 100px;
        max-height: 100px;
      }

      button {
        width: 40px;
        height: 40px;
        text-align: center;
      }

      .title {
        font-size: 20px;
        font-weight: bold;
      }
    </style>`;
};

export default Product;
