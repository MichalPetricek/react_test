import { useState, useEffect } from 'react';
import './App.css';
import Zidle from './components/Zidle';
import Stul from './components/Stul';

function App() {

  const [totalCount, setTotalCount] = useState(0);
 
    return (
      <>
      <div>
            <h1>U Poníka</h1>
            <p>celkem: {totalCount}</p>
        </div>
      <Stul totalCount={totalCount} setTotalCount={setTotalCount} cisloStolu="1"></Stul>
      <Stul totalCount={totalCount} setTotalCount={setTotalCount} cisloStolu="2"></Stul>
      <Stul totalCount={totalCount} setTotalCount={setTotalCount} cisloStolu="3"></Stul>
      <Stul totalCount={totalCount} setTotalCount={setTotalCount} cisloStolu="4"></Stul>
      
      </>
    );
 
}

export default App;
