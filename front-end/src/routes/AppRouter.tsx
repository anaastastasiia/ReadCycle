import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { BookDetailsPage } from '../pages/BookDetailsPage';
import { AuthPage } from '../pages/AuthPage';
import { AuthEnum } from '../model/types';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:id" element={<BookDetailsPage />} />
            <Route
                path="/register"
                element={<AuthPage type={AuthEnum.REGISTER} />}
            />
            <Route path="/login" element={<AuthPage type={AuthEnum.LOGIN} />} />
        </Routes>
    );
};
