import React,{useState} from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Login from './../../components/Login/Login'
import Register from './../../components/Register/Register'
import Navbar from './../../elements/Navbar/Navbar'
import Sidebar from './../../elements/Sidebar/Sidebar'
import Dashboard from './../../components/Dashboard/Dashboard'
import Project from './../../components/Project/Project'
import Analysis from './../../components/Analysis/Analysis'
import Supplier from './../../components/Supplier/Supplier'
import PurchaseOrder from './../../components/PurchaseOrder/PurchaseOrder'
import GlobalStore from './../../components/GlobalStore/GLobalStore'
// import Theme from './../../Theme/Theme.js'

function App() {
	// const Mytheme = Theme();
	const theme = createMuiTheme({
		palette: {
			secondory: {
				light: '#33eb91',
				main: "#00e676",
				dark: '#00a152',
				contrastText: '#fff',

			},
			primary: {
				light: '#48525d',
				main: "#1B2735",
				dark: '#121b25',
				contrastText: '#fff',
				
			},
			text: {
				primary: '#000',
			},
			background: {
				paper: '#fff'
			}
		},
		Typography: {
			fontFamily: 'Railway',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route path="/">
							<Grid direction="row" container>
								<Grid item lg={2}sm={4} xs={0} className="sidebarContainer">
									<Sidebar />
								</Grid>
								<Grid item lg={10} sm={8} xs={12} className="rightsideContainer">
									<Grid item lg={12} className="navbarContainer">
										<Navbar />
									</Grid>
									<Grid item container className="pageContainer">
										<Route path="/dashboard" exact component={Dashboard} />
										<Route path="/projects" exact component={Project} />
										<Route path="/analysis" exact component={Analysis} />
										<Route path="/purchaseOrder" exact component={PurchaseOrder} />
										<Route path="/supplier" exact component={Supplier} />
										<Route path="/globalStore" exact component={GlobalStore} />
									</Grid>
								</Grid>
							</Grid>
						</Route>
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
