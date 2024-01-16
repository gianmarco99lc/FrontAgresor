import React from "react";

export const authContextInitialValues = {
  authState: {
    isAuthenticated: false,
    userInfo: null,
  },
  setAuthentication: (action) => {}
}

export const AuthContext = React.createContext(authContextInitialValues);
