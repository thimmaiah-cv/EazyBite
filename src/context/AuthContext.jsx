import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { get, ref } from "firebase/database";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [role, setRole] = useState(null);
  const [restaurantID, setRestaurantID] = useState(null);
  const navigate = useNavigate(); // Hook to change pages

  useEffect(() => {
    // Subscribe to firebase changes
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        // load role from Realtime DB: /admins/{uid}
        try {
          const adminSnap = await get(ref(db, `admins/${u.uid}`));
          if (adminSnap.exists()) {
            const data = adminSnap.val();
            setRole(data.role || null);
            setRestaurantID(data.restaurantID || null);
          }else{
            setRole(null);
            setRestaurantID(null);
          }
        }catch (err){
          console.error("Failed loading admin role:", err);
          setRole(null);
          setRestaurantID(null);
        }
      }else{
        setRole(null);
        setRestaurantID(null);
      }
      setInitializing(false);
    });
    // Cleanup function: stop listening when component unmounts
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    // returns firebase userCredential or throws
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setRole(null);
    setRestaurantID(null);
    navigate("/admin"); // go back to login
  };

  const value = {
    user,
    initializing,
    login,
    logout,
    role,
    restaurantID,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
