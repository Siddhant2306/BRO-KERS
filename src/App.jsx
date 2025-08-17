import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SignInButton, ModeChanger} from './components/sign.jsx';
import './components/NavBar.jsx'
import DrawHomeNavBar from './components/NavBar.jsx';

function App() {
  return (
    <div>
      <DrawHomeNavBar/>
      <SignInButton />
      <ModeChanger />
    </div>
  );
}

export default App;