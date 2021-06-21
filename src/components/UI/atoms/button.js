import styled from 'styled-components';

const DefaultCircleButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: 20px 20px;
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  color: ${(props) => props.color};
  background-image: url(${(props) => props.svg});
  border: none;
  background-color: transparent;
  margin: ${(props) => props.margin};
  &:hover {
    background-color: #f6f8fa;
  }
`;

export const DefaultRectangleButton = styled.button`
  padding: ${(props) => props.padding};
  border-radius: 8px;
  font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',
    sans-serif;
  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.35px;
  margin: ${(props) => props.margin};
  color: #969aa2;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: #f6f8fa;
  }
  &:active {
    background-color: #eef1f4;
    color: #52565d;
  }
`;

export const CircleButton = ({ margin, svg, onClick, ...props }) => {
  return (
    <DefaultCircleButton
      onClick={onClick}
      svg={svg}
      margin={margin}
      name={props.name && props.name}
    ></DefaultCircleButton>
  );
};

export const RectangleButton = ({ children, margin, padding, onClick }) => {
  return (
    <DefaultRectangleButton onClick={onClick} margin={margin} padding={padding}>
      {children}
    </DefaultRectangleButton>
  );
};
