import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import EditNotes from './components.js/EditNotes';
import DetailNote from './components.js/DetailNote';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className='nav-link active' to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link active' to="/about">About</Link>
                  </li>
                </ul>
                <div>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<EditNotes />} />
            <Route path="/detail/:id" element={<DetailNote />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}



function About() {
  return <h2>My website: <a href="https://mikailaydogdu.pythonanywhere.com/" rel='noreferrer' >mikail aydogdu </a></h2>;
}


export default App;
