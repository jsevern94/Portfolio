import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

class OtherProjects extends Component {
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
                    Other Projects
                </div >
                <div style={styles.cards}>
                    <ProjectCard title='Mongo Web Scraper' image='/images/mongo-scraper.PNG' deployedLink='https://calm-beach-78845.herokuapp.com/' code='https://github.com/jsevern94/news-forum'>Scrape articles from the Wall Street Journal and comment on them to join in a discussion with other users.</ProjectCard>
                    <ProjectCard title='Destino Records' image='/images/destino-records.PNG' deployedLink='https://jsevern94.github.io/Destino-Records/' code='https://github.com/jsevern94/Destino-Records'>Though incomplete, this webpage gives an insight into my front-end style. The completed product will showcase the musical talent of the boys at Destino Records.</ProjectCard>
                    <ProjectCard title='Clicky Game' image='/images/clicky-game.PNG' deployedLink='https://jsevern94.github.io/clicky-game/' code='https://github.com/jsevern94/clicky-game'>A simple memory game. Click on each user once and once only. If you click them all without making a mistake, you win! Keep playing to go for the high score.</ProjectCard>
                </div>
            </div>
        )
    }
}

export default OtherProjects;