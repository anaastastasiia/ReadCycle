import mainPage from './pages/main.json';
import common from './common.json';
import enums from './enums.json';
import bookFilter from './components/bookFilter.json';
import bookDetails from './pages/bookDetails.json';
import authPage from './pages/authPage.json';

export default {
    pages: {
        mainPage,
        bookDetails,
        authPage
    },
    components: {
        bookFilter
    },
    common,
    enums
}