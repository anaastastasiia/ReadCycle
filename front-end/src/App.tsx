import Navbar from './components/Navbar/Navbar';
import GetStarted from './components/GetStarted/GetStarted';
import NumberCounter from './components/NumberCounter/NumberCounter';
import SubjectCard from './components/SubjectCard/SubjectCard';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Sales from './components/Sales/Sales';
import './i18n';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { i18n } = useTranslation();

    const changeLng = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <main className="overflow-x-hidden">
            <button onClick={() => changeLng('en')}>English</button>
            <button onClick={() => changeLng('pl')}>Polish</button>
            <button onClick={() => changeLng('ua')}>Ukrainian</button>
            <Navbar />
            <GetStarted />
            <NumberCounter />
            <SubjectCard />
            <Sales />
            <Feedback />
            <Footer />
        </main>
    );
};

export default App;
