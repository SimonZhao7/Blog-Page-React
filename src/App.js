import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// Global Style
import GlobalStyle from './GlobalStyle';
// Context
import { AppProvider } from './context';
// Components
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Main />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
};

export default App;
