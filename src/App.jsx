import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './contexts/auth/auth.context';
import { AuthenticatedRoutes } from './routes/authenticated';
import { NotAuthenticatedRoutes } from './routes/not-authenticated';
import "./App.css";

const App = () => {

  const { authState } = useContext(AuthContext);

  let Routes = NotAuthenticatedRoutes;

  switch(authState.isAuthenticated) {
    case true:
      Routes = AuthenticatedRoutes;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
