import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Card,   
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import ProjectShow from './ProjectShow';


const ProjectCard = (props) => {  
    console.log('projectCard props', props)
    // const [isOpen, setIsOpen] = useState(false);
    
    
    
//ran out of time for setting up a modal

    return(
        <Col xs="12" s="6" md="4">
            <Link style={{textDecoration: 'none'}} to={`/ProjectShow/${props.id}`}>
            <Card id={props.id}>
                <CardBody style={{backgroundColor: 'lightGray'}}>
                    <CardTitle 
                    >Project Type: {props.name}</CardTitle>
                    <CardSubtitle>Client Name: {props.client}</CardSubtitle>
                    </CardBody>
            </Card>
            </Link>
         </Col>
    )
};

export default ProjectCard;