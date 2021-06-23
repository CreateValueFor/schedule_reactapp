import React from 'react';
import styled from 'styled-components';
import { FlexBox, StyledFlexBox } from '../../atoms/box';
import { PostTitleStyle } from '../../atoms/text';
import MainCalendarContent from './MainCalendarContent';

const StyledBody = styled.div`
  text-align: center;

  width: 80%;
  margin: 20px auto 0px;

  & > div:first-child {
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }
`;
export const RestyledFlexBox = styled(StyledFlexBox)`
  width: 140px;
  height: 32px;
  margin: 6px 6px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RestyledPostTitleStyle = styled(PostTitleStyle)`
  position: static;
  height: 32px;
  color: #292929;
`;

function MainCalendarBody() {
  return (
    <StyledBody>
      <FlexBox dir={'row'}>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>SUN</RestyledPostTitleStyle>
        </RestyledFlexBox>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>MON</RestyledPostTitleStyle>
        </RestyledFlexBox>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>TUE</RestyledPostTitleStyle>
        </RestyledFlexBox>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>WED</RestyledPostTitleStyle>
        </RestyledFlexBox>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>THU</RestyledPostTitleStyle>
        </RestyledFlexBox>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>FRI</RestyledPostTitleStyle>
        </RestyledFlexBox>
        <RestyledFlexBox>
          <RestyledPostTitleStyle>SAT</RestyledPostTitleStyle>
        </RestyledFlexBox>
      </FlexBox>
      <FlexBox dir={'column'}>
        <MainCalendarContent></MainCalendarContent>
      </FlexBox>
    </StyledBody>
  );
}

export default MainCalendarBody;
