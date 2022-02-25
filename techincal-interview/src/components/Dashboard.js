import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import OptionsCard from './OptionsCard';


const Dashboard = () => {
    const initialValue = ['Profile', 'Specialist', 'Projects', 'Other']    
    const [options, setOptions] = useState(initialValue)


    return(
        <div>
           {options.map((x, id) => {
               return(
                   <OptionsCard
                    name={x}
                    key={id}
                    />
               )
           })
           }
        </div>
    )
};

export default Dashboard;