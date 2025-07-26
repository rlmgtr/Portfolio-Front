import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Pages/Home'; 
import Services from './Pages/Services'; 
import Projects from './Pages/Projects'; 

function App() {
  return (
    <Router>
      <div>
        <header>
          header here
          <nav>
            <ul>
           <li><NavLink to="/">Home</NavLink></li> 
           <li><NavLink to="/Services">Services</NavLink></li> 
           <li><NavLink to="/Projects">Projects</NavLink></li> 
            </ul>
          </nav>
        </header>

        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>

        <footer>
          <div className='footerPart'>
          Footer here
          </div>
        </footer>

       
      </div>
    </Router>
  );
}

export default App;
