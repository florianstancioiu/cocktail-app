import { html } from 'lit';
import { useState } from '@pionjs/pion';

const Search = ({ theRating }) => {
  const [keyword, setKeyword] = useState('');

  return html`<div class="search-wrapper">
      <input type="text" class="search-input" />
      <button class="search-button">Search</button>
    </div>
    <style>
      .search-wrapper {
        display: flex;
        max-width: 500px;
        margin: 40px auto 20px;
      }
    </style> `;
};

export default Search;
