import React from 'react';
import './About.css'

class About extends React.Component {
  render() {
    return (
      <div id='about-container'>
          <header>
            <h3>Summary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Congue eu 
               consequat ac felis donec et odio. Viverra orci sagittis eu volutpat odio facilisis mauris.
               Faucibus purus in massa tempor nec. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
          </header>
          <div id='about-content'>
            <div>
              <h3>Education</h3>
              <span>
                University of North Carolina at Chapel Hill <br>
                </br> August 2017 - December 2020 <br>
                </br> B.S. Computer Science 
              </span>
            </div>
            <div>
              <h3>Work Experience</h3>
            </div>
            <div>
              <h3>Research</h3>
            </div>
            <div>
              <h3>Volunteer Experience</h3>
            </div>
          </div>
      </div>

    );
  }
}
  
  export default About;