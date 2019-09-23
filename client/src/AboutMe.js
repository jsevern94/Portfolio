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
                width: '45%',
                color: '#000000',
                padding: '1.5rem',
                backgroundColor: 'rgb(255,255,255)',
                borderRadius: '.5rem',
                marginTop: '30px',
                fontFamily: "'Vollkorn SC', serif"
            },
            jonah: {
                width: '90%',
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
                < div style={{ marginTop: '100px', fontSize: '30px' }
                }>
                </div>
                <h2 style={{width: '70%', textAlign: 'center', margin: '0 auto', marginBottom: '20px', fontFamily: "'Nunito', sans-serif", color: '#bbdefb'}}>Hi, I'm Jonah. If there were an entry for me in the dictionary, this is what you might find:</h2>
                <div style={styles.content}>
                    <div style={styles.box}>
                        <div style={styles.jonah}>
                        <p style={styles.p1}>jo·​nah ​sev·ern | /ˈʤoʊnə ˈsɛvərn/</p>
                        <div style={styles.definition}>
                            <p style={styles.p2}>proper noun:</p>
                            <p style={styles.brandStatement}>1. a Full Stack Web Developer who loves building structured and concise code.</p>
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