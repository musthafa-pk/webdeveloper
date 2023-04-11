
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Template from './Components/Template/Template';
import Topbar from './Components/Html1/Topbar/Topbar';
import { useState } from 'react';
import { FormContext, PageContext } from './Context/Context';
import Html1 from './Components/Html1/Html1';
import Hero from './Components/Html1/Hero/Hero';
import About from './Components/Html1/About/About';
import ContactUs from './Components/Html1/ContactUs/ContactUs';
import Templatelist from './Components/Templatelist/Templatelist';
import Html2 from './Components/Html2/Html2';
import Html3 from './Components/Html3/Html3';

function App() {
  const [data,setdata] = useState('');
  const [selectpage,setselectpage] = useState('');
  return (
    <div className="App">
      <PageContext.Provider value={{selectpage,setselectpage}}>
      <FormContext.Provider value={{data,setdata}}>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<Html1/>}></Route>
        <Route path='/studio' element={<Home/>}></Route>
        <Route path='/topbar' element={<Topbar/>}></Route>
        <Route path='/template1' element={<Html1/>}></Route>
        <Route path='/template2' element={<Html2/>}></Route>
        <Route path='/template3' element={<Html3/>}></Route>
        <Route path='/home' element={<Hero/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/templates' element={<Templatelist/>}></Route>
      </Routes>
      </BrowserRouter>
      </FormContext.Provider>
      </PageContext.Provider>
    </div>
  );
}

export default App;
