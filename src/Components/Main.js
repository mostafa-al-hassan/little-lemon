import { useReducer } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { fetchData, submitAPI } from '../API/api';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
    const updateTimes = (state, action) => {
        if (action.type === "dateChanged") {
            return fetchData(new Date(action.date))
        }
        return (state);
    }
    const initilizeTimes = () => {
        return (fetchData(new Date()));
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initilizeTimes);

    
    
    function submitForm(formData) {
        const success = submitAPI(formData); // This should return true or false
        return success;
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}></Route>
                <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
            </Routes>

        </BrowserRouter>

    );
}

export default Main;