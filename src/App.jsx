import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Prediction_Page from './components/Prediction';
import Home_Page from './components/Home';
import Buy_Page from './components/Buy_page';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/new" element={<New />} /> */}
        <Route path="/" element={<Home_Page />} />
        <Route path="/prediction" element={<Prediction_Page />} />
        <Route path="/buy" element={<Buy_Page />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      {/* <div className="hi">HI</div> */}
    </>
  );
}

export default App;