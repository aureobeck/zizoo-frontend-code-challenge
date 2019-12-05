import React from 'react';
import { useMediaQuery } from 'react-responsive';

import NumericInfo from './NumericInfo';
import ViewsInfo from './ViewsInfo';
import MainInfo from './MainInfo';
import ReviewsInfo from './ReviewsInfo';
import TagsInfo from './TagsInfo';
import FreeExtrasInfo from './FreeExtrasInfo';
import SailTypeInfo from './SailTypeInfo';
import PriceInfo from './PriceInfo';
import Row from './Row';
import Column from './Column';
import ViewDetails from './ViewDetails';


export default function BoardCard({ imageSrc, name, year, city, country, views, length, cabins, guests, reviews, tags, sailType, freeExtras, price, periodType }) {
  const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

  const RowIfMobile = isMobile ? Row : Column;
  const ColumnIfMobile = isMobile ? Column : Row;

  return (
    <ColumnIfMobile>
      <img width={500} height={280} src={imageSrc} alt={'img'} />
      <div>
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
        <ColumnIfMobile>
          <RowIfMobile style={{width: isMobile ? '100%' : '60%'}}>
            <TagsInfo tags={tags} isMobile={isMobile} />
            <SailTypeInfo sailType={sailType} isMobile={isMobile} />
            <FreeExtrasInfo freeExtras={freeExtras} isMobile={isMobile} />
          </RowIfMobile>
          <RowIfMobile style={{width: isMobile ? '100%' : '40%'}}>
            <PriceInfo price={price} periodType={periodType} isMobile={isMobile} />
            <ViewDetails isMobile={isMobile} />
          </RowIfMobile>
        </ColumnIfMobile>
      </div>
    </ColumnIfMobile>
  )
}
