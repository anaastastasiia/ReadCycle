import mainPage from './pages/main.json';
import common from './common.json';
import enums from './enums.json';
import bookFilter from './components/bookFilter.json';
import bookDetails from './pages/bookDetails.json';
import authPage from './pages/authPage.json';
import createBookPage from './pages/createBookPage.json';

export default {
    pages: {
        mainPage,
        bookDetails,
        authPage,
        createBookPage
    },
    components: {
        bookFilter
    },
    common,
    enums
}