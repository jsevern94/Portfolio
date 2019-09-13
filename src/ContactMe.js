import React, { Component } from 'react';

class ContactMe extends Component {
    render() {
        const styles = {
            content: {
                width: '100vw',
                justifyContent: 'center',
                alignContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '5rem'

            },
            line: {
                color: 'white',
                fontSize: '1.75rem',
                marginTop: '2rem',
                marginBottom: '2rem'
            },
            link: {
                color: '#a3bffa',
                textDecoration: 'underline'
            }
        }
        return (
            <div>
                < div style={{ marginTop: '30px', fontSize: '30px' }
                }>
                    Contact Me
                </div>
                <div style={styles.content}>
                   <div style={styles.line}>Phone: 360.643.0442</div>
                   <div style={styles.line}>Email: contact@jonahsevern.com</div>
                   <div style={styles.line}>LinkedIn: <a href="https://www.linkedin.com/in/jonah-severn-12243aa5/" rel="noopener noreferrer" target="_blank" style={styles.link}>Jonah Severn</a></div>
                   <div style={styles.line}>Github: <a href="https://github.com/jsevern94" rel="noopener noreferrer" target="_blank" style={styles.link}>jsevern94</a></div>
         
                </div>

            </div>
        )
    }
}

export default ContactMe;