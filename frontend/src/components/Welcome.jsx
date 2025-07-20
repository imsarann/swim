import expirence from "../assets/welcome.png"
import exp from "../assets/11-years-exp.png"
export default function Welcome() {
  return (
    <div className=" flex justify-between min-h-screen  rounded-[50px]   mx-[80px]">
        <div className="w-[50vw]  flex justify-center items-center">
          <img src={exp} alt="11 years of expirence" className="h-[75vh]" />
        </div>
        <div className="text-neutral-950  w-[75vw] flex justify-center items-center ">
          <div className="bg-gray-300 m-4 p-5 rounded-2xl shadow-gray-300 shadow-2xl">

          <div className="text-2xl text-blue-950 font-semibold font-Playfair ">
            Enjoy Safe and Affordable Diving and Swimming With Us!
          </div>
          <div className="text-[22px] bg-gray-50 rounded-4xl text-neutral-900 font-medium font-Lato mt-4 p-5">
            Incorporated in the year 2013, Veni Enterprises is a trusted trader, supplier and service provider of swimming pool spare parts and construction services of swimming pools. Based at Tamil Nadu (India), we have garnered a huge client base by delivering world-class swimming pool services. We are offering Swimming Pool Construction Services, swimming pool accessories, Branded water Proofing Materials etc. to our clients spread across the country. We have hired professionals, who have rich on-site construction knowledge and experience that enables us to meet the industrial standards in a significant manner. Also, by being constantly engaged with clients to understand their specific demands, we have established strong business rapport with them.
          </div>
          </div>
        </div>
    </div>
  )
}
