import ellipse1 from "../assets/Ellipse1.png"
import ellipse2 from "../assets/Ellipse2.png"
import arrow from "../assets/arrow_growth.png"
export default function About() {

    return (
        <div className=" h-[500px]">
            <div>
                <div className="absolute -mt-[74px]">
                    <img src={ellipse1} alt="eclipse" className="w-[239px] ml-[58px] h-[229px]" />
                </div>
                <div className="relative mt-[140px] pl-[150px] pr-[274px]">
                    <div>
                        <h1 className="text-[42px] flex flex-col text-[#2C2C2C] font-bold">
                            <p>
                                <span>  Let’s explore what the </span><span
                                    className="bg-gradient-to-r from-[#1B2EA1] to-[#090F34] bg-clip-text text-transparent"
                                >
                                    Singaar Wealth
                                </span>
                            </p>
                            <p>is about. </p>

                        </h1>
                    </div>
                    <div className="flex flex-col mt-[30px] gap-10">
                        <p className="text-[20px] text-[#535252]">
                        Singaar Wealth offers tailored investment solutions through mutual funds that align with your financial goals and risk tolerance. Our mission is to empower clients with informed investment decisions and strategic financial planning.
                        </p>
                        <p className="text-[20px] text-[#535252]">
                        Whether you're looking to grow your wealth, save for retirement, or secure your family's financial future, We are committed to guiding you every step of the way. 
                        </p>
                    </div>
                </div>
                <div className="-mt-40">
                    <div className="flex justify-end">
                        <div className="absolute ml-40 mt-20 z-40" >
                            <img src={arrow} alt="arrow" className="w-[260px] h-[174px]" />
                        </div>
                        <div className="relative">
                            <img src={ellipse2} alt="eclipse" className="h-[393px] w-[408px]" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}