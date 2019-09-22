import React, { Component } from "react";
import './Sidenav.css'
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidenav extends Component {
    state = {
        start: true,
        hidden: true,
        svgColor: { color: 'black' }
    }
    handleClick = () => {
        this.setState({ hidden: !this.state.hidden, start: false })
    }
    grow = () => {
        this.setState({ svgColor: { color: 'red' } })
    }
    shrink = () => {
        this.setState({ svgColor: { color: 'black' } })
    }
    render() {
        const styles = {
            sidenav: {
                display: 'flex',
                flexWrap: 'wrap',
                zIndex: 20,
                width: '200px',
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
                <div className="flip-card">
                    <div className={this.state.hidden ? "flip-card-inner" : "flip-card-inner is-flipped"} onClick={this.handleClick}>
                        <div className="flip-card-front">
                            <FontAwesomeIcon icon={faBars} size='2x' style={this.state.svgColor} />
                        </div>
                        <div className="flip-card-back">
                            <FontAwesomeIcon icon={faTimes} size='2x' style={this.state.svgColor} />
                        </div>
                    </div>
                </div>
                <p style={styles.nav}></p>
                <a href="#about-me" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right2' : 'nav swing-in-right-fwd2'}>About Me</a>
                <a href="#featured-apps" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right3' : 'nav swing-in-right-fwd3'}>Featured Apps</a>
                <a href="#skills" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right4' : 'nav swing-in-right-fwd4'}>Skills</a>
                <a href="#contact-me" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right5' : 'nav swing-in-right-fwd5'}>Contact Me</a>
            </div>
        )
    }
}

export default Sidenav;