import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from '../Image/fullsizeoutput_8.jpeg';

class LandingPage extends Component{
	render(){
		return(

			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
					<img
					src={Image}
					alt="avatar"
					className="avatar-img"
					/>
					<div className="banner-text">
						<h1>Front End Web Developer</h1>
						<hr/>
						<p> HTML | CSS | SCSS/SASS | JAVASCRIPT | JQUERY | REACT | FIREBASE | GIT </p>
					</div>
					   <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
					


					</Cell>
				</Grid>
			</div>
	

			)
		}

	}


	export default LandingPage;