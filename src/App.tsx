import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';


import { useRouter } from 'next/router';

function Navigation() {
 const router = useRouter();

 return (
    <nav>
      <button onClick={() => router.push('/home')}>Home</button>
      <button onClick={() => router.push('/about')}>About</button>
    </nav>
 );
}

function App() {
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
    setIsClient(true);
 }, []);

 return (
    <div>
      <div className="App">
        <h1>ReactJS Example Site</h1>
      </div>
    </div>
 );
}

export default App;
