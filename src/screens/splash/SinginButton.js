import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { colors } from "../../values/colors";

export function SigninButton({ onClick, className }) {
  return (
    <SButton onClick={onClick} className={className}>
      <SFaApple size={20} color={colors.white} />
      Sign in with Apple
    </SButton>
  );
}

const SButton = styled.button({
  display: "flex",
  width: "100%",
  maxWidth: 320,
  padding: 15,
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
  background: colors.black,
  color: colors.white,
  borderRadius: 99999,
  border: "none",
  fontSize: 18,
});

const SFaApple = styled(FaApple)({
  marginTop: -5,
});
