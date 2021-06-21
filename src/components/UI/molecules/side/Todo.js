import React, { useState } from 'react';
import { Sign } from '../../atoms/sign';
import check from '../.././../../assets/svg/check-light.svg';
import { PostLabelStyle, PostTitle } from '../../atoms/text';
import { CircleButton, DefaultRectangleButton } from '../../atoms/button';
import Edit from '../../../../assets/svg/edit-solid.svg';
import More from '../../../../assets/svg/more-light.svg';
import styled from 'styled-components';
import Close from '../../../../assets/svg/close-light.svg';
import { FlexBox } from '../../atoms/box';
import { useTodoDispatch } from '../../../pages/TodoPage';

const StyledTodo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  min-height: 40px;
  & > div:first-child {
    z-index: 10;
    background-color: ${(props) => {
      switch (props.grade) {
        case 'good':
          return 'rgb(0, 189, 184)';
        case 'soso':
          return '#ffff83';
        case 'bad':
          return '#f35750';
        default:
          return '';
      }
    }};
  }
`;
const RestyleRectangleButton = styled(DefaultRectangleButton)`
  color: #f35750;
`;

const RestylePostLabel = styled(PostLabelStyle)`
  font-size: 18px;
`;

function Todo({ text, label, done, grade, id }) {
  const [more, setMore] = useState(false);
  const dispatch = useTodoDispatch();
  const moreClick = () => {
    setMore((prev) => !prev);
  };
  const onClear = () => {
    dispatch({
      type: 'CLEAR',
      id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  };
  return (
    <StyledTodo grade={grade}>
      {/* 현황 */}
      {!done ? (
        <Sign svg={check} bgcolor={'#b0b4bd'} margin={'0 10px 0 0'} />
      ) : (
        <Sign
          onClick={onClear}
          svg={Close}
          bgcolor={'rgb(0, 189, 184)'}
          margin={'0 10px 0 0'}
        />
      )}

      {/* 할 일 내용 */}
      {/* onClick에 함수 지정 시 클릭 할 때마다 변경, onClick지정 안해도 Toggle 됨 */}
      <FlexBox dir={'column'}>
        <FlexBox dir={'row'}>
          <PostTitle margin={'0 0 0 5px'}>{text}</PostTitle>

          {!more ? (
            <CircleButton margin={'px'} onClick={moreClick} svg={More} />
          ) : (
            <CircleButton margin={'0px'} onClick={moreClick} svg={Close} />
          )}
          <CircleButton margin={'px'} onClick svg={Edit} />
        </FlexBox>
        <FlexBox dir={'column'}>
          {more && (
            <RestylePostLabel margin={'10px'}>
              {label}
              <RestyleRectangleButton onClick={onRemove}>
                제거
              </RestyleRectangleButton>
            </RestylePostLabel>
          )}
        </FlexBox>
      </FlexBox>
    </StyledTodo>
  );
}

export default Todo;
