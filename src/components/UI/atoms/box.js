import styled from 'styled-components';

const StyledFlexBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => props.dir};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
`;

export const FlexBox = ({ dir, children, margin, padding, bgColor }) => {
  return (
    <StyledFlexBox
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      dir={dir}
    >
      {children}
    </StyledFlexBox>
  );
};
