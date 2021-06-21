import styled from 'styled-components';

const PostInputStyle = styled.input`
  border: none;
  border-radius: 8px;
  background-color: #eef1f4;
  font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',
    sans-serif;
  line-height: 1.2;
  font-size: 16px;
  outline: none;
  color: #333;
  padding: ${(props) => props.padding};
`;

const PostLabelInputStyle = styled.input`
  outline: none;
  border: none;
  appearance: none;
  font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: normal;
  color: #555;
  padding: ${(props) => props.padding};
`;

export const PostInput = ({ onChange, padding, placeholder, name, value }) => {
  return (
    <PostInputStyle
      type="text"
      onChange={onChange}
      padding={padding}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

export const PostLabelInput = ({
  onChange,
  padding,
  placeholder,
  name,
  value,
}) => {
  return (
    <PostLabelInputStyle
      type="text"
      padding={padding}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};
