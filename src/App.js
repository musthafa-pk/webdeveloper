
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
// import Template from './Components/Template/Template';
import Topbar from './Components/Html1/Topbar/Topbar';
import { useState } from 'react';
import { FormContext } from './Context/Context';
import Html1 from './Components/Html1/Html1';

function App() {
  const [data,setdata] = useState('');
  return (
    <div className="App">
      <FormContext.Provider value={{data,setdata}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/topbar' element={<Topbar/>}></Route>
        <Route path='/template1' element={<Html1/>}></Route>
      </Routes>
      </BrowserRouter>
      </FormContext.Provider>
      
    </div>
  );
}

export default App;
