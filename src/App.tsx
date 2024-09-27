import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './account/create/Create';
import CreateFinsh from './account/create/CreateFinish';
import Header from './mainpage/components/Header';
import Main from './mainpage/components/Main';
import SearchBar from './global_component/SearchBar';
import Like from './like/Like';
import FindId from './find/FindId';
import FindPW from './find/FindPW';
import LoginModal from './account/login/LoginModal';
import Account from './mypage/Account';
import ProfileEdit from './mypage/ProfileEdit';
import AddressBook from './mypage/AddressBook';
import Notification from './mypage/Notification';
import Board from './write/board/board';
import Post from './write/post/post';

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/create-finish" element={<CreateFinsh />} />"
        <Route path="/search" element={<SearchBar />} />
        <Route path="/like" element={<Like />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPW />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/mypage/loginInfo" element={<Account />} />
        <Route path="/mypage/profileEdit" element={<ProfileEdit />} />
        <Route path="/mypage/addressBook" element={<AddressBook />} />
        <Route path="/mypage/notification" element={<Notification />} />
        <Route path="/page/:pageNumber" element={<Board />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
