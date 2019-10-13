import React from 'react';
import EventCard from 'Components/EventCard';

function EventsContainer({ events }) {
  return (
  <grid>
  {events.map((event) => (
    <EventCard {...event} />
    )
  )}
  </grid>
  )
}

export default EventsContainer;
