import { ReactElement } from 'react';
import './SearchForm.scss';

function SearchFrom(): ReactElement {
  return (
    <form className="search-form">
      <input type="text" placeholder="Кино, музыка и другие сервисы"/>
    </form>
  );
}

export default SearchFrom;
