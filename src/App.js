import React from 'react';
import './App.css';
import BoatCard from './BoatCard/BoatCard';

const boats = [
  {
    imageSrc: 'https://d1pkcile4c5gsr.cloudfront.net/boat/0001/89/thumb_88369_boat_expose_414x242.jpeg',
    name: 'Jeannau Sun Odyssey 45.2',
    year: 2001,
    city: 'Split',
    country: 'Croatia',
    views: 69,
    length: 12.04,
    cabins: 4,
    guests: 10,
    reviews: 3,
    tags: ['Sicherungsshein', 'Luxury'],
    sailType: 'Rolling Mainsail',
    freeExtras: ['AirCon', 'WiFi'],
    price: 1083.00,
    periodType: 'weekly',
  },
  {
    imageSrc: 'https://d1pkcile4c5gsr.cloudfront.net/boat/0001/89/thumb_88369_boat_expose_414x242.jpeg',
    name: 'Jeannau Sun Odyssey 45.2',
    year: 2001,
    city: 'Split',
    country: 'Croatia',
    views: 69,
    length: 12.04,
    cabins: 4,
    guests: 10,
    reviews: 3,
    tags: ['Sicherungsshein', 'Luxury'],
    sailType: 'Rolling Mainsail',
    freeExtras: ['AirCon', 'WiFi'],
    price: 1083.00,
    periodType: 'weekly',
  },
  {
    imageSrc: 'https://d1pkcile4c5gsr.cloudfront.net/boat/0001/89/thumb_88369_boat_expose_414x242.jpeg',
    name: 'Jeannau Sun Odyssey 45.2',
    year: 2001,
    city: 'Split',
    country: 'Croatia',
    views: 69,
    length: 12.04,
    cabins: 4,
    guests: 10,
    reviews: 3,
    tags: ['Sicherungsshein', 'Luxury'],
    sailType: 'Rolling Mainsail',
    freeExtras: ['AirCon', 'WiFi'],
    price: 1083.00,
    periodType: 'weekly',
  },
]

function App() {
  return (
    <div style={rootStyle}>
      {boats.map(boat => {
        const { imageSrc, name, year, city, country, views, length, cabins, guests, reviews, tags, sailType, freeExtras, price, periodType } = boat;

        return (
          <div style={boatContainerStyle}>
            <BoatCard
              imageSrc={imageSrc}
              name={name}
              year={year}
              city={city}
              country={country}
              views={views}
              length={length}
              cabins={cabins}
              guests={guests}
              reviews={reviews}
              tags={tags}
              sailType={sailType}
              freeExtras={freeExtras}
              price={price}
              periodType={periodType}
            />
          </div>
        )
      })}
    </div>)
}

const rootStyle = {
  padding: '10px',
}

const boatContainerStyle = {
  margin: '10px',
}

export default App;



