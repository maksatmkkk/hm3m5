import React from 'react'
import '../css/RightContainer.css'
import ellipse from '../assets/Ellipse 50.svg'
import remove from '../assets/remove.svg'
import keyboard2 from '../assets/keyboard_arrow_up.svg'
import close from '../assets/close.svg'
import close2 from '../assets/close 2.svg'
import ellipse1 from '../assets/Ellipse 57.svg'
import ellipse2 from '../assets/Ellipse 58.svg'
import ellipse3 from '../assets/Ellipse 59.svg'
import ellipse4 from '../assets/Ellipse 60.svg'
import ellipse5 from '../assets/Ellipse 61.svg'
import ellipse6 from '../assets/Ellipse 62.svg'


const RightContainer = () => {
  return (
    <div className='rCon'>
      <div className='rCon-price'>
      <h2>Цена</h2>
      <div className='priceLines'>
        <hr className='rCon-hr1'/>
        <img src={ellipse} />
        <hr className='rCon-hr2'/>
        <img src={ellipse} />
        <hr className='rCon-hr3'/>
      </div>
      <p>27 550₽ - 37 550₽</p>
      </div>

      <hr className='rCon-line'/>

      <div className='rCon-category'>
        <div className='rCon-h3-icon'>
          <h3>Категории</h3>
          <img src={remove} />
        </div>
        <div className='rCon-categoty-li'>
          <ul>
            <li>Футболки</li>
            <li>Джемперы</li>
            <li>Спортивные костюмы</li>
            <li>Рубашки</li>
            <li>Поло</li>
            <li>Майки</li>
            <li>Худи</li>
            <li>Свитшоты</li>
            <li>Свитера</li>
            <li>Толствоки</li>
          </ul>
        </div>
        <p>Показать еще</p>
      </div>

      <hr className='rCon-line'/>

      <div className='rCon-brand'>
        <p>Бренды</p>
        <img src={keyboard2} />
      </div>

      <hr className='rCon-line'/>

      <div className='rCon-brands'>

        <div className='rCon-selected'>
          <div className='rCon-burberry'>
            <div className='burberry-in'>
              <p>Burberry</p>
              <img src={close} />
            </div>
            <img src={close2} />
          </div>
        </div>

        <div className='rCon-textP'>
          <p>Бренды</p>
        </div>
        <div className='rCon_li-hr'>
        <ul>
          <li>Gucci</li>
          <li>Versace</li>
          <li><span>Burberry</span></li>
          <li>Louis Vuitton</li>
          <li>Prada</li>
          <li>Dolce & Gabbana</li>
        </ul>
        <hr />
        </div>
      </div>

      <hr className='rCon-line1'/>

      <div className='rCon-condition'>
        <div className='rCon_codition-h3-icon'>
          <h3>Состояние</h3>
          <img src={remove} />
        </div>
        <div>
          <input type="checkbox" />
          <p>Новая с биркой</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Новая без бирки</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Небольшие дефекты</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Надевали один раз</p>
        </div>
        <div>
        <input type="checkbox" />
        <p>Надевали несколько раз</p>
        </div>
      </div>

      <hr className='rCon-line1'/>

      <div className='rCon-size'>
        <div className='rCon-size-icon'>
          <h3>Размер одежды</h3>
          <img src={remove} />
        </div>
        <div className='rCon-sizes'>
          <div>XXL</div>
          <div>XS</div>
          <div>XL</div>
          <div className='rCon-Ml'>M</div>
          <div className='rCon-Ml'>L</div>
        </div>
        <div className='rCon-sizes2'>
          <div>US 42</div>
          <div>US 38</div>
          <div>US 33</div>
          <div>US 30</div>
          <div>US 40</div>
          <div>US 36</div>
          <div>US 32</div>
          <div>US 28</div>
          <div>US 39</div>
          <div>US 34</div>
          <div>US 31</div>
        </div>
      </div>

      <hr className='rCon-line1'/>

      <div className='shoesSize'>
        <div className='shoesSize-h3-icon'>
          <h3>Размер обуви</h3>
          <img src={remove} />
        </div>
        <div className='shoesSize-divs'>
          <div>UE 46</div>
          <div>EU 45</div>
          <div>EU 44.5</div>
          <div>EU 44</div>
          <div>EU 43</div>
          <div>EU 42.5</div>
          <div>EU 42</div>
          <div>EU 41</div>
          <div>EU 40</div>
          <div>EU 39</div>
        </div>
      </div>

      <hr className='rCon-line1'/>

      <div className='colors'>
        <div className='colors-h3-icon'>
          <h3>Цвета</h3>
          <img src={remove} />
        </div>
        <div className='colors-icons'>
          <img src={ellipse1} />
          <img src={ellipse2} />
          <img src={ellipse3} />
          <img src={ellipse4} />
          <img src={ellipse5} />
          <img src={ellipse6} />
        </div>
      </div>

      <hr className='rCon-line1'/>

      <button className='btn-sort'>Сбросить фильтр</button>
    </div>
  )
}

export default RightContainer;