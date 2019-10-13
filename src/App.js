import React from 'react';

import EventsContainer from 'Containers/EventsContainer';

const events = [
  {
      name: 'FOP Lodge #5',
      location: 'Levittown, PA',
      date:'October 18th, 2019',
      time:'9pm-1am',
      img_url:'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/18486133_1067662816701679_8644740238785787790_n.jpg?_nc_cat=107&_nc_oc=AQkxrPg8prOfPe7B60icpwmYImKQd8LJ5zvmFnLH7ua9jVka5Ycq3_gfrNaMd32Vro0&_nc_ht=scontent-iad3-1.xx&oh=8e9adb4ae1e9b5f18de99c7ee18ad506&oe=5E24C47F'
  },
  {
    name: 'FOP Lodge #6',
    location: 'ABC, PA',
    date:'October 18th, 2019',
    time:'9pm-1am',
    img_url:'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/18486133_1067662816701679_8644740238785787790_n.jpg?_nc_cat=107&_nc_oc=AQkxrPg8prOfPe7B60icpwmYImKQd8LJ5zvmFnLH7ua9jVka5Ycq3_gfrNaMd32Vro0&_nc_ht=scontent-iad3-1.xx&oh=8e9adb4ae1e9b5f18de99c7ee18ad506&oe=5E24C47F'
  },
];

function App () {
  return (
    <EventsContainer events={events} />
  );
}

export default App;
