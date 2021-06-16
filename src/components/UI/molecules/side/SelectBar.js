import React from 'react';
import Delete from '../../../../assets/svg/trash-alt-regular.svg';
import { CircleButton } from '../../atoms/button';
import { PostTitle } from '../../atoms/text';
import Close from '../../../../assets/svg/close-light.svg';
import styled from 'styled-components';

const StyledSelectBar = styled.div`
  display: flex;
  align-items: center;
  h2 {
    flex: 1;
  }
`;

function SelectBar() {
  return (
    <StyledSelectBar>
      <CircleButton margin={'10px'} onClick svg={Close} color />
      <PostTitle margin={'10px'}>$ selected</PostTitle>
      <CircleButton margin={'10px'} onClick svg={Delete} color />
    </StyledSelectBar>
  );
}

export default SelectBar;
