import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Terms from './Pages/Terms';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import NavBar from './Components/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/terms' element={<Terms />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <div>aqui iria el footer</div>
    </BrowserRouter>
  );
}