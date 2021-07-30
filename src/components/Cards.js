import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Upcomig Movies This Year!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='The Conjuring: The Devil Made Me Do It'
              label='JUNE 4'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The Green Knight'
              label='JUNE 11'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='No Time To Die'
              label='SEPTEMBER 30'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='DUNE'
              label='OCTOBER 1'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Last Night In Soho'
              label='OCTOBER 22'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;




