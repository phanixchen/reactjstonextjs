import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Index() {
 return (
    <div>
      <div className="App">
        <h1>ReactJS Example Site</h1>
      </div>
      {typeof window !== 'undefined' && (
        <Router>
          <div className="App2">
            <header className="App-header">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                
              </Routes>
            </header>
          </div>
        </Router>
      )}
    </div>
 );
}

export default Index;
