import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Food from './pages/Food';
import Drink from './pages/Drink';
import Form from './components/Form';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/food' element={<Food />} />
      <Route path='/drink' element={<Drink />} />
      <Route path='/Form' element={<Form />} />
    </Routes>
  )
}

export default App
