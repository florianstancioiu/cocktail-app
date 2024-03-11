import { html } from 'lit';
import { useRef } from '@pionjs/pion';

const Search = ({ updateKeyword, searchKeyword }) => {
  const inputRef = useRef(null);

  return html`<div class="search-wrapper">
      <input
        ref=${inputRef}
        type="text"
        value=${searchKeyword}
        @change=${(event) => {
          updateKeyword(event.target.value);
        }}
        class="search-input"
      />
      <button
        class="search-button"
        @click=${() => {
          console.log(inputRef);
          //updateKeyword(inputRef.current.target.value)
        }}
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
