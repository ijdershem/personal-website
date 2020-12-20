import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom"; 
import './Home.css';

class Home extends React.Component {
    render() {
      return (
        <div id='home-container'>
            <header>Welcome to my Personal Website!</header>
            <div>
              <ul>
                <li>To learn about my experience and qualifications, check out the
                  <Link to='/About'> About</Link> page.
                </li>
                <li>For information on some of the projects I have worked on, visit the
                  <Link to='/Portfolio'> Portfolio</Link> page.
                </li>
                <li>To check out some of my art, visit the
                  <Link to='/Art'> Art</Link> page.
                </li>
              </ul>
            </div>
        </div>
  
      );
    }
  }
  
  export default Home;