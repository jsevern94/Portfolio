import React, { Component } from 'react';
import './SkillCard.css';

class SkillCard extends Component {
    render() {
        return (
            <div className='gallery-cell skill-card'>
                <div className='skill-card-content'>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillCard;