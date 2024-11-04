import Navbar from "./components/Navbar/Navbar";
import GetStarted from "./components/GetStarted/GetStarted";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import Benefits from "./components/Benefits/Benefits";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <GetStarted />
      <NumberCounter />
      <Benefits />
    </main>
  );
};

export default App;
