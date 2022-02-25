import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Container, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectList, setProjectList] = useState([]);
 
    useEffect(() => {
        axiosWithAuth()
        .get('/api/v2/projects')        
        .then(
            (result) => {
                setIsLoaded(false);
                setProjectList(result.data.data);
                console.log('projectList', projectList)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        // gonna wanna map through and pass to diff cards
        //make the cards into 
    }, []);

    if(error){
        return<div>Error {error.message}</div>
    } else if (!projectList[0]) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h1>Projectlist</h1>
                <Container>
                    <Row>
                        {projectList.map(project => {
                            return(
                                <ProjectCard 
                                kaye={project.id}
                                />
                            )
                        })

                        }
                    </Row>
                </Container>
                

            </div>
        )
    }

};

export default Projects;