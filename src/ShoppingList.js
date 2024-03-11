import { html } from 'lit';

const ShoppingList = ({ cartItems }) => {
  return html`<div class="shopping-list-wrapper">
      <div class="shopping-list-inner">
        <h1>Shopping List</h1>
        ${cartItems.length > 0
          ? cartItems.map(
              (item) => html`<app-shopping-list-item .itemData=${item} />`
            )
          : html`<h3>The cart is empty</h3>`}
      </div>
      ${cartItems.length > 0
        ? html`<button class="print-btn">Print</button>`
        : ``}
    </div>
    <style>
      .shopping-list-wrapper {
        min-height: 200px;
        border: 1px solid black;
        padding: 20px;
      }
    </style>`;
};

export default ShoppingList;
