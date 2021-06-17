import styled from 'styled-components';

const PostFormStyle = styled.form`
  width: 100%;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  border-radius: 8px;
  border: 1px solid #dde1e7;
`;

export const PostForm = ({ onSubmit, children }) => {
  return <PostFormStyle onSubmit={onSubmit}>{children}</PostFormStyle>;
};
