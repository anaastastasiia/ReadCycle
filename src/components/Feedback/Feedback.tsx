import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const FeedBacksData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
    stars: 4,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
    stars: 5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
    stars: 5,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
    stars: 5,
  },
];

const Feedback = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 bg-[#f9f9f9]">
      <div className="container">
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">Feedbacks</h1>
          <p className="font-semibold text-3xl">
            What do our users think about us?
          </p>
        </div>
        <div>
          <Slider {...setting}>
            {FeedBacksData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    <div className="flex justify-start gap-6 items-center">
                      <img
                        alt=""
                        src={item.img}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      {Array.from({ length: item.stars }, (_, index) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-300"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
