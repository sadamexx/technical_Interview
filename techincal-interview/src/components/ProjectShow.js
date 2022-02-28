import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import Scopes from './Scopes';
import NavBar from './NavBar';
import CardRole from './CardRole';



const ProjectShow = (props) => {
    console.log('props Project Show', props)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectShow, setProjectShow] = useState([]);
    

    useEffect(() => {
        axiosWithAuth()                
        // .get(`/api/v2/projects/$parseInt({props.data.data.id})`)
    .get('/api/v2/projects/128674040943611904')
        .then(
            (result) => {
                setIsLoaded(false);
                setProjectShow(result);
                console.log('projectShow', projectShow)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if(error){
        return<div>Error {error.message}</div>
    } else if (!projectShow.data) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <h1>ProjectShow</h1>
                    <Card>
                        <CardBody>
                            <CardTitle>Project Type: {projectShow.data.data.name}</CardTitle>
                            <CardSubtitle>Client: {projectShow.data.data.client.name}</CardSubtitle>
                            <CardSubtitle>Price Total: ${projectShow.data.data.summary.total_billable} </CardSubtitle>
                            {
                                projectShow.data.data.roles.map(role => {
                                    return(
                                        <CardRole
                                        key={role.id}
                                        name={role.name}
                                        description={role.description}
                                        />
                                    )
                                }
                                )
                            }
                          
                            
                            <h4>Scopes is an array map over this {projectShow.data.data.scopes[0].categories[0]}</h4>
                            <h4>Scopes id{projectShow.data.data.scopes.id}</h4>
                            
                        </CardBody>
                    </Card>
                <div>
                    <Scopes scopeId={projectShow.data.data.scopes[0].id}/>
                </div>
            </div>
        )
    }

};

export default ProjectShow;