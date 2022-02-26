import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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


const ProjectCard = (props) => {  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [projectId, setProjectId] = useState();
    
    const showModal = async projectId => {
        await setProjectId(projectId)
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    
    return(
        <Col xs="12" s="6" md="4">
            {/* here is where I need to make alink to the project show page */}
            <Card>
                <CardBody style={{backgroundColor: 'lightGray'}}>
                    <CardTitle 
                    >Project: {props.name}</CardTitle>
                    <CardSubtitle>Client: {props.client}</CardSubtitle>
                    <Button onClick={() => {
                        showModal(projectId)}}>See More info</Button>
                </CardBody>
            </Card>
       
        </Col>
    )
};

export default ProjectCard;