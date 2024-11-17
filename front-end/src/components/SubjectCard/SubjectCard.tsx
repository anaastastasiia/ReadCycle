import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa6";

const subjectList = [
  {
    id: 1,
    name: "Fiction",
    icon: <FaBook />,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Romance",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Children's Books",
    icon: <FaBook />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Science Fiction & Fantasy",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Mystery & Triller",
    icon: <FaBook />,
    color: "#d9e00b",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Business & Economics",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Self-Help & Repsonal Development",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];

const SubjectCard = () => {
  return (
    <>
      <div>
        <div className="py-14 px-20 bg-[#f9f9f9]">
          <div className="space-y-4 px-6 pb-6 text-center max-w-[600px] mx-auto mb-5">
            <h1 className="uppercase font-semibold text-orange-500">
              Our Bookstore Has It All!
            </h1>
            <p className="font-semibold text-3xl">Find Books in Any Genre</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {subjectList.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: item.delay,
                  }}
                  className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
                >
                  <div
                    style={{
                      color: item.color,
                      backgroundColor: item.color + "20",
                    }}
                    className="w-10 h-10 rounded-md flex justify-center items-center"
                  >
                    {item.icon}
                  </div>
                  <p>{item.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
