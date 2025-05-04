import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { BookDetailsPage } from '../pages/BookDetailsPage';
import { AuthPage } from '../pages/AuthPage';
import { AuthEnum } from '../model/types';
import { CreateItemPage } from '../pages/CreateItemPage';
import { UserBooksPage } from '../pages/User/UserBooksPage';
import { AboutUs } from '../pages/AboutUsPage';

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
            <Route path="/create" element={<CreateItemPage />} />
            <Route path="/iSell" element={<UserBooksPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
    );
};
