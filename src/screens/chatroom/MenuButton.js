import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../values/colors";

export function MenuButton({ onClick, className }) {
  return (
    <SButton onClick={onClick} className={className}>
      <FaBars color={colors.white} size={20} />;
    </SButton>
  );
}

const SButton = styled.button({
  background: "none",
  border: "none",
});
