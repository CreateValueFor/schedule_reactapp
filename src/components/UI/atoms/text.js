import styled from 'styled-components';

const PostHeaderStyle = styled.h1`
  font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',
    sans-serif;
  font-size: 32px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: #272b31;
  margin: ${(props) => props.margin};
`;

const PostTitleStyle = styled.h2`
  font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',
    sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.33;
  color: #222;
  margin: ${(props) => props.margin};
  word-break: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

const PostLabelStyle = styled.div`
  font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',
    sans-serif;
  font-size: 11px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #999;
  margin: ${(props) => props.margin};
`;

export const PostHeader = ({ children, margin }) => {
  return <PostHeaderStyle margin={margin}>{children}</PostHeaderStyle>;
};

export const PostTitle = ({ children, margin }) => {
  return <PostTitleStyle margin={margin}>{children}</PostTitleStyle>;
};

export const PostLabel = ({ children, margin }) => {
  return <PostLabelStyle margin={margin}>{children}</PostLabelStyle>;
};
