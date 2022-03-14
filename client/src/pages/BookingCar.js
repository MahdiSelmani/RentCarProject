import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../components/CarCard';
import { getAllCars } from '../redux/actions/carsActions';

function BookingCar() {
  const cars = useSelector(state => state.carsReducer.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars)
  }, [dispatch])
  return (
<div style={{display:'flex', flexWrap : 'wrap', justifyContent:'center', minHeight:'100vh'}}>
      {cars.map(el => <CarCard key={el._id} car={el}></CarCard>)}
    </div>  )
}

export default BookingCar;