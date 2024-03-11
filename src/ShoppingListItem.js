import { html } from 'lit';

const ShoppingListItem = ({ theIngredient }) => {
  return html`<div class="shopping-list-item-wrapper">
      <p>${theIngredient}</p>
      <button>Remove</button>
    </div>
    <style>
      .shopping-list-item-wrapper {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid black;
      }
    </style>`;
};

ShoppingListItem.observedAttributes = ['the-ingredient'];

export default ShoppingListItem;
