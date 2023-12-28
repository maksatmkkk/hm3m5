import React, { useEffect, useState } from 'react'
import '../css/leftContainer.css'
import keyboard from '../assets/keyboard_arrow_down.svg'
import east from '../assets/east.svg'
import Card from '../components/Card'
import axios from 'axios'

const LeftContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => setProducts(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='lCon'>
    <div className='lCon-sort'>
      <p>Показано 1 - 15 из 874</p>
      <div className='p-sorted'>
        <p>Сортировать:</p>
        <div className='sortP-icon'>
        <p>Цена по позрастанию</p>
        <img src={keyboard} />
        </div>
      </div>
    </div>
    <div className='cards'>
    {products.slice(0, 15).map(product => (
      <Card 
      image={product.image}
      price={product.price}
      title={product.title}
      productId={product.id}
      key={product.id} />
      ))}
    </div>
    <div className='btn-more'>
      <button className='btn-more-in'>Показать еще</button>
      <div className='numbers'>
        <p><span>1</span></p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>...</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <img src={east} />
      </div>
    </div>
  </div>
  )
}

export default LeftContainer;