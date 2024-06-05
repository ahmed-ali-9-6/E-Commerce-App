/*eslint-disable*/
import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export const AuthContext = createContext(null);

function AuthContextProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        const userRef = doc(db, "users", uid);
        const unsubscribeSnapshot = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            const newUser = { wishlist: [], cart: [] };
            setDoc(userRef, newUser).then(() => {
              setUserData(newUser);
            });
          }
        });

        setUser(user);

        return () => {
          unsubscribeSnapshot();
        };
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
