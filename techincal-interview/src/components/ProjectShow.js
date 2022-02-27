import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Container, Row } from 'reactstrap';
import Scopes from './Scopes'
import NavBar from './NavBar';



const ProjectShow = (props) => {
    console.log('props Project Show', props)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectShow, setProjectShow] = useState([]);
 
    useEffect(() => {
        axiosWithAuth()                
        // .get(`/api/v2/projects/$parseInt({props.data.data.id})`)
        .get('/api/v2/projects/128674921944584192')
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
                <h4>client={projectShow.data.data.client.name}</h4>
                <h4>Project Name:{projectShow.data.data.name}</h4>
                <h4>Roles is an array:{projectShow.data.data.roles[0].name}</h4>
                <h4>{projectShow.data.data.roles[0].description}</h4>
                <h4>Scopes is an array map over this {projectShow.data.data.scopes[0].categories[0]}</h4>
                <h4>Scopes id {projectShow.data.data.scopes.id}</h4>
                <h4>Price total ${projectShow.data.data.summary.price_total}</h4>
                <div>
                    <Scopes />
                </div>
            </div>
        )
    }

};

export default ProjectShow;