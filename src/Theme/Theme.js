import React from 'react'
import { createMuiTheme} from '@material-ui/core/styles';

function Theme() {
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
    return {
        theme
    }
}

export default Theme