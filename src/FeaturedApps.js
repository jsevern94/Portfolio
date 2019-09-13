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
                    <ProjectCard title='Brew Net' image='/images/brew-net.PNG' deployedLink='https://shielded-retreat-69523.herokuapp.com/inventory' code='https://github.com/jsevern94/CRM'>A CRM designed for breweries in an effort to make the task of handling data easier. Utility and user-friendliness are the primary goals here, so expect regular updates and improvements.</ProjectCard>
                    <ProjectCard title='Hello World' image='/images/hello-world.PNG' deployedLink='https://jsevern94.github.io/Hello-World/' code='https://github.com/jsevern94/Hello-World'>For travelers who want to take a vacation but have no idea where they want to go. Tell us your ideal temperature, vacation theme and month, and we'll give you suggestions.</ProjectCard>
                    <ProjectCard title='Friend Finder' image='/images/friend-finder.PNG' deployedLink='https://morning-reef-26851.herokuapp.com/' code='https://github.com/jsevern94/FriendFinder'>If you're lonely and need a friend, answer 10 questions and we'll match you with the person most like you from our database.</ProjectCard>
                </div>
            </div>
        )
    }
}

export default FeaturedApps;