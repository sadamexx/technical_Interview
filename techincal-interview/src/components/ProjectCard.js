import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,   
    CardBody,
    CardTitle,
    Col
} from "reactstrap";


const ProjectCard = (props) => {  
    
    return(
        <Col xs="12" s="6" md="4">
        
            <Card>
                <CardBody >
                    <CardTitle className={props.key}>{props.name}</CardTitle>
                </CardBody>
            </Card>
       
        </Col>
    )
};

export default ProjectCard;