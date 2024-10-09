
import profile from "../assets/profile2.jpg"

export default function Profile() {

    return (
        <div className="mt-[20px]  flex justify-center items-center ">
           <div className="md:w-[850px] w-[450px]">
           <div className="relative">
                <div className="flex justify-center ">
                    <img src={profile} alt="profile" className="md:h-[600px] md:w-[520px] h-[313px] w-[284px]" />
                </div>
            </div>
            <div className="flex justify-end">
                <div className="z-30">
                    <div className="md:-mt-52 -mt-20   md:p-[25px] px-4 py-3 bg-white  w-fit rounded-xl border-[#DBDBDB] shadow border-[2px]">
                    <p className="text-[#504F4F] text-base md:text-2xl">Ajith Joseph</p>
                    <p className="text-[#914EFA] md:text-xl text-xs">Founder of Singaar Wealth</p>
                    </div>
                   
                </div>
            </div>
           </div>
        </div>

    )
}