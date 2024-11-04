import Navbar from "./components/Navbar/Navbar";
import GetStarted from "./components/GetStarted/GetStarted";
import NumberCounter from "./components/NumberCounter/NumberCounter";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <GetStarted />
      <NumberCounter />
    </main>
  );
};

export default App;
