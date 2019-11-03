import React, { Fragment } from 'react';

// TODO: Make optional description prop
function EventCard({ name, location, date, img_url, desc }) {
  return (
    <Fragment>
      <h3>
        {name} | {location} | {date}
      </h3>
      <img style={{width: '20em', height: '20em'}}src={img_url}></img>
    </Fragment>
    
  )
}

export default EventCard;
