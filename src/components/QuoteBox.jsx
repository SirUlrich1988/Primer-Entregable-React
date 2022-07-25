import React from 'react'
import {FaQuoteLeft, FaChevronCircleRight} from 'react-icons/fa';

const QuoteBox = ({phrase,handlerChange,randomColor}) => {
    console.log(phrase)
  return (
    <article className='card'>
        <blockquote>
            <div className='card_container'>
                <div className='card_icon'>
                <FaQuoteLeft color={randomColor}/>
                </div>
            <p className='card-p'> {phrase.quote}</p>
            </div>
        <cite>{phrase.author}</cite>
        <button className='card_btn' onClick={handlerChange}><FaChevronCircleRight /></button>
        </blockquote>
        {/* <ul className='card_first'>
            <box-icon className='card_icon' color={randomColor} type='solid' name='quote-left'></box-icon>
            <span className='card_phrase'>{phrase.quote}</span>
        </ul>
        <br />
        <ul className='card_first'>
            <h3 className='card_item'>{phrase.author}</h3>
            <button className='card_btn' onClick={handlerChange}><box-icon type='solid' name='chevron-right-circle'></box-icon></button>
        </ul> */}
      
    </article>
  )
}

export default QuoteBox
