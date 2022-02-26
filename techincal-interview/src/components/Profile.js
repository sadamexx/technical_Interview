import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {
    Card,   
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Col,
    Container,
    Row,
    CardImg
} from "reactstrap";
import Projects from './Projects';
import user_profile from '../assets/user_profile.jpg';
import NavBar from './NavBar';



const Profiles = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSpecialist, setCurrentSpecialist] = useState([]);
 
    useEffect(() => {
        axiosWithAuth()
        .get('/api/v2/currentspecialist')        
        .then(
            (result) => {
                setIsLoaded(false);
                setCurrentSpecialist(result);
                console.log('currentSpecialist', currentSpecialist)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        
    }, []);
//make like on their website. 
    if(error){
        return<div>Error {error.message}</div>
    } else if (!currentSpecialist.data) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <NavBar />
                <div>
                <h1>Welcome to your Profile</h1>
                </div>
                <Container>
                    <Row >
                        <Col xs="12" s="8" md="4" >        
                            <Card style={{ borderColor: '#B8B5FF'}}>
                                <CardBody className= "text-center">
                                    <div style={{ backgroundColor: '#B8B5FF', paddingBottom:'20px', marginBottom: '10px'}}>
                                    <CardImg
                                    alt='user profile'
                                    src={user_profile}
                                    top width="100%"
                                    style={{opacity: '0.5'}}>
                                    
                                    </CardImg>                           
                                    <CardTitle tag="h3" style={{marginBottom:'15px'}} >{currentSpecialist.data.data.user.first_name} {currentSpecialist.data.data.user.last_name}</CardTitle>
                                    <CardSubtitle tag="h6" style={{marginBottom:'10px'}} > 💻  {currentSpecialist.data.data.title}</CardSubtitle>
                                    <CardSubtitle tag="h6" >📍 {currentSpecialist.data.data.location_country}</CardSubtitle>
                                    </div>
                                    <CardText>{currentSpecialist.data.data.short_bio}</CardText>
                                    <CardImg></CardImg>
                                </CardBody>
                            </Card>
                        </Col>
                        <div>

                        </div>
                </Row>
                </Container>
                <div>
                    {/* <Projects /> */}
                </div>
            </div>
        )
    }

};

export default Profiles;