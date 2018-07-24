import React from 'react';

const RadarFormView = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    props.handleActiveTravelInput(event);
    props.handlePhysicalActivityInput(event);
    props.handleGreenSpaceInput(event);
  }

  return(
      <form onSubmit={handleSubmit}>
        <div className='radar-form-queries'>
          <label htmlFor='active_travel_input'>What's your everage percentage of Journeys By Active Travel ?</label>
          <input type='number' id='active_travel_input'/>
          <br/>
        </div>
        <div className='radar-form-queries'>
          <label htmlFor='physical_activity_input'>What's your everage percentage of Physical Activiity ?</label>
          <input type='number' id='physical_activity_input'/>
          <br/>
        </div>
        <div className='radar-form-queries'>
          <label htmlFor='green_space_input'>What percentage you have access to Green Space ?</label>
        <input type='number' id='green_space_input'/>
          <br/>
        </div>
        <button type="submit" id="submit" value="submit">Submit</button>
      </form>
    )

}

export default RadarFormView;
