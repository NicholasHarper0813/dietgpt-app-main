import { ThreeDots } from "react-loader-spinner";
import styled, { css } from "styled-components";
import { fadeInAnimation } from "../utils/animations";
import { colors } from "../values/colors";

export function FullScreenLoader() {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={colors.grey}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `${colors.white}BB`,
  zIndex: 10,
  animation: css`
    ${fadeInAnimation} .3s
  `,
});
