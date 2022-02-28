import React from 'react';
import {Container } from 'reactstrap';

const CardRole= props => (
    <Container>
        <div>
            <li>Role Name: {props.name}</li>
            <ul>Description: {props.description} </ul>
        </div>
    </Container>
)

export default CardRole;