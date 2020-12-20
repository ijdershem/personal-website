import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Link} from "react-router-dom";

class NavBar extends React.Component {
    render() {
      return (
        <div id='nav-bar'>
            <table id='nav-options'>
                <tbody>
                    <tr>
                        <td><Link to='/'>Home</Link></td>
                        <td><Link to='/About'>About</Link></td>
                        <td><Link to='/Portfolio'>Portfolio</Link></td>
                        <td><Link to='/Blog'>Blog</Link></td>
                        <td><Link to='/Art'>Art</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
    }
  }

export default NavBar;