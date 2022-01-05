import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Global Style
import GlobalStyle from './GlobalStyle';
// Components
import Home from './components/Home';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
