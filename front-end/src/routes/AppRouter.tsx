import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { BookDetailsPage } from '../pages/BookDetailsPage';
import { AuthPage } from '../pages/AuthPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:id" element={<BookDetailsPage />} />
            <Route path="/register" element={<AuthPage />} />
        </Routes>
    );
};
