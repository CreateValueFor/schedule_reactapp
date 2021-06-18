import React from 'react';
import styled from 'styled-components';
import LeftHeader from '../../molecules/side/LeftHeader';
import RightHeader from '../../molecules/side/RightHeader';

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

function SideHeader() {
  return (
    <PostHeader>
      <LeftHeader />
      <RightHeader />
    </PostHeader>
  );
}

export default SideHeader;
