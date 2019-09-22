import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        const styles = {
            content: {
                width: '100vw',
                justifyContent: 'center',
                alignContent: 'center',
                display: 'flex',

            },
            box: {
                width: '57.5%',
                color: '#e3e3e3',
                padding: '1.5rem',
                opacity: '.75',
                backgroundColor: '#1a202c',
                borderRadius: '.5rem',
                marginTop: '30px'
            },
            jonah: {
                width: '75%',
                margin: '0 auto'
            },
            definition: {
                marginLeft: '40px'
            },
            brandStatement: {
                fontSize: '18px'
            },
            p1: {
                margin: '0px 15px',
                fontSize: '24px',
            },
            p2: {
                fontSize: '18px',
                strength: 'bold',
                margin: 0
            }
        }
        return (
            <div>
                < div style={{ marginTop: '30px', fontSize: '30px' }
                }>
                </div>
                <div style={styles.content}>
                    <div style={styles.box}>
                        <div style={styles.jonah}>
                        <p style={styles.p1}>jo·​nah ​se·vern | /ˈʤoʊnə ˈsɛvərn/</p>
                        <div style={styles.definition}>
                            <p style={styles.p2}>proper noun:</p>
                            <p style={styles.brandStatement}>1. a Full Stack Web Developer who specializes in UX/UI and loves structured and concise code.</p>
                            <p style={styles.brandStatement}>2. one who enjoys finding new solutions to classic problems and improving upon outdated systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutMe;