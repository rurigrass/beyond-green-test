import React from 'react';

const Slider = (props) => {

  function handleSubmit(event){
    event.preventDefault();
  }

  return(
      <form onSubmit={handleSubmit}>
        <div className='radar-form-queries'>
          <label htmlFor='active_travel_input'>Slider Test</label>
          <input type='number' id='active_travel_input'/>
          <br/>
        </div>
        <button type="submit" id="submit" value="submit">Submit</button>
      </form>
    )

}

export default Slider;
