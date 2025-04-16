import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import AdminLogin from './components/AdminLogin';

import {MovieContext} from './context/MovieContext';

function App() {
  return (
    <MovieContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </Router>
    </MovieContext>
  );
}

export default App;
