import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Container, Row } from 'reactstrap';



const Scopes = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scopes, setScopes] = useState([]);
 
    useEffect(() => {
        axiosWithAuth()
        // .get(`/api/v2/projects/${props.projectId}`)        
        .get('/api/v2/scopes/10859')
        .then(
            (result) => {
                setIsLoaded(false);
                setScopes(result);
                console.log('scopes', scopes)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if(error){
        return<div>Error {error.message}</div>
    } else if (!scopes.data) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h1>Scope show</h1>
                {/* below is an array. need to map to pull out info */}
                <p>Task name: {scopes.data.data.tasks[0].name}</p>
                <p>Task description: {scopes.data.data.tasks[0].description}</p>
                <p>Task price: ${scopes.data.data.tasks[0].price}</p>
                {/* <h4>client={projectShow.data.data.client.name}</h4>
                <h4>Project Name:{projectShow.data.data.name}</h4>
                <h4>Roles is an array:{projectShow.data.data.roles[0].name}</h4>
                <h4>{projectShow.data.data.roles[0].description}</h4>
                <h4>Scopes is an array map over this {projectShow.data.data.scopes[0].categories[0]}</h4>
                <h4>Scopes id {projectShow.data.data.scopes.id}</h4>
                <h4>Price total ${projectShow.data.data.summary.price_total}</h4> */}
                
            </div>
        )
    }

};

export default Scopes;