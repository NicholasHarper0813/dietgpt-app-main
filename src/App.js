import { FullScreenLoader } from "./components/FullScreenLoader";
import { useAuth } from "./contexts/auth";
import { ChatRoomScreen, SplashScreen } from "./screens";

function App() {
  const { user, isLoading: isSigningIn, signin, signout } = useAuth();

  return user ? (
    <ChatRoomScreen />
  ) : (
    <SplashScreen handleSignin={signin} isSigningIn={isSigningIn} />
  );
}

export default App;
