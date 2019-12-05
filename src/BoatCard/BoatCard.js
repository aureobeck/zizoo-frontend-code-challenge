import React, { Component } from 'react';
import NumericInfo from './NumericInfo';
import ViewsInfo from './ViewsInfo';
import MainInfo from './MainInfo';
import ReviewsInfo from './ReviewsInfo';
import TagsInfo from './TagsInfo';
import FreeExtrasInfo from './FreeExtrasInfo';
import SailTypeInfo from './SailTypeInfo';
import PriceInfo from './PriceInfo';
import Row from './Row';

export default class BoardCard extends Component {

  render() {
    const { imageSrc, name, year, city, country, views, length, cabins, guests, reviews, tags, sailType, freeExtras, price, periodType } = this.props;

    return (
      <div style={{ width: '500px' }}>
        <img width={500} height={280} src={imageSrc} alt={'img'} />
        <Row>
          <MainInfo
            name={name}
            year={year}
            city={city}
            country={country}
          />
          <ViewsInfo views={views} />
        </Row>
        <Row>
          <NumericInfo number={length} label={'LENGTH'} />
          <NumericInfo number={cabins} label={'CABINS'} />
          <NumericInfo number={guests} label={'GUESTS'} />
          <ReviewsInfo reviews={reviews} />
        </Row>
        <Row>
          <TagsInfo tags={tags}/>
          <SailTypeInfo sailType={sailType} />
          <FreeExtrasInfo freeExtras={freeExtras} />
        </Row>
        <Row>
          <PriceInfo price={price} periodType={periodType} />
          <div style={{ width: '50%', borderColor: '#000', borderWidth: '1px', borderStyle: 'solid', padding: '10px' }}>
            <div>
              {'DIRECT BOOKING'}
            </div>
            <div>
              {'VIEW DETAILS'}
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
