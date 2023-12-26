import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import ComDashboard from './Pages/ComDashboard/ComDashboard'
import StdDashboard from './Pages/StdDashboard/StdDashboard'

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} /> 
            <Route path="/SignUpPage" element={<SignUpPage />} /> 
            <Route path="/Login" element={<Login />} /> 
            <Route path="/ComDashboard" element={<ComDashboard />} /> 
            <Route path="/StdDashboard" element={<StdDashboard />} /> 
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
