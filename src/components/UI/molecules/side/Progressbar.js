import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../../../pages/TodoPage';
import { PostTitleStyle } from '../../atoms/text';

const RestyledPostTitle = styled(PostTitleStyle)`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

function Progressbar() {
  const { todos } = useTodoState();
  const doneTasks = todos.filter((todo) => !todo.done);
  const goodTasks = todos.filter((todo) => todo.grade === 'good').length;
  const sosoTasks = todos.filter((todo) => todo.grade === 'soso').length;
  const badTasks = todos.filter((todo) => todo.grade === 'bad').length;
  const achievement =
    ((goodTasks * 1 + sosoTasks * 0.5 + badTasks * 0) / todos.length) * 100;
  return (
    <>
      <PostTitleStyle margin={'10px'}>
        {Math.round(100 - (doneTasks.length / todos.length) * 100)}%
        완료하였습니다
      </PostTitleStyle>
      <RestyledPostTitle margin={'10px'}>
        {Math.round(achievement)}% 성취하였습니다.
      </RestyledPostTitle>
    </>
  );
}

export default Progressbar;
