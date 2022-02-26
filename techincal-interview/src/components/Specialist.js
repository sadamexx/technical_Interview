import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const Specialist = ({user}) => {  
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
        

        if(error){
            return<div>Error {error.message}</div>
        } else if (!currentSpecialist.data) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    
                        <h1>Specialist</h1>
                        <p></p>
      
                </div>
            )
        }
};

export default Specialist;