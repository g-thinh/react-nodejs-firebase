import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setLoadingUser(false);
        // ...
      } else {
        // User is signed out
        setUser(null);
        setLoadingUser(false);
        // ...
      }
    });

    return () => unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, loadingUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const user = useContext(AuthContext);

  return user;
};
