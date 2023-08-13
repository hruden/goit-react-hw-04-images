import { useContext, useState } from 'react';
import { Context } from 'stateContext/GlobalContext';

export function Searchbar () {
  const [q, setQ] = useState('');
  const{setErorrMessedge, setPage, setSearchQuery} = useContext(Context)
  
  const onSubmit = data => {
    setSearchQuery(data);
    setPage(1);
    setErorrMessedge('');
  };

  const handlSubmit = e => {
    e.preventDefault();
    onSubmit(q)
    reset()  
    };
  function reset(){
    setQ('')
  }
  const handleChange = ({ target }) => {
    setQ(target.value)
  };
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handlSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={q.trim()}
          />
        </form>
      </header>
    );
}
