import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Dowiedz się więcej o postępach prac!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/spotkaniepierwsze.png'
              text='Spotkanie pierwsze'
              label='Spotkania'
              path='/ksiazki'
            />
            <CardItem
              src='./images/spotkaniedrugie.png'
              text='Spotkanie drugie'
              label='Spotkania'
              path='/ksiazki'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/spotkanietrzecie.png'
              text='Spotkanie trzecie'
              label='Spotkania'
              path='/ksiazki'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;