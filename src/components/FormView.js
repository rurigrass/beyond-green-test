import React from 'react';

const FormView = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    props.handleUserTurnoverInput(event);
    props.handleUserSpendInput(event);
  }

  return(
      <form onSubmit={handleSubmit}>
        <div className='form-queries'>
          <label htmlFor='user-turnover-input'>What's the annual turnover of your business?</label>
          <input type='number' id='user_turnover_input'/>
          <br/>
        </div>
        <div className='form-queries'>
          <label htmlFor='user-energy-input'>How much does your business spend on energy per year?</label>
          <input type='number' id='user_energy_input'/>
          <br/>
        </div>
        <button type="submit" id="submit" value="submit">Submit</button>
      </form>
    )

}

export default FormView
