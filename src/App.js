import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Global Style
import GlobalStyle from './GlobalStyle';
// Components
import Home from './components/Home';
import Login from './components/Login';

const App= () => {
  const [userState, setUserState] = useState(defaultState);
  return (
    <Router>
      <UserContext.Provider value={[userState, setUserState]}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
        <GlobalStyle />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
