import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({        
        baseURL: 'https://development.api.teams.wethos.co',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        }
    })
}