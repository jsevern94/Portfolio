import React, { Component } from "react";
import './Sidenav.css'

class Sidenav extends Component {
    render() {
        const styles = {
            sidenav: {
                display: 'flex',
                flexWrap: 'wrap',
                zIndex: 20,
                width: '240px',
                fontSize: '1.5rem',
                position: 'fixed',
                top: 0,
                right: 0,
                paddingTop: '.75rem',
                marginTop: '2rem',
                marginRight: '1rem',
                height: '85vh',
                alignContent: 'space-between',
                justifyContent: 'flex-end'
            }
        }
        return (
            <div style={styles.sidenav}>
                    <a href="#home" className='nav' style={styles.nav}>Home</a>
                    <a href="#featured-apps" className='nav' style={styles.nav}>Featured Apps</a>
                    <a href="#about-me" className='nav' style={styles.nav}>About Me</a>
                    <a href="#other-projects" className='nav' style={styles.nav}>Other Projects</a>
                    <a href="#contact-me" className='nav' style={styles.nav}>Contact Me</a>
            </div>
        )
    }
}

export default Sidenav;