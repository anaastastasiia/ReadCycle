import GetStarted from '../components/GetStarted/GetStarted';
import NumberCounter from '../components/NumberCounter/NumberCounter';
import Category from '../components/Category/Category';
import Feedback from '../components/Feedback/Feedback';
import Footer from '../components/Footer/Footer';
import Sales from '../components/Sales/Sales';

const MainPage = () => {
    return (
        <main className="overflow-x-hidden">
            <GetStarted />
            <NumberCounter />
            <Category />
            <Sales />
            <Feedback />
            <Footer />
        </main>
    );
};

export default MainPage;
