import React from 'react';
import './App.css';
import BoatCard from './BoatCard/BoatCard';

function App() {
  return (
    <BoatCard
      imageSrc={'https://d1pkcile4c5gsr.cloudfront.net/boat/0001/89/thumb_88369_boat_expose_414x242.jpeg'}
      name={'Jeannau Sun Odyssey 45.2'}
      year={2001}
      city={'Split'}
      country={'Croatia'}
      views={69}
      length={12.04}
      cabins={4}
      guests={10}
      reviews={3}
      tags={['Sicherungsshein', 'Luxury']}
      sailType={'Rolling Mainsail'}
      freeExtras={['AirCon', 'WiFi']}
      price={1083.00}
      periodType={'weekly'}
    />
  );
}

export default App;



