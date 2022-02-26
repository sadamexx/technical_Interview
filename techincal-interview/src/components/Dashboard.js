import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import OptionsCard from './OptionsCard';
import { Container, Row } from 'reactstrap';
import Profiles from './Profile';
import Profile from '../assets/Profile.jpg';
import Projects from '../assets/Projects.jpg';
import Scope from '../assets/Scope.jpg';
import Specialist from '../assets/Specialist.jpg';
import NavBar from './NavBar';


const Dashboard = () => {
    
    const initialValue = ['Profile', 'Specialist', 'Projects', 'Scope']    
    const [options, setOptions] = useState(initialValue)
    

    return(
        <div>
            <NavBar />
            <div>
            <h1>Welcome to your Dashboard</h1>
            </div>
            <Container>
                <Row>
           {options.map((x, id) => {
               return(
                   <OptionsCard
                    name={x}
                    key={id}
                    />
               )
           })
           }
           </Row>
           </Container>
        </div>
    )
};

export default Dashboard;