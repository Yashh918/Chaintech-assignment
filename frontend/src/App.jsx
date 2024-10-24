import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import Account from './components/Account'
import Home from './components/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
