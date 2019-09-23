import React, { Component } from 'react';

class SkillCard extends Component {
    render() {
        const styles = {
            card: {
                width: 'auto',
                margin: '2.5rem',
                textAlign: 'left'
            },
            content: {
                backgroundColor: 'white',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)',
                borderWidth: '2px',
                borderStyle: 'none',
                borderRadius: '.5rem',
                width: '280px',
                height: '280px',
                border: '0 solid #e2e8f0',
                display: 'inline-flex',
                verticalAlign: 'top',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
        return (
            <div style={styles.card} className="gallery-cell">
                <div style={styles.content}>
                    <div style={styles.image}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillCard;