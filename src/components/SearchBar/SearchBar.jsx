import { useState } from 'react';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit, error }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input}
        type="text"
        placeholder="Search movies..."
        name='query'
        value={query}
        onChange={handleChange}
        required
      />
      <button className={css.btn} type="submit" aria-label='search button'>Search</button>
    </form>
     {error && <p style={{ color: 'red' }}>{error}</p>}
     </div>
  );
};

export default SearchBar;
