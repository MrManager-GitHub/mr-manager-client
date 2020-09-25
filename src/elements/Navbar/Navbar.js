import React, { Component} from 'react'
import { Grid,Link } from '@material-ui/core'

import styles from './Navbar.module.css'
import AccountMenu from './../Menu/AccountMenu'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            navLinkOpen: false
        }
    }
    
    hamburgerClickHandler = () => {
        this.setState(prevState => ({
            navLinkOpen: !prevState.navLinkOpen
        }));
    }

    render() {
        return (
            <nav className={styles.nav}>
                <Grid container direction="row" alignItems="center" className={styles.navcontainer}>
                    <Grid item lg={11} />
                    <Grid item lg={1}>
                        <AccountMenu />
                    </Grid>
                </Grid>
            </nav>
        )
    }
}

export default Navbar

