import starIcon from './images/icon-star.svg';
import illustration from './images/illustration-thank-you.svg';
import { useState } from 'react';

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [items, setItems] = useState("");

  const ToRate = ({ items, setIsSubmitted }) => {
    const isRatingSelected = items !== "";

    return (
      <div id='sub-container--1' className='sub-container'>
        <picture className='star-pic'>
          <source media="(min-width: 768px)" srcSet={starIcon}/>
          <img src={starIcon} alt="Star Icon"/>
        </picture>
        <div className='description'>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!</p>
        </div>
        <div className='rating-btn-grp'>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num} //each child in the array need to have a unique key prop when you use map
              onClick={() => setItems(prevItems => prevItems !== num ? num : "")} //use previous state value
              className={items === num ? 'selected' : ''}
            >{num}
            </button>
          ))}
        </div>
        <button 
          className = 'submit-btn' 
          disabled={!isRatingSelected}
          onClick={() => {
            if (isRatingSelected) {
              setIsSubmitted(true)
            }
          }}
        >Submit
        </button>
      </div>
    )
  }
  
  const RatingResponse = ({ items, setIsSubmitted }) => {
    return (
      <div id='sub-container--2' className='sub-container'>
        <picture className='illustration-pic'>
            <source media="(min-width: 768px)" srcSet={illustration}/>
            <img src={illustration} alt="Illustration"/>
        </picture>
        <p className='rating'>You selected {items} out of 5</p>
        <div className='description'>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don't hesitate to get in touch!</p>
        </div>
        <button 
          className='submit-btn' 
          onClick={() => {
            setIsSubmitted(false)
            setItems("")
            }}
        >Rate Again</button>
      </div>
    )
  }

  return (
    <>
      {!isSubmitted && <ToRate items={items} setIsSubmitted={setIsSubmitted} />}
      {isSubmitted && <RatingResponse items={items} setIsSubmitted={setIsSubmitted}/>}
    </>
  );
}

export default App;