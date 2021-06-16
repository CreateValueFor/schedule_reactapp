import styled from 'styled-components';

const CircularSign = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-image: url(${(props) => props.svg});
  background-color: ${(props) => props.bgcolor};
  background-size: 14px 10px;
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Sign = ({ svg, bgcolor }) => {
  return <CircularSign svg={svg} bgcolor={bgcolor}></CircularSign>;
};
