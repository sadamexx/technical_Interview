import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import OptionsCard from './OptionsCard';
import { Container, Row } from 'reactstrap';
import Profiles from './Profile';
import Profile from '../assets/Profile.jpg';
import Projects from '../assets/Projects.jpg';
import Scope from '../assets/Scope.jpg';
import Specialist from '../assets/Specialist.jpg';


const Dashboard = () => {
    const images = [Profile, Specialist, Projects, Scope
    ]
    const initialValue = ['Profile', 'Specialist', 'Projects', 'Scope']    
    const [options, setOptions] = useState(initialValue)
    const [photos, setPhotos] =useState(images);

    return(
        <div>
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