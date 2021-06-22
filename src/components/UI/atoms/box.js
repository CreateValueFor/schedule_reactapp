import styled from 'styled-components';

export const StyledFlexBox = styled.div`
  display: flex;
  /* flex: 1; */
  border-radius: 8px;
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
