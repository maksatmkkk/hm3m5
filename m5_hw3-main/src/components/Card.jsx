import React from 'react'
import '../css/card.css'
import favoriteBorder from '../assets/favorite_border 1.svg'
import drafts from '../assets/drafts.svg'

const card = ({ image, price, title, productId }) => {
  return (
    <div className='card' key={productId}>
        <div className='card-img'>
        <img src={image}/>
        </div>
        <div className='card-description'>
            <div className='card-p'>
                <h2 className='card-name'>{title}</h2>
                <h3 className='card-price'>{price}₽</h3>
            </div>
            <hr className='card-hr'/>
            <div className='card-p2'>
                <p>Новое</p>
                <p>L</p>
            </div>
            <div className='card-icons'>
                <img src={favoriteBorder} />
                <img src={drafts} />
            </div>
        </div>
    </div>
  )
}

export default card;