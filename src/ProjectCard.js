import React, { Component } from 'react';

class ProjectCard extends Component {
    render() {
        const styles = {
            card: {
                width: '20%'
            },
            content: {
                backgroundColor: 'white',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)',
                borderWidth: '2px',
                borderStyle: 'none',
                borderRadius: '.25rem',
                border: '0 solid #e2e8f0',
                display: 'block'
            },
            image: {
                maxWidth: '100%',
                height: 'auto'
            },
            text: {
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem'
            },
            title: {
                fontSize: '1.25rem',
                marginBottom: '.5rem',
                fontWeight: '700'
            },
            description: {
                fontSize: '1rem',
                color: '#4a5568'
            },
            link: {
                fontSize: '.875rem',
                color: '#4a5568',
                paddingLeft: '.75rem',
                paddingRight: '.75rem',
                paddingTop: '.25rem',
                paddingBottom: '.25rem',
                marginRight: '.5rem',
                fontWeight: 600,
                display: 'inline-block',
                borderRadius: '9999px',
                backgroundColor: '#edf2f7'
            }
        }
        return (
            <div style={styles.card} >

                <div style={styles.content}>
                    <img style={styles.image} src="assets/images/hello-world.PNG" alt="Hello World Homepage" />
                    <div style={styles.text}>
                        <div style={styles.title}>Hello World</div>
                        <p style={styles.description}>
                            For travelers who want to take a vacation but have no idea where they want to go. Tell us
                            your ideal temperature, vacation theme and month, and we'll give you suggestions.
                            </p>
                    </div>
                    <div style={styles.text}>
                        <span style={styles.link}><a href="https://jsevern94.github.io/Hello-World/" rel="noopener noreferrer" target="_blank">Visit the
                page</a></span>
                        <span style={styles.link}><a href="https://github.com/jsevern94/Hello-World" rel="noopener noreferrer" target="_blank">Check out the
                code</a></span>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProjectCard;