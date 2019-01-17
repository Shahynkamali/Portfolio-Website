import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Shahyn Kamali</h2>
						<img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
						 alt="avatar"
						 style={{height:'250px'}} />
						<p
						style={{width:'75%', margin:'auto', paddingTop:'1em'}}
						>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quos necessitatibus, explicabo ipsum laboriosam ab corporis numquam suscipit est qui at nemo iste hic, possimus tempora neque aspernatur doloribus.</p>


					</Cell>
					<Cell col={6}>
						<h2>Contact Me!</h2>
						<hr/>
						<div className="contact-list">
						<List>
							  <ListItem>
							    <ListItemContent 
							    style={{fontSize: '25px', fontFamily:'Questrial'}} >
							    <i className="fa fa-phone-square" aria-hidden="true"/>
							    (+1 416) 577 9159
							    </ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent 
							    style={{fontSize: '25px', fontFamily:'Questrial'}} >
							    <i className="fa fa-phone-square" aria-hidden="true"/>
							    kamalishahyn@gmail.com
							    </ListItemContent>
							  </ListItem>
							</List>
						</div>			
					</Cell>
				</Grid>
			</div>
	

			)
		}

	}


	export default Contact