import GirlImg from "../../assets/education.jpg";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utils/animations";

const GetStarted = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Unlock Your Potential with{" "}
              <span className="text-primary">SkillWave!</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              Grow with us! Our platform’s courses, blogs, and resources will
              help you gain new skills and build the career of your dreams.
              Start your journey to success today!
            </motion.p>
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button className="primary-btn">Get Started</button>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={GirlImg}
            alt=""
            className="w-[450px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
