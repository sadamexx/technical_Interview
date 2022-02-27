import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    // const [isModalVisible, setIsModalVisible] = useState(false);
    // const [projectId, setProjectId] = useState(1);
    
    // const showModal = async projectId => {
    //     await setProjectId(projectId)
    //     setIsModalVisible(true);
    // };
    
    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    // const handleCancel = () => {
    //     setIsModalVisible(false);
    // };
//ran out of time for setting up a
//works for navigation but not for API 
//{`/ProjectShow/$parseInt({props.id})`}
    return(
        <Col xs="12" s="6" md="4">
            <Link to='/ProjectShow'  style={{textDecoration: 'none'}} >
            <Card>
                <CardBody style={{backgroundColor: 'lightGray'}}>
                    <CardTitle 
                    >Project: {props.name}</CardTitle>
                    <CardSubtitle>Client: {props.client}</CardSubtitle>
                    </CardBody>
            </Card>
            </Link>
            {/* <Modal toggle={showModal}>
                <ModalHeader>
                        modal title
                </ModalHeader>            
            </Modal>       */}
        </Col>
    )
};

export default ProjectCard;