import React from 'react';
import '../css/header.css'
import logo from '../assets/logo.svg'
import favorite from '../assets/favorite_border.svg'
import person from '../assets/person_outline.svg'
import search from '../assets/search 1.svg'

const Header = () => {
  return (
    <div className='container'>
        <header className='header'>
        <img src={logo} className='logo'/>
      <div className='nav'>
        <ul className='nav-ul'>
            <div className='men-hr'>
              <li><span>Мужское</span></li>
              <hr />
            </div>
            <li>Женское</li>
            <li>Унисекс</li>
            <li><span>Sale</span></li>
            <li>FAQ</li>
            <li>Безопасная сделка</li>
            <li>Правила пользования</li>
        </ul>
      </div>
      <div className='header-elements'>
        <img src={favorite} className='favorite-icon' />
        <img src={person} alt="" />
        <button className='sell'>Продать</button>
      </div>
        </header>

        <div className='black-search'>

            <img src={search} className='search-icon'/>
            <input type="search" 
            className='input-search'
            placeholder='Поиск товара, бренда или продавца...Поиск товара, бренда или продавца...Поиск товара, бренда или продавца...Поиск товара, бренда или продавца... ' />
        </div>

        <div className='navigation'>
            <h3>Футболки</h3>
            <p>Главная / Мужское / <span>Футболки</span></p>
        </div>
    </div>
  );
}

export default Header;
