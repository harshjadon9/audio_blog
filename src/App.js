import logo from './logo.svg';
import './App.css';



import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './crc/screens/Landing';
import Login from './crc/screens/Login';
import Error404 from './crc/screens/404';
import Navbar from './crc/components/navbar';
import Footer from './crc/components/footer';
import Topnav from './crc/components/navoffer';


function App() {
  return (
    <Router>
                <Topnav classes={"lg:mb-4"} />
                <Navbar/>
      {/* <nav>
        <Link to={"/"}> HOme </Link>
        <Link to={"/login"}> HOme </Link>
        <Link to={"/404"}> HOme </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;