import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes,
  Link
} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Blog from './pages/Blog'
import Header from './components/public/Header';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';
function App() {
  return (
    <Router>

      <div className = "App">
        <Header/>
        <nav>
          <ul>
            <li> 
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "/PageNotFound">PageNotFound</Link>
            </li>
            <li>
             <Link to="/blog/aprende-react-router">Aprende</Link>
            </li>
            
          </ul>
        </nav>

      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/about" element = {<About/>} />
        <Route exact path = "/blog/:slug" element={<Blog/>} />
        <Route exact path = "/details/:id" element = {<Detail/>} />
        <Route exact path = "/user-form" element = {<UserForm />} />

        <Route exact path="/PageNotFound" element={<PageNotFound/>} />
      </Routes>

      <Main/>

      <Footer/>

     


      </div>
    </Router>
  );
}
export default App;