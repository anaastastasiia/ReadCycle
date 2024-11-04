import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-secondary text-white py-12">
      <div className="container gap-8 grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp
              start={0}
              end={345}
              duration={3}
              enableScrollSpy
              scrollSpyOnce
            />
          </p>
          <p>Experts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp start={0} end={345} duration={3} enableScrollSpy />
          </p>
          <p>Experts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp
              end={34500}
              suffix="+"
              separator=","
              duration={3}
              enableScrollSpy
            />
          </p>
          <p>Experts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-3xl">
            <CountUp end={345} duration={3} enableScrollSpy />
          </p>
          <p>Experts</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
