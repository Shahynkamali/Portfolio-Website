import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component{
	constructor(props){
		super(props);
		this.state ={
			activeTab: 0
		}
	}
	toggleCatagories(){
		if(this.state.activeTab === 0){
			return(
				<div className="cards">
				    <div className="card">
				    	<Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
				    		<CardText>
				    		<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://user-images.githubusercontent.com/3778229/27641589-3593e30e-5c14-11e7-96f6-e6a29b4c3f3c.png) center / cover' }}>
				    			Scoreboard 
				    		</CardTitle>
				    			Small web application made with React. The application is a small scoreboard.
				    		</CardText>
				    		<CardActions border>
				    			<Button colored><a href="https://github.com/Shahynkamali/scoreboard">GitHub</a></Button>
				    		</CardActions>
				    		<CardMenu style={{color: '#fff'}}>
				    			<IconButton name="share"/>
				    		</CardMenu>
				    	</Card>
				    </div>
				    <div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
						<CardText>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://cdn.cgmagonline.com/wp-content/uploads/2018/02/marvel-celebrates-10-years-with-epic-cast-photo-6-1280x720.jpg) center / cover' }}>
							Marvel Characters
						</CardTitle>
							Web application made with React and the Marvel API. Users can search Marvel characters and find information about them
						</CardText>
						<CardActions border>
							<Button colored><a href="https://github.com/Shahynkamali/react-marvel-app-tutorial">GitHub</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
				<div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
						<CardText>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JaweLrDoXIfEbVHzaIQyKPH01yeOsbeyV-w6NPEQfgG8yt8ggQ) center / cover' }}>
							Planets
						</CardTitle>
							Small web application made with React. One webpage containing information regarding different planets.					
						</CardText>
						<CardActions border>
							<Button colored> <a href="https://github.com/Shahynkamali/React-Planets-Project">GitHub</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
			</div>
				
				)
		} else if(this.state.activeTab === 1){
			return (
				<div className="cards">
				    <div className="card">
				    	<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
				    			Jquery Project #1
				    		</CardTitle>
				    		<CardText>
				    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
				    		</CardText>
				    		<CardActions border>
				    			<Button colored>GitHub</Button>
				    			<Button colored>CodePen</Button>
				    			<Button colored>Live Demo</Button>
				    		</CardActions>
				    		<CardMenu style={{color: '#fff'}}>
				    			<IconButton name="share"/>
				    		</CardMenu>
				    	</Card>
				    </div>
				    <div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
							Jquery Project #2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
				<div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
							Jquery Project #3
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
			</div>
				
				)
		} else if (this.state.activeTab === 2){
			return (
				<div className="cards">
				    <div className="card">
				    	<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
				    			CSS Project #1
				    		</CardTitle>
				    		<CardText>
				    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
				    		</CardText>
				    		<CardActions border>
				    			<Button colored>GitHub</Button>
				    			<Button colored>CodePen</Button>
				    			<Button colored>Live Demo</Button>
				    		</CardActions>
				    		<CardMenu style={{color: '#fff'}}>
				    			<IconButton name="share"/>
				    		</CardMenu>
				    	</Card>
				    </div>
				    <div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
							CSS Project #2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
				<div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
							CSS Project #3
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
			</div>
				
				)
		} else if (this.state.activeTab === 3){
			return (
				<div className="cards">
				    <div className="card">
				    	<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
				    			React Project #1
				    		</CardTitle>
				    		<CardText>
				    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
				    		</CardText>
				    		<CardActions border>
				    			<Button colored>GitHub</Button>
				    			<Button colored>CodePen</Button>
				    			<Button colored>Live Demo</Button>
				    		</CardActions>
				    		<CardMenu style={{color: '#fff'}}>
				    			<IconButton name="share"/>
				    		</CardMenu>
				    	</Card>
				    </div>
				    <div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
							React Project #2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
				<div className="card">
					<Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
							React Project #3
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
			</div>
				
				)
			}
		}
	


	render(){
		return(
			<div className="catergory-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
				<Tab>React</Tab>
				<Tab>Jquery</Tab>
				<Tab>HTML</Tab>
				<Tab>CSS</Tab>

				</Tabs>
				
					<Grid className="projects-grid">
						<Cell col={12}>
						<div className="content">{this.toggleCatagories()}</div>
						</Cell>
					</Grid>
	

			</div>	

			)
		}

	}


	export default Projects