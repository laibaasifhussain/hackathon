import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/Home";
import Donorscreen from "../pages/Donorscreen";
import Acceptorscreen from "../pages/Acceptorscreen";
import Bloodbank from "../pages/Bloodbank";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>       
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/Donorscreen' element={<Donorscreen/>}/>
        <Route path='/Acceptorscreen' element={<Acceptorscreen/>}/>
        <Route path='/BloodBank' element={<Bloodbank/>}/>
      </Routes>
    </Router>
  );
}