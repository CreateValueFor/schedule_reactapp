import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../../atoms/box';

const StyledModalButtonContainer = styled(StyledFlexBox)`
  width: 20%;
  height: 100%;
  border: 1px solid black;
`;

function ModalButtonContainer() {
  return <StyledModalButtonContainer></StyledModalButtonContainer>;
}

export default ModalButtonContainer;
