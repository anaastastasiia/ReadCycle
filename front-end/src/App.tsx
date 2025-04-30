import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import './i18n';
import { AppRouter } from './routes/AppRouter';
import { authActions } from './store/authStore';

const App = () => {
    const { checkTokenExpiration, clearData } = authActions;

    useEffect(() => {
        const interval = setInterval(() => {
            const isValid = checkTokenExpiration();
            if (!isValid) {
                console.warn('Tokem expired. Clearing user data.');
                clearData();
            }
        }, 120_000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    );
};

export default App;
