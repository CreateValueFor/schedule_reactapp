import React, { useState } from 'react';
import { Sign } from '../../atoms/sign';
import {
  RestylePostLabel,
  RestyleRectangleButton,
  StyledTodo,
} from '../side/Todo';
import check from '../.././../../assets/svg/check-light.svg';
import Close from '../../../../assets/svg/close-light.svg';
import { FlexBox } from '../../atoms/box';
import { PostTitle } from '../../atoms/text';
import { CircleButton } from '../../atoms/button';
import More from '../../../../assets/svg/more-light.svg';
import Edit from '../../../../assets/svg/edit-solid.svg';
import ThumbsUp from '../../../../assets/svg/thumbs-up-regular.svg';
import ThumbsDown from '../../../../assets/svg/thumbs-down-regular.svg';
import Circle from '../../../../assets/svg/circle-regular.svg';

function ModalItem({ text, label, done, grade, id }) {
  const [more, setMore] = useState(false);
  const moreClick = () => {
    setMore((prev) => !prev);
  };
  const onClear = () => {};
  const onRemove = () => {};
  const onToggle = () => {};
  return (
    <FlexBox dir={'row'}>
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
            <CircleButton margin={'px'} onClick={() => {}} svg={Edit} />
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
      <div>
        {/* 완료도 평가 */}
        {/* 스타일드div props지정안했을 때 넣는 법 */}
        <CircleButton
          name="good"
          onClick={onToggle}
          margin={'0px'}
          svg={ThumbsUp}
          color
        />
        <CircleButton
          name="soso"
          onClick={onToggle}
          margin={'0px'}
          svg={Circle}
          color
        />
        <CircleButton
          name="bad"
          onClick={onToggle}
          margin={'0px'}
          svg={ThumbsDown}
          color
        />
      </div>
    </FlexBox>
  );
}

export default ModalItem;
