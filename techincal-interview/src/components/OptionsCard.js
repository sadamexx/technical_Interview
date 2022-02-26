import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,   
    CardBody,
    CardTitle,
    Col, 
    CardImg
} from "reactstrap";
import Profiles from './Profile';
import Profile from '../assets/Profile.jpg';
import Projects from '../assets/Projects.jpg';
import Scope from '../assets/Scope.jpg';
import Specialist from '../assets/Specialist.jpg';

const OptionCard = ({name}) => { 
    const images = [Profile, Specialist, Projects, Scope
    ]
//work on mapping images later
   
    
    return(        
        <Col xs="12" s="6" md>
        <Link to = '/${name}'>
            <Card>         
                <CardImg 
                alt={name}
                src={images[1]}
                />
                <CardBody className="text-center" style={{ backgroundColor: '#B8B5FF'}} >
                    <CardTitle tag="h3" >{name}</CardTitle>
                </CardBody>
            </Card>
            </Link>
        </Col>

    )
};

export default OptionCard;