import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import Form from './components/Form'
import { Routes, Route} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route  path='/form' element={<Form />} />
        <Route  element={<NotFound />} />
      </Routes>

    </div>


   
  );
}

export default App;
