import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from './pages/Home';
import Singin from './pages/Singin';
import Singup from './pages/Singup'; 
function App() {
  return (
    <div >
     <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/Singin" element={<Singin/>}/>
            <Route path="/Singup" element={<Singup/>}/>



      </Routes>
    </div>
  );
}

export default App;
