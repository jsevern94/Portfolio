import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class FeaturedApps extends Component {
    render() {
        const styles = {
            cards: {
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap'
            }
        }
        return (
            <div>
                < div style={{ marginTop: '30px' }
                }>
                    Featured Apps
                </div >
                <div style={styles.cards}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        )
    }
}

export default FeaturedApps;