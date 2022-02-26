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

const OptionCard = (props) => {  
    



    
    return(
        <Col xs="12" s="6" md>
            <Card>               
                
                <CardImg 
                alt={props.name}
                src={Specialist}
               
                />
            
                <CardBody className="text-center" style={{ backgroundColor: '#B8B5FF'}} >
                    <CardTitle tag="h3" >{props.name}</CardTitle>
                </CardBody>
            </Card>

        </Col>
    )
};

export default OptionCard;