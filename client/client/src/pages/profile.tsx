
import profile from "../assets/profile2.jpg"

export default function Profile() {

    return (
        <div className="mt-[20px]">
           <div>
           <div className="relative">
                <div className="flex justify-center ">
                    <img src={profile} alt="profile" className="h-[600px] w-[520px]" />
                </div>
            </div>
            <div className=" flex justify-end   ">
                <div className="z-30 ">
                    <div className="-mt-[200px] mr-[230px] p-[25px] bg-white  w-fit rounded-xl border-[#DBDBDB] shadow border-[2px]">
                    <p className="text-[#504F4F] text-[28px]">Ajith Joshep</p>
                    <p className="text-[#914EFA] text-[21px]">Founder of Singaar Wealth</p>
                    </div>
                   
                </div>
            </div>
           </div>
        </div>

    )
}