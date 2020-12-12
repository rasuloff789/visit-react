import { render } from 'react-dom';
import './App.css';
import RenderFilterVisit from './components/FilterVisit/filtervisit' ; 
import RenderFindVisit from './components/FindVisit/findvisit' ;
import React from 'react';

function App() {
  return (
    <>
    <RenderFilterVisit/>
    <RenderFindVisit/>
    </>
    );
  }
  
  export default App;
  