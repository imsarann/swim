import consultant from "../assets/services/consultant.png";
import equipments from "../assets/services/equipments.png";
import talk from "../assets/services/talk.png";

export default function ServiceText() {
  const servicesData = [
    {
      title: "Swimming Pool Consultant",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, temporibus a amet maiores, labore deleniti iure pariatur inventore repellat cupiditate repudiandae quas rem! Aliquid, rerum! Non explicabo pariatur deleniti exercitationem.",
      icon: consultant,
    },
    {
      title: "Swimming Pool Equipments",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, temporibus a amet maiores, labore deleniti iure pariatur inventore repellat cupiditate repudiandae quas rem! Aliquid, rerum! Non explicabo pariatur deleniti exercitationem.",
      icon: equipments,
    },
    {
      title: "Talk to Pool Expert",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, temporibus a amet maiores, labore deleniti iure pariatur inventore repellat cupiditate repudiandae quas rem! Aliquid, rerum! Non explicabo pariatur deleniti exercitationem.",
      icon: talk,
    },
  ];

  return (
    <div className="px-4 py-10 text-neutral-950">
      <div className="text-center mb-10">
        <div className="text-3xl font-Julee font-bold ">Our Services</div>
        <div className="font-bold font-Playfair text-5xl">
          Our Best Swimming Pool Services For You!
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            text={service.text}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
function Card({ title, text, icon }) {
  return (
    <>
      <style>{`
        @keyframes blob-bounce {
          0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
          25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
          }
          50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
          }
          75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
          }
          100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
        }

        .blob {
          animation: blob-bounce 5s infinite ease;
        }
      `}</style>

      <div className="relative w-[430px] h-[370px] rounded-[14px] overflow-hidden flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
        <div className="absolute top-[5px] left-[5px] w-[420px] h-[360px] bg-gray-100/95 backdrop-blur-[24px] rounded-[10px] z-[2] outline-2 outline-gray-300 overflow-hidden"></div>

        <div className="blob absolute z-[1] top-1/2 left-1/2 w-[380px] h-[150px] rounded-full bg-neutral-900 opacity-100 blur-[12px]"></div>

        <div className="z-[3] text-neutral-950 text-center px-6">
          <img src={icon} alt={title} className="w-22 bg-white p-2 rounded-full mx-auto h-20 mb-4" />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-xl font-medium text-gray-700">{text}</p>
        </div>
      </div>
    </>
  );
}
