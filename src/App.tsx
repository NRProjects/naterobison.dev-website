import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';
import Services from './components/Services';

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
      <MarginWrapper>
      <Routes>
        <Route path='/' element={
          <>
            <NavBar />
            <FrontPage />
          </>
        } />
        <Route path='/services' element={<Services />}/>
      </Routes>
      </MarginWrapper>
    </Router>
  )
}

export default App