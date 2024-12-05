import styled from "styled-components";
import { colors } from "../../values/colors";

export function Options({ options, onSelect, className }) {
  const handleClick = (option) => {
    onSelect(option);
  };

  return (
    <Wrapper className={className}>
      {options.map((option) => (
        <Option key={option} onClick={() => handleClick(option)}>
          {option}
        </Option>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  paddingBlock: 10,
});

const Option = styled.div({
  color: colors.white,
  padding: "12px 16px",
  borderRadius: 24,
  background: colors.grey,
  minWidth: 30,
  textAlign: "center",
});
