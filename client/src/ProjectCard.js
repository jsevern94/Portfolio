import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
    render() {
        return (
            <div className='card'>

                <div className='content'>
                    <img className='image' src={this.props.image} alt="Hello World Homepage" />
                    <div className='text'>
                        <div className='card-title'>{this.props.title}</div>
                        <p className='description'>{this.props.children}</p>
                    </div>
                    <div className='text'>
                        <span className='link'><a href={this.props.deployedLink} rel="noopener noreferrer" target="_blank">Visit the page</a></span>
                        <span className='link'><a href={this.props.code} rel="noopener noreferrer" target="_blank">Check out the code</a></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;