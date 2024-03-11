import { html } from 'lit';

const ShoppingListItem = ({ itemData }) => {
  const { strDrinkThumb, idDrink, strDrink, strInstructions } = itemData;

  return html`<div class="shopping-list-item-wrapper">
    <p>${strDrink}</p>
  </div>`;
};

export default ShoppingListItem;
