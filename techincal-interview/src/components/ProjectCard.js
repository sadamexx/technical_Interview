import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,   
    CardBody,
    CardTitle,
    CardSubtitle,
    Col
} from "reactstrap";


const ProjectCard = (props) => {  
    const projectId = props.key
    return(
        <Col xs="12" s="6" md="4">
            {/* here is where I need to make alink to the project show page */}
            <Card>
                <CardBody style={{backgroundColor: 'lightGray'}}>
                    <CardTitle 
                    >Project: {props.name}</CardTitle>
                    <CardSubtitle>Client: {props.client}</CardSubtitle>
                </CardBody>
            </Card>
       
        </Col>
    )
};

export default ProjectCard;