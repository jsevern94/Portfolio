import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class FeaturedApps extends Component {
    render() {
        const styles = {
            cards: {
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '30px',
            }
        }
        return (
            <div>
                < div style={{ marginTop: '30px', fontSize: '30px' }
                }>
                    Featured Apps
                </div >
                <div style={styles.cards}>
                    <ProjectCard image='/images/hello-world.PNG' deployedLink='https://jsevern94.github.io/Hello-World/' code='https://github.com/jsevern94/Hello-World'>For travelers who want to take a vacation but have no idea where they want to go. Tell us your ideal temperature, vacation theme and month, and we'll give you suggestions.</ProjectCard>
                    <ProjectCard image='/images/chatmosphere.PNG' deployedLink='https://polar-spire-67758.herokuapp.com/' code='https://github.com/jsevern94/Chatmosphere'>Chat with friends on a platform that isn't being monitored by billionaires or corporations. Random chat feature coming soon!</ProjectCard>
                    <ProjectCard image='/images/destino-records.PNG' deployedLink='https://jsevern94.github.io/Destino-Records/' code='https://github.com/jsevern94/Destino-Records'>Though incomplete, this webpage gives an insight into my front-end style. The completed product will showcase the musical talent of the boys at Destino Records.</ProjectCard>
                </div>
            </div>
        )
    }
}

export default FeaturedApps;