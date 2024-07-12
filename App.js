import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './index.html/Home';
import About from './index.html/About';
import Navbar from './index.html/Navbar';
import Cart from './index.html/Cart';
import Skills from './index.html/Skills';
import Address from './index.html/Address';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Address" element={<Address/>}></Route>
<Route path="/skills" element={<Skills/>}></Route>

      </Routes>
    </div>  
  );
}

export default App;












