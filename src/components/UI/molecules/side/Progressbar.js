import React from 'react';
import styled from 'styled-components';
import { PostTitleStyle } from '../../atoms/text';

const RestyledPostTitle = styled(PostTitleStyle)`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

function Progressbar() {
  return (
    <RestyledPostTitle maring={'10px'}>$$ % 완료하였습니다</RestyledPostTitle>
  );
}

export default Progressbar;
