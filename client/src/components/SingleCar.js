import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SingleCar() {
    const [car, setCar] = useState({})
    const path = useLocation();
    

    const getCar = async () => {
        try {
            const res = await axios.get('/cars/getcar/622e73181a89124f30b973a0')
            console.log(res.data)

            
        } catch (error) {
            
        }
        
    }
    
    useEffect(() => {
        getCar()
    })




    return (
        <div>

        </div>
    )
}

export default SingleCar;