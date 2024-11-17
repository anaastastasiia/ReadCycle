import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-secondary text-white py-12">
      <div className="container gap-8 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp
              suffix="+"
              end={2000}
              duration={3}
              enableScrollSpy
              scrollSpyOnce
            />
          </p>
          <p>Users</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp suffix="+" end={1200} duration={3} enableScrollSpy />
          </p>
          <p>Orders</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp end={2500} suffix="+" duration={3} enableScrollSpy />
          </p>
          <p>Books</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
