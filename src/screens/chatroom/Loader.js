import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { colors } from "../../values/colors";

export function Loader({ className }) {
  return (
    <Wrapper className={className}>
      <ThreeDots
        height="20"
        width="50"
        radius="1"
        color={colors.lightGrey}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 72,
  height: 44,
  minHeight: 44,
  borderRadius: 24,
  backgroundColor: colors.grey,
});
