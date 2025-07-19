
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>

        </BrowserRouter>

    );
}

export default Main;