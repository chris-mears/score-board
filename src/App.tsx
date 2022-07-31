import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ScoreBoard from './ScoreBoard';
import Controller from "./Controller";
import './App.css';

const App = () => {
return (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/score" element={<ScoreBoard />} />
        <Route path="/controller" element={<Controller />} />
        <Route path="/" element={
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/controller">Controller</Link>
              </li>
              <li>
                <Link to="/score">Score Board</Link>
              </li>
            </ul>
          </nav>
        </div>
        } />
      </Routes>
    </Router>
  </ChakraProvider>
);
}

export default App;
