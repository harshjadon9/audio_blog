import logo from './logo.svg';
import './App.css';



import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './crc/screens/Landing';
import Login from './crc/screens/Login';
import Error404 from './crc/screens/404';
import Navbar from './crc/components/navbar';
import Footer from './crc/components/footer';
import Topnav from './crc/components/navoffer';
import Profile from './crc/screens/Profile';
import Pricing from './crc/screens/Pricing';

function App() {
  return (
    <Router>
                
      {/* <nav>
        <Link to={"/"}> HOme </Link>
        <Link to={"/login"}> HOme </Link>
        <Link to={"/404"}> HOme </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;