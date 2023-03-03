import './styles/App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Small from './components/Small';
import Normal from './components/Normal';
import Large from './components/Large';
import Play from './components/Play';
import Rules from './components/Rules';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Play' element={<Play />} />
        <Route path='/Rules' element={<Rules />} />
        <Route path='/Small' element={<Small />} />
        <Route path='/Normal' element={<Normal />} />
        <Route path='/Large' element={<Large />} />
        <Route path='/Profile' element={<Profile text={text} setText={setText} />} />
      </Routes>
      
    </div>
  );
}

export default App;
