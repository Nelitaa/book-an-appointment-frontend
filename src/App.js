// import React from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddDoctor from './components/AddDoctor';
import Reservations from './pages/Reservations';
import DoctorDetails from './pages/DoctorDetails';
import DeleteDoctor from './components/DeleteDoctor';
import AddReservation from './pages/AddReservation';
import { fetchDoctors } from './redux/doctors';
import { fetchReservations } from './redux/reservations';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const { length } = doctors;

  useEffect(() => {
    if (length === 0) {
      dispatch(fetchDoctors());
      dispatch(fetchReservations());
    }
  }, [dispatch, length]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/main" element={<Main />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="/doctors/:id/reserve" element={<AddReservation />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/doctors/delete" element={<DeleteDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
