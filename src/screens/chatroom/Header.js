import styled from "styled-components";
import Avatar1Image from "../../assets/images/avatar1.png";
import Avatar2Image from "../../assets/images/avatar2.png";
import { MenuButton } from "./MenuButton";

export function Header({ className }) {
  const handleMenuButtonClick = () => {};

  return (
    <Wrapper className={className}>
      <Avatar src={Avatar1Image} />
      <MenuButton onClick={handleMenuButtonClick} />
      <Avatar2 src={Avatar2Image} />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: "flex",
  paddingBlock: 12,
  gap: 4,
});

const Avatar = styled.div({
  width: 40,
  height: 40,
  backgroundImage: (props) => `url(${props.src})`,
  backgroundSize: "100% 100%",
});

const Avatar2 = styled(Avatar)({
  marginLeft: "auto",
});
