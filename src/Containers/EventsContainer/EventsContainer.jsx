import React from 'react';
import EventCard from 'Components/EventCard';

// TODO: Make this an actual grid
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
