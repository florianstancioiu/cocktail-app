import { html } from 'lit';

const ShoppingList = () => {
  return html`<div class="shopping-list-wrapper">
      <div class="shopping-list-inner"></div>
      <button class="print-btn">Print</button>
    </div>
    <style>
      .shopping-list-wrapper {
        min-height: 200px;
        border: 1px solid black;
      }
    </style>`;
};

export default ShoppingList;
