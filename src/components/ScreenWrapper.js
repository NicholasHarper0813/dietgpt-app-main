import styled, { css } from "styled-components";
import { fadeInAnimation } from "../utils/animations";

export const ScreenWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingInline: 20,
  animation: css`
    ${fadeInAnimation} .5s
  `,
});
