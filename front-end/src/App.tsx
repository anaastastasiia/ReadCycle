import Navbar from './components/Navbar/Navbar';
import './i18n';
import { AppRouter } from './routes/AppRouter';

const App = () => {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    );
};

export default App;
