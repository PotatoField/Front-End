import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './createpage/Create';
import CreateFinsh from './createpage/CreateFinish';
import Header from './mainpage/components/Header';
import Main from './mainpage/components/Main';
import SearchBar from './global_component/SearchBar';
import Bookmark from './bookmark/BookMark';

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
            </Routes>
        </Router>

    );
};

export default App;

