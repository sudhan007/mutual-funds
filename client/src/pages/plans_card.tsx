import earning from "../assets/earning.png"
import Ellipse3 from "../assets/Ellipse3.png"
import rupee from "../assets/rupee.png"
import tax from "../assets/tax.png"
import increase from "../assets/increase.png"
import goal from "../assets/goal.png"
import bubble1 from "../assets/bubble1.png"
import bubble2 from "../assets/bubble2.png"
export default function PlanCards() {
    return (
        <div className="relative  lg:mt-[200px] mt-[100px]">
            <div className="absolute  lg:-mt-[40px] -z-20 hidden lg:block">
                <img src={Ellipse3} alt="ellipse" className="w-[393px] h-[391px]" />
            </div>

            <div className=" flex md:px-0 px-4 justify-center md:items-center  flex-col ">
                <div className="md:text-[42px]   text-[30px] font-bold flex  gap-3">
                    <p className="md:text-center text-left  bg-[linear-gradient(91.73deg,#1B2EA1_48.22%,#090F34_127.67%)] bg-clip-text text-transparent  font-bold">
                        Services
                    </p>
                    <span className="texxt-[#2C2C2C] ">we Offer</span>
                </div>
                <p className="lg:mt-[30px] mt-3 text-[#535252] md:text-[36px] text-[20px] md:w-[460px] w-full md:text-center text-left ">We help you kick start your Investment journey</p>

            </div>
            <div className="flex justify-end">
                <div className="absolute lg:-mt-[30px] mr-5 lg:mr-[180px]">
                    <img src={bubble1} alt="" className="w-[43px]  h-[42px] " />
                </div>

            </div>

            <div className="w-full flex flex-col lg:mt-[72px] mt-5 justify-center items-center">
                <div className="flex lg:flex-row flex-col gap-[20px]  w-[100%] px-5  justify-center items-center">
                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white md:w-[400px] md:h-[282px] w-[90%] h-auto ">
                        <div>
                            <div className="flex gap-[12px] items-center  ">
                                <img src={earning} alt="" className="w-[30px] h-[30px]" />
                                <p className="text-[18px] font-medium">Investment Planning & Management</p>
                            </div>
                            <div className=" py-[17px] font-kumbh flex flex-col font-light gap-[15px]">
                                <p className=" text-[#4A556C] text-[16px]  ">
                                    Helps create a diversified portfolio tailored to your financial goals and risk tolerance.
                                </p>
                                <p className=" text-[#4A556C] text-[16px] ">
                                    Monitors and adjusts investments to optimize returns and manage risk over time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white md:w-[400px] md:h-[282px] w-[90%] h-auto ">
                        <div>
                            <div className="flex gap-[12px] items-center  ">
                                <img src={goal} alt="" className="w-[30px] h-[30px]" />
                                <p className="text-[18px] font-medium">Goal-Based Financial Planning</p>
                            </div>
                            <div className=" py-[17px] font-kumbh flex flex-col font-light gap-[15px]">
                                <p className=" text-[#4A556C]  text-[16px]   ">
                                    Aligns your investment and savings strategy with specific financial goals, such as buying a home, funding a wedding, or achieving financial independence.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white md:w-[400px] md:h-[282px] w-[90%] h-auto ">
                        <div>
                            <div className="flex gap-[12px]  items-center ">
                                <img src={rupee} alt="" className="w-[30px] h-[30px]" />
                                <p className="text-[18px] font-medium">Cash Flow Analysis</p>
                            </div>
                            <div className=" py-[17px] font-kumbh flex flex-col font-light gap-[15px]">

                                <p className=" text-[#4A556C]  text-[16px] ">
                                    Advises on managing debt, budgeting, and improving cash flow to maximize savings and investment opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex lg:flex-row flex-col gap-[20px] mt-[20px]  w-[100%] px-5  justify-center items-center lg:mt-[54px] ">
                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl w-[90%] h-auto  bg-white  md:w-[400px] md:h-[282px] ">
                        <div>
                            <div className="flex gap-[12px] items-center  ">
                                <img src={increase} alt="" className="w-[30px] h-[30px]" />
                                <p className="text-[18px] font-medium">Wealth Preservation and Growth</p>
                            </div>
                            <div className="py-[17px] font-kumbh flex flex-col font-light gap-[15px]">
                                <p className=" text-[#4A556C]  text-[16px]  ">
                                    Develops strategies to protect and grow your wealth over time, taking into account inflation, market volatility, and your evolving financial needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white md:w-[400px] md:h-[282px] w-[90%] h-auto ">
                        <div>
                            <div className="flex gap-[12px] items-center  ">
                                <img src={tax} alt="" className="w-[30px] h-[30px]" />
                                <p className="text-[18px] font-medium">Tax Planning</p>
                            </div>
                            <div className="py-[17px] font-kumbh flex flex-col font-light gap-[15px]">
                                <p className=" text-[#4A556C]  text-[16px]  ">
                                    Helps minimize tax liabilities by providing strategies for tax-efficient investments.
                                </p>
                                <p className=" text-[#4A556C]  text-[16px]">
                                    Assists with structuring income, investments, and withdrawals in a tax-effective manner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start lg:ml-[123px] ml-5 lg:-mt-[67px]">
                <div className="absolute">
                    <img src={bubble2} alt="" className="w-[43px]  h-[42px] " />
                </div>

            </div>
        </div>
    )
}