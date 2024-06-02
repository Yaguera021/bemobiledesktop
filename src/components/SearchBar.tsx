import Lupa from "../assets/Lupa.png";

import "./styles/SearchBar.scss";

export default function SearchBar() {
  return (
    <div className='input-container'>
      <input type='text' placeholder='Pesquisar' />
      <button className='search-button'>
        <img src={Lupa} alt='search' />
      </button>
    </div>
  );
}
