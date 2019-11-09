import React from 'react';
import EventCard from 'Components/EventCard';
import ConditionalWrapper from 'Components/ConditionalWrapper';

function EventsContainer({ events }) {
  console.table(events);
  const NUM_CARDS_PER_ROW = 2;
  return (
      events.map((event, i) => (
          <EventCard {...event}></EventCard>
      ))
  )
}

export default EventsContainer;
