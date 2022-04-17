import logo from './logo.svg';
import './App.css';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './crc/screens/Landing';
import Login from './crc/screens/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </Router>
  );
}

export default App;