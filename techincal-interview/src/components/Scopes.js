import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Container, Col } from 'reactstrap';
import TaskItems from './TaskItems';



const Scopes = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scopes, setScopes] = useState([]);
    const id = parseInt(props.scopeId)

    useEffect(() => {
        axiosWithAuth()        
        .get(`/api/v2/scopes/${id}`)
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
                <h3>Scopes and Tasks</h3>
                <Container>
                    <Col>
                    {
                        scopes.data.data.tasks.map(task => {
                            return(
                            <TaskItems
                            category_name={task.category_name}
                            name={task.name}
                            description={task.description}
                            price={task.price}
                            key={task.id}
                            />)
                        })
                    }
                    </Col>
                </Container>
            </div>
        )
    }

};

export default Scopes;