import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Food from './pages/Food';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/food' element={<Food />} />
    </Routes>
  )
}

export default App
