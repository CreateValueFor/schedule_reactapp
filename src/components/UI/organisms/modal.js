import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../atoms/box';

const StyledModalBg = styled.div`
  z-index: 99;
  top: 0;
  overflow-y: hidden;
  cursor: default;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
`;

const StyledModal = styled(StyledFlexBox)`
  width: 400px;
  min-height: 179px;
  border-radius: 16px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
`;

function Modal({ children }) {
  return (
    <StyledModalBg>
      <StyledModal>{children}</StyledModal>
    </StyledModalBg>
  );
}

export default Modal;
