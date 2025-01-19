import Navbar from './components/Navbar/Navbar';
import GetStarted from './components/GetStarted/GetStarted';
import NumberCounter from './components/NumberCounter/NumberCounter';
import Category from './components/Category/Category';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Sales from './components/Sales/Sales';
import './i18n';

const App = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <GetStarted />
            <NumberCounter />
            <Category />
            <Sales />
            <Feedback />
            <Footer />
        </main>
    );
};

export default App;
