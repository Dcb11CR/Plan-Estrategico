
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   // Si deseas usar un CSS global

import Home from './components/Home';
import Intro from './components/Intro';
import Foda from './components/Foda';
import Smart from './components/Smart';
import Estrategias from './components/Estrategias';
import Recursos from './components/Recursos';
import Conclusiones from './components/Conclusiones';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Foda" element={<Foda />} />
          <Route path="/Smart" element={<Smart />} />
          <Route path="/Estrategias" element={<Estrategias />} />
          <Route path="/Recursos" element={<Recursos />} />
          <Route path="/Conclusiones" element={<Conclusiones />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
