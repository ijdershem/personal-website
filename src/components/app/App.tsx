import React from 'react';
import './App.css';
import NavBar from '../nav_bar/NavBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Art from '../pages/art/Art';
import Portfolio from '../pages/portfolio/Portfolio';
import Blog from '../pages/blog/Blog';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header className='app-header'>
            Ian Dershem
            <NavBar/>
          </header>
          {/* Route links accessible in NavBar.tsx */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Art" component={Art} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
