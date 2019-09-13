import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class FeaturedApps extends Component {
    render() {
        return (
            <div>
                < div style={{ marginTop: '30px' }
                }>
                    Featured Apps
            </div >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}

export default FeaturedApps;