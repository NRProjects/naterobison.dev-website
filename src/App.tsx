import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Authentication from './components/Authentication';
import Register from './components/Register';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
