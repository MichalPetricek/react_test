import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const user = "Michal";
  const surename  = "Petricek";
  const [theme, setTheme] = useState(true); 
  const changeTheme = async () => {
    setTheme(!theme);
    console.log("currentTheme", theme);

  };

  if(theme === true)
  {
    return (
      <>
      <Navbar user={user} prijmeni={surename} tema={theme} metoda={changeTheme} ></Navbar>
      <div className={theme}>Dark</div>
      </>
    );
  }
  else
  {
    return (
      <>
      <Navbar user={user} prijmeni={surename} tema={theme} metoda={changeTheme} ></Navbar>
      <div className={theme}>Light</div>
      </>
    );
  }
}

export default App;
