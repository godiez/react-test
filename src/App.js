import React from 'react';
import './App.css';
import './components/MainContent.css'
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { MainContent } from './components/MainContent';

const color = 'day';

function App() {
  return (
    <React.Fragment>
      <MainContent color={color}>
        <Projects 
          headerColor="h-red"
          invent="kiri"
        />
        <AboutMe 
          headerColor="h-green"
        />
      </MainContent>
    </React.Fragment>
  );
}

export default App;
