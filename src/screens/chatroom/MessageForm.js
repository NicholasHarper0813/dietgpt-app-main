import styled from "styled-components";
import { colors } from "../../values/colors";
import { FaArrowRight } from "react-icons/fa";
import { forwardRef } from "react";

export const MessageForm = forwardRef(({ onSubmit, show = true }, ref) => {
  const handleKeyDown = (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      onSubmit(ref.current.value);
    }
  };

  const handleClick = () => {
    onSubmit(ref.current.value);
  };

  return (
    <Wrapper show={show}>
      <SInput ref={ref} rows={2} onKeyDown={handleKeyDown} />
      <SButton onClick={handleClick}>
        <FaArrowRight color={colors.white} />
      </SButton>
    </Wrapper>
  );
});

const Wrapper = styled.div({
  display: (props) => (props.show ? "flex" : "none"),
  alignItems: "center",
  gap: 20,
  paddingBlock: 18,
});

const SInput = styled.textarea({
  border: `2px solid ${colors.lightBlue}`,
  padding: "12px 20px",
  outline: "none",
  backgroundColor: colors.darkGrey,
  borderRadius: 18,
  color: colors.white,
  fontSize: 14,
  lineHeight: 1.12,
  flexGrow: 1,
  resize: "none"
});

const SButton = styled.button({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 12,
  backgroundColor: colors.lighterBlue,
  border: "none",
  outline: "none",
  width: 32,
  height: 32,
});
