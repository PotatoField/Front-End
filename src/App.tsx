import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './createpage/Create';
import CreateFinsh from './createpage/CreateFinish';
import Header from './mainpage/components/Header';
const App: React.FC = () => {
  return (
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/create-finish" element={<CreateFinsh />} />
        </Routes>
      </Router>
  );
};

export default App;

