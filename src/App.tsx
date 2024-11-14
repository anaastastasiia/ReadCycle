import Navbar from "./components/Navbar/Navbar";
import GetStarted from "./components/GetStarted/GetStarted";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import Benefits from "./components/Benefits/Benefits";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Sales from "./components/Sales/Sales";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <GetStarted />
      <NumberCounter />
      <SubjectCard />
      <Sales />
      <Benefits />
      <Feedback />
      <Footer />
    </main>
  );
};

export default App;
