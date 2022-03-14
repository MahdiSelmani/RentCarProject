import { Route, Routes } from 'react-router-dom';
import './App.css';
import SingleCar from './components/SingleCar';
import BookingCar from './pages/BookingCar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';




function App() {
  return (<>
    <div style={{ backgroundColor: 'red', width: '100%' }}>NAV BAR HERE</div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/car/:id' element={<SingleCar />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/bookingcar' element={<BookingCar />}></Route>
      <Route path='*' element={<div>Not found</div>}></Route>
    </Routes>
    <div style={{ backgroundColor: 'green', width: '100%' }}>News letter here</div>

    <div style={{ backgroundColor: 'red', width: '100%' }}>FOOTER HERE</div>

  </>



  );
}

export default App;
