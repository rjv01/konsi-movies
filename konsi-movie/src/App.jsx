import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

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
        </Routes>
        <Footer />
      </Router>
    </MovieContext>
  );
}

export default App;
