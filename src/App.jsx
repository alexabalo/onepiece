import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portada from "./Portada";
import Welcome from "./Welcome";






function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="welcome" element={<Welcome />} />
      
      </Routes>
      </Router>
      
    </>
  );
};

export default App
