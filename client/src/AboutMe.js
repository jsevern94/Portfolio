import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div>
                < div className='all'>
                </div>
                <h2 className='title'>Hi, I'm Jonah. If there were an entry for me in the dictionary, this is what you might find:</h2>
                <div className='paragraph'>
                    <div className='box'>
                        <div className='jonah'>
                            <p className='p1'>jo·​nah ​sev·ern | /ˈʤoʊnə ˈsɛvərn/</p>
                            <div className='definition'>
                                <p className='p2'>proper noun:</p>
                                <p className='brand-statement'>1. a Full Stack Web Developer who loves building structured and concise code.</p>
                                <p className='brand-statement'>2. one who enjoys finding new solutions to classic problems and improving upon outdated systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutMe;