import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './account/create/Create';
import CreateFinsh from './account/create/CreateFinish';
import Header from './mainpage/components/Header';
import Main from './mainpage/components/Main';
import SearchBar from './global_component/SearchBar';
import Bookmark from './bookmark/BookMark';
import FindId from './find/FindId';


const App: React.FC = () => {
  return (
      <Router>
        <Header></Header>
        <Routes>

              <Route path="/" element={<Main/>} />
              <Route path="/create" element={<Create />} />
              <Route path="/create-finish" element={<CreateFinsh />} />"
              <Route path="/search" element={<SearchBar />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/findid" element={<FindId />} />
                <Route path="/mypage/notification" element={<Notification/>} />

          <Route path="/" element={<Main/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/create-finish" element={<CreateFinsh />} />"
          <Route path="/search" element={<SearchBar />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/login" element={<LoginModal />} />

        </Routes>
      </Router>
  );
};

export default App;


/*
import React from "react";
import LoginModal from "./account/login/LoginModal";

const App: React.FC = () => {
  return (
      <LoginModal></LoginModal>
  );
};

export default App;*/
