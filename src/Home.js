import React, { Component } from 'react';

class Home extends Component {
    render() {
    const styles = {
        all: {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '40px'
        },
        image: {
            height: '300px',
            borderRadius: '9999px'
        },
        brandStatement: {
            marginTop: 0,
            fontSize: '18px',
            width: '40%'
        }
    }
        return (
            <div>
                < div style={{ marginTop: '30px', fontSize: '30px' }
                }>
                    Home
                </div>
                <div style={styles.all}>
                    <img style={styles.image} src='/images/biopic.jpeg' alt='profile pic' />
                    <p style={styles.brandStatement}>Full stack Web Developer experienced in various roles ranging from coding to management to sales. Graduate from the University of Washington Coding Bootcamp, efficient in languages including Node.js, React/Redux, both SQL and NoSQL databases, several CSS frameworks and more. Skilled in building innovative apps that flow smoothly front to back with structured and concise code, and integrating exciting, robust user interfaces. Enjoys finding new solutions to classic problems and improving upon outdated systems.</p>
                </div>
            </div>
        )
    }
}

export default Home;