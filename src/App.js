import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Contactus from './components/pages/Contactus';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import About from './components/pages/About'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Contact' element={<Contactus />} />
      <Route path='/About' element={<About />} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
