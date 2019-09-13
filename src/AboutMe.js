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
                color: 'white',
                fontSize: '1.15rem',
                padding: '1.5rem',
                opacity: '.75',
                backgroundColor: '#1a202c',
                borderRadius: '.5rem',
                marginTop: '30px'
            }
        }
        return (
            <div>
                < div style={{ marginTop: '30px', fontSize: '30px' }
                }>
                    Contact Me
                </div>
                <div style={styles.content}>
                    <div style={styles.box}>
                        <p>To date, I have worked in various industries from service, hospitality, and
                            tourism, to customer
                            support,
                            sales, and online marketing. I have background in html, css, and javascript (and related frameworks)
                            as
                            well
                            as several database management systems and other server side technologies. I frequently concoct
                            business
                            ideas and I am in the process of implementing many of them with the technological skills I have
                            under my
                            belt.
                    </p>

                        <br />

                        <p>
                            In my free time, I like to read, compose and play music, hike, and exercise. My interests range
                            from geography, culture, and science, to psychology, philosophy, and even spirituality. I'm very
                            social,
                            and
                            love to meet new people, especially when games or lively discussion are involved. I also enjoy
                            traveling
                            and
                            have spent several years living abroad. I have visited 16 countries in Europe and I plan to spend
                            some
                            time
                            in Asia and Oceania next.
                    </p>

                        <br />

                        <p>
                            To get in touch with me, find my contact details by clicking the "Contact" link or scrolling to the
                            bottom
                            of the page.
                    </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutMe;