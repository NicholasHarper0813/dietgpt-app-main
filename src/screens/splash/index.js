import styled from "styled-components";
import { Hero } from "./Hero";
import { Logo } from "./Logo";
import { SigninButton } from "./SinginButton";
import { ScreenWrapper as Wrapper } from "../../components/ScreenWrapper";
import { FullScreenLoader } from "../../components/FullScreenLoader";

export function SplashScreen({ handleSignin, isSigningIn }) {
  return (
    <>
      <Wrapper>
        <SLogo />
        <Description>
          Your personal AI nutritionist to help you perform and feel your best
        </Description>
        <SHero />
        <SSigninButton onClick={handleSignin} />
      </Wrapper>
      {isSigningIn && <FullScreenLoader />}
    </>
  );
}

const SLogo = styled(Logo)({
  marginTop: 125,
  marginInline: "auto",
});

const SHero = styled(Hero)({
  marginTop: 11,
  marginInline: "auto",
});

const Description = styled.p({
  width: 210,
  marginTop: 35,
  marginInline: "auto",
  textAlign: "center",
});

const SSigninButton = styled(SigninButton)({
  marginTop: "auto",
  marginBottom: 42,
  marginInline: "auto",
});
