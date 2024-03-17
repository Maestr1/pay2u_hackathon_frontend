import React from 'react';
import './SearchForm.scss'

function SearchFrom(props): JSX.Element {
  return (
    <form className='search-form'>
      <input type="text" placeholder='Кино, музыка и другие сервисы'/>
    </form>
  );
}

export default SearchFrom;
