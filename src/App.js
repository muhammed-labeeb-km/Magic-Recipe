import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';
import Saved from './Pages/Saved';
import Upload from './Pages/Upload';
import Search from './Pages/Search';
import Eachitems from './components/Eachitems';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/explore" />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/item/:id" element={<Eachitems />} />
      </Routes>
    </div>
  );
}

export default App;
