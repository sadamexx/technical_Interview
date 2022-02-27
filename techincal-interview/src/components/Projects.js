import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Container, Nav, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';
import ProjectShow from './ProjectShow';
import NavBar from './NavBar'

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
    }, []);

    if(error){
        return<div>Error {error.message}</div>
    } else if (!projectList[0]) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <NavBar />
                <div>
                <h1>Your Project List</h1>
                </div>
                <Container>
                    <Row>
                        {projectList.map(project => {
                            return(
                                <ProjectCard 
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                client={project.client_name}
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