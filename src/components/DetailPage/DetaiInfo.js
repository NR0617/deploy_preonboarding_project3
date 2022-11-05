import React from 'react';
import * as Styled from './style';
import { Attribute } from '../../constant/AttributeBttons';

const DetailInfo = ({ id, attribute, startDate, amount, insurance, additionalProducts }) => {
  let day = ['일', '월', '화', '수', '목', '금', '토'];
  let today = new Date(startDate);
  let dateFormat1 =
    today.getFullYear() +
    '년 ' +
    (today.getMonth() + 1) +
    '월 ' +
    today.getDate() +
    '일 (' +
    day[today.getDay()] +
    ')';

  return (
    <>
      <Styled.CarImageContainer src={attribute.imageUrl} alt="" />
      <Styled.DetailInfoContainer>
        <Styled.CarBrand>{attribute.brand}</Styled.CarBrand>
        <Styled.CarName>{attribute.name}</Styled.CarName>
        <Styled.CarPrice>월{amount}원</Styled.CarPrice>
        <Styled.CarinfoTitle>차량정보</Styled.CarinfoTitle>
        <Styled.MakeSpace>
          <Styled.CarInfoContent style={{ 'font-weight': 'bolder' }}>차종</Styled.CarInfoContent>
          <Styled.CarInfoContent>{Attribute.segment[attribute.segment]}</Styled.CarInfoContent>
        </Styled.MakeSpace>
        <Styled.MakeSpace>
          <Styled.CarInfoContent style={{ 'font-weight': 'bolder' }}>연료</Styled.CarInfoContent>
          <Styled.CarInfoContent>{Attribute.fuelType[attribute.fuelType]}</Styled.CarInfoContent>
        </Styled.MakeSpace>
        <Styled.MakeSpace>
          <Styled.CarInfoContent style={{ 'font-weight': 'bolder' }}>
            이용 가능일
          </Styled.CarInfoContent>
          <Styled.CarInfoContent>{dateFormat1} 부터</Styled.CarInfoContent>
        </Styled.MakeSpace>
        <Styled.CarinfoTitle>보험</Styled.CarinfoTitle>
        <Styled.MakeSpace>
          <Styled.CarInfoContent style={{ 'font-weight': 'bolder' }}>
            {insurance[0].name}
          </Styled.CarInfoContent>
          <Styled.CarInfoContent>{insurance[0].description}</Styled.CarInfoContent>
        </Styled.MakeSpace>
        <Styled.MakeSpace>
          <Styled.CarInfoContent style={{ 'font-weight': 'bolder' }}>
            {insurance[1].name}
          </Styled.CarInfoContent>
          <Styled.CarInfoContent>{insurance[1].description}</Styled.CarInfoContent>
        </Styled.MakeSpace>
        <Styled.CarinfoTitle>추가상품</Styled.CarinfoTitle>
        <Styled.MakeSpace>
          {additionalProducts.length !== 0 ? (
            <Styled.CarInfoContent>{additionalProducts[0].name}</Styled.CarInfoContent>
          ) : null}
          {additionalProducts.length !== 0 ? (
            <Styled.CarInfoContent>
              월{additionalProducts[0].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Styled.CarInfoContent>
          ) : null}
        </Styled.MakeSpace>
      </Styled.DetailInfoContainer>
    </>
  );
};

export default DetailInfo;
