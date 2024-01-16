import { useState } from "react";
import { AuthContext, authContextInitialValues } from "./auth.context"

export const AuthProvider = (props) => {

  const [ authState, setAuthState ] = useState(authContextInitialValues.authState);

  const setAuthentication = (action) => {

    if (action.type === "authenticate") {
      setAuthState({
        isAuthenticated: true,
        userInfo: action.payload
      });
      
      return;
    }

    if (action.type === "unauthenticate") {
      setAuthState({
        isAuthenticated: false,
        userInfo: null
      });
      return;
    }
  };

  return (
    <AuthContext.Provider value={{authState, setAuthentication}}>
      {props.children}
    </AuthContext.Provider>
  );
}
