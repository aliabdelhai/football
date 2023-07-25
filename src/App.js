
import './App.css';
import './styles/navbar.css';
import React  from 'react';
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import DreamTeam from './components/DreamTeam';
import Actions from './components/Actions';
import Teams from './components/Teams.js';

function App() {

    const TeamsWrapper = () => {
    const { league } = useParams();  
    return <Teams league={league} />;

    };

  return (
    <div>
      
      <Navbar/>
      <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/dreamteam" element={<DreamTeam />} />
          
          <Route path="/:league/teams" element={<TeamsWrapper />} />

        </Routes>
      </BrowserRouter>
    </div>
        

  );


}

export default App;
