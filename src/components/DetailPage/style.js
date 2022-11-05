import styled from 'styled-components';

export const DetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0 10px 0 10px;
  }
`;
export const CarImageContainer = styled.img`
  width: 100%;
  @media (max-width: 450px) {
    width: 100vw;
  }
`;
export const CarBrand = styled.p`
  font-weight: bolder;
`;
export const CarName = styled.p`
  font-weight: bolder;
`;
export const CarPrice = styled.div`
  text-align: end;
`;
export const CarinfoTitle = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #0094ff;
  color: #ffffff;
  padding: 0 10px;
`;

export const CarInfoContent = styled.p``;
export const MakeSpace = styled.div`
  display: flex;
  justify-content: space-between;
`;
