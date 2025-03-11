import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { BookDetailsPage } from '../pages/BookDetailsPage';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/details/:id" element={<BookDetailsPage />} />
            </Routes>
        </Router>
    );
};
