import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Authentication from './components/Authentication';
import Register from './components/Register';
import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';

const MarginWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ marginTop: '150px' }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <Router>
      <NavBar/>
      <MarginWrapper>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/test' element={<Authentication />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </MarginWrapper>
    </Router>
  )
}

export default App