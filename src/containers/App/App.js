import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './App.css';
import Login from './../../components/Login/Login'
import Register from './../../components/Register/Register'
import Dashboard from './../../components/Dashboard/Dashboard'
import './../../Theme/Theme.js'

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
			secondory: {
				light: '#7acb8b',
				main: "#59BF6E",
				dark: '#3e854d',
				contrastText: '#fff',
	
				// light: '#62c2ab',
				// main: "#3bb397",
				// dark: '#297d69',
				// contrastText: '#fff',
	
				// light: '#34c5b0',
				// main: "#02b79d",
				// dark: '#01806d',
				// contrastText: '#fff',
			},
			primary: {
				light: '#30326b',
				main: '#5850EC',
				dark: '#6a6cae',
				contrastText: '#000',
			},
	
			text: {
				primary: '#000',
			},
	
			Warning: {
				light: '#ffb74d',
				main: '#ff9800',
				dark: '#f57c00',
				contrastText: '#000',
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
						<Route path="/dashboard" exact component={Dashboard} />
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
