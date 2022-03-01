import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import { Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import Scopes from './Scopes';
import NavBar from './NavBar';
import CardRole from './CardRole';
import ScopeList from './ScopeList';



const ProjectShow = (props) => {
    console.log('props Project Show', props)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectShow, setProjectShow] = useState([]);
    const [scopeId, setScopeId] = useState();

  
    const proId= props.match.params.id
    console.log(proId)
   
    useEffect(() => {
        axiosWithAuth()                
        .get(`/api/v2/projects/${proId}`)
        .then(
            (result) => {
                setIsLoaded(false);
                setProjectShow(result);
                setScopeId(result.data.data.scopes[0].id)
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
    } else if (!scopeId == true){
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <h1>ProjectShow</h1>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h3'>Project Type: {projectShow.data.data.name}</CardTitle>
                            <CardSubtitle tag='h5'>Client: {projectShow.data.data.client.name}</CardSubtitle>
                            <CardSubtitle tag='h5'>Price Total: ${projectShow.data.data.summary.total_billable} </CardSubtitle>
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
                            {
                                projectShow.data.data.scopes[0].categories.map(scope => {
                                    return(
                                        <li>{scope}</li>
                                    )
                                })
                            }                    
                        </CardBody>
                    </Card>
                    
                    </Col>
                    <Scopes scopeId={projectShow.data.data.scopes[0].id}/>
                <div>
                    
                </div>
            </div>
        )
    }

};

export default ProjectShow;