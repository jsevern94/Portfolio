import React, { Component } from "react";
import './Sidenav.css'
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidenav extends Component {
    state = {
        start: true,
        hidden: true
    }
    handleClick = () => {
        this.setState({ hidden: !this.state.hidden, start: false })
    }
    render() {
        return (
            <div className='sidenav'>
                <div className="flip-card">
                    <div className={this.state.hidden ? "flip-card-inner" : "flip-card-inner is-flipped"} onClick={this.handleClick}>
                        <div className="flip-card-front">
                            <FontAwesomeIcon icon={faBars} size='2x' className="light-blue"/>
                        </div>
                        <div className="flip-card-back">
                            <FontAwesomeIcon icon={faTimes} size='2x' className="light-blue"/>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/jsevern94" rel="noopener noreferrer" target="_blank" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right2' : 'nav swing-in-right-fwd2'}>GitHub</a>
                <a href="https://www.linkedin.com/in/jonah-severn-12243aa5/" rel="noopener noreferrer" target="_blank" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right3' : 'nav swing-in-right-fwd3'}>LinkedIn</a>
                <a href="/images/resume.pdf" rel="noopener noreferrer" target="_blank" className={this.state.start ? 'nav hidden' : this.state.hidden ? 'nav slide-out-blurred-right4' : 'nav swing-in-right-fwd4'}>Resume</a>
            </div>
        )
    }
}

export default Sidenav;