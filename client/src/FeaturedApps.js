import React, { Component } from 'react';
import './FeaturedApps.css';
import ProjectCard from './ProjectCard';

class FeaturedApps extends Component {
    render() {
        return (
            <div className="featured-apps-content">
                <h3 className="title2">
                    Here are a few of the apps I've worked on.
                </h3>
                <div className='cards'>
                    <ProjectCard title='J-CARD Brewing Solutions' image='/images/J-card.PNG' deployedLink='https://shielded-retreat-69523.herokuapp.com/inventory' code='https://github.com/jsevern94/CRM'>A CRM designed to allow breweries to easily handle data with utility and user-friendliness as the primary goals. Test it out with UserID: 5000 and Password: TestMe.</ProjectCard>
                    <ProjectCard title='Hello World' image='/images/hello-world.PNG' deployedLink='https://jsevern94.github.io/Hello-World/' code='https://github.com/jsevern94/Hello-World'>For travelers who want to take a vacation but have no idea where they want to go. Tell us your ideal temperature, vacation theme and month, and we'll give you suggestions.</ProjectCard>
                    <ProjectCard title='Mongo Web Scraper' image='/images/mongo-scraper.PNG' deployedLink='https://calm-beach-78845.herokuapp.com/' code='https://github.com/jsevern94/news-forum'>Scrape articles from the Wall Street Journal and comment on them to join in a discussion with other users.</ProjectCard>
                </div>
            </div>
        )
    }
}

export default FeaturedApps;