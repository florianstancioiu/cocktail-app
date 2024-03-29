import { html } from 'lit';

const ShoppingList = ({ cartItems, removeItem }) => {
  return html`<div class="shopping-list-wrapper">
      <div class="shopping-list-inner">
        <h1>Shopping List</h1>
        ${cartItems.length > 0
          ? cartItems.map(
              (item) =>
                html`<app-shopping-list-item
                  the-ingredient=${item}
                  .removeItem=${(value) => removeItem(value)}
                />`
            )
          : html`<h3>The cart is empty</h3>`}
      </div>
      ${cartItems.length > 0
        ? html`<button class="print-btn" @click=${() => window.print()}>
            Print
          </button>`
        : ``}
    </div>
    <style>
      .shopping-list-wrapper {
        min-height: 200px;
        border: 1px solid black;
        padding: 20px;
      }

      .print-btn {
        width: 100%;
        height: 40px;
        line-height: 34px;
      }
    </style>`;
};

export default ShoppingList;
