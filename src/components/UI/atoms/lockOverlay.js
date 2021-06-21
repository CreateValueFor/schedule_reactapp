import styled from 'styled-components';

const LockOverlay = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const LockOver = ({ width, height }) => {
  return <LockOverlay width={width} height={height}></LockOverlay>;
};
