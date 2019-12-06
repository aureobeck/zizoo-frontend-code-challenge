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
import { pinkishGrey } from '../constants/colors';


export default function BoardCard({ imageSrc, name, year, city, country, views, length, cabins, guests, reviews, tags, sailType, freeExtras, price, periodType }) {
  const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

  const RowIfMobile = isMobile ? Row : Column;
  const ColumnIfMobile = isMobile ? Column : Row;

  return (
    <ColumnIfMobile>
      <div style={imageContainerStyle}>
        <img style={imageStyle} width={360} height={220} src={imageSrc} alt={'img'} />
      </div>
      <div style={{ height: '100%', width: '100%' }}>
        <Row>
          <MainInfo
            name={name}
            year={year}
            city={city}
            country={country}
          />
          <ViewsInfo views={views} isMobile={isMobile}/>
        </Row>
        <Row>
          <NumericInfo number={length} label={'LENGTH'} unity={'m'} />
          <NumericInfo number={cabins} label={'CABINS'} />
          <NumericInfo number={guests} label={'GUESTS'} />
          <ReviewsInfo reviews={reviews} />
        </Row>
        <ColumnIfMobile>
          <RowIfMobile style={{ padding: 1, border: `1px solid ${pinkishGrey}`, width: isMobile ? null : '60%' }}>
            <TagsInfo tags={tags} isMobile={isMobile} />
            <SailTypeInfo sailType={sailType} isMobile={isMobile} />
            <FreeExtrasInfo freeExtras={freeExtras} isMobile={isMobile} />
          </RowIfMobile>
          <RowIfMobile style={{ width: isMobile ? '100%' : '40%' }}>
            <PriceInfo price={price} periodType={periodType} isMobile={isMobile} />
            <ViewDetails isMobile={isMobile} />
          </RowIfMobile>
        </ColumnIfMobile>
      </div>
    </ColumnIfMobile>
  )
}

const imageContainerStyle = {
  borderColor: pinkishGrey,
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '7px'
}

const imageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
}