import { html } from 'lit';

const Search = ({ updateKeyword, searchKeyword }) => {
  return html`<div class="search-wrapper">
      <input
        type="text"
        value=${searchKeyword}
        @change=${(event) => updateKeyword(event.target.value)}
        class="search-input"
      />
      <button
        class="search-button"
        @click=${() => updateKeyword(searchKeyword)}
      >
        Search
      </button>
    </div>
    <style>
      .search-wrapper {
        display: flex;
        max-width: 500px;
        margin: 40px auto 20px;
      }

      .search-input {
        width: 450px;
      }

      .search-button {
        width: 50px;
      }
    </style> `;
};

Search.observedAttributes = ['search-keyword'];

export default Search;
