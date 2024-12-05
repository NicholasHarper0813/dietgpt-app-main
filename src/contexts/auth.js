import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signin = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({ name: "Elton" });
      setIsLoading(false);
    }, 2000);
  }, []);

  const signout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isLoading, signin, signout }),
    [user, isLoading, signin, signout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}

export { AuthProvider, useAuth };
