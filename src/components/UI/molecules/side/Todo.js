import React, { useState } from 'react';
import { Sign } from '../../atoms/sign';
import check from '../.././../../assets/svg/check-light.svg';
import { PostLabel, PostTitle } from '../../atoms/text';
import { CircleButton } from '../../atoms/button';
import Edit from '../../../../assets/svg/edit-solid.svg';
import ThumbsUp from '../../../../assets/svg/thumbs-up-regular.svg';
import ThumbsDown from '../../../../assets/svg/thumbs-down-regular.svg';
import More from '../../../../assets/svg/more-light.svg';
import styled from 'styled-components';
import Close from '../../../../assets/svg/close-light.svg';
import Circle from '../../../../assets/svg/circle-regular.svg';

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSummary = styled.div`
  display: flex;
  flex: 1;
`;

function Todo() {
  const [more, setMore] = useState(false);
  const moreClick = () => {
    setMore((prev) => !prev);
  };

  return (
    <StyledTodo>
      {/* <Sign svg={check} bgcolor={'rgb(0, 189, 184)'} /> */}
      {/* 현황 */}
      <Sign svg={check} bgcolor={'#b0b4bd'} />
      {/* 할 일 내용 */}
      <StyledSummary>
        <PostTitle margin={'0 0 0 5px'}>ddd</PostTitle>
        <PostTitle margin={'0 0 0 5px'}>라벨</PostTitle>
        {more && <PostLabel margin={'10px'}>ddd</PostLabel>}
        {!more ? (
          <CircleButton margin={'px'} onClick={moreClick} svg={More} color />
        ) : (
          <CircleButton margin={'0px'} onClick={moreClick} svg={Close} color />
        )}
        <CircleButton margin={'px'} onClick svg={Edit} color />
      </StyledSummary>
      {/* 완료도 평가 */}
      <CircleButton margin={'0px'} onClick svg={ThumbsUp} color />
      <CircleButton margin={'0px'} onClick svg={Circle} color />
      <CircleButton margin={'0px'} onClick svg={ThumbsDown} color />
    </StyledTodo>
  );
}

export default Todo;
