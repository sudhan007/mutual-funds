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
        <div className="relative  mt-[200px]">
            <div className="absolute -mt-[10px] -z-20">
                <img src={Ellipse3} alt="ellipse" className="w-[393px] h-[391px]" />
            </div>

            <div className=" flex justify-center items-center flex-col ">
                <div className="text-[42px] font-bold flex  gap-3">
                <p className="bg-[linear-gradient(91.73deg,#1B2EA1_48.22%,#090F34_127.67%)] bg-clip-text text-transparent text-[42px] font-bold">
  Services
</p>
                <span className="texxt-[#2C2C2C] ">we Offer</span>
                </div>
                <p className="mt-[30px] text-[#535252] text-[36px] w-[460px] text-center">We help you kick start your Investment journey</p>

            </div>
<div className="flex justify-end">
    <div className="absolute -mt-[30px] mr-[180px]">
    <img src={bubble1} alt="" className="w-[43px]  h-[42px] " />
    </div>
   
</div>

            <div className="w-full flex flex-col mt-[72px] justify-center items-center">
                <div className="flex flex-row gap-[20px]  w-[90%]   justify-center items-center">
                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white w-[400px] h-[242px] ">
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

                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white w-[400px] h-[242px] ">
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

                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white w-[400px] h-[242px] ">
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
               
                <div className="flex w-[90%] items-center justify-center gap-[20px] mt-[54px] ">
                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl w-[400px] h-[242px]   bg-white ">
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

                    <div className="border-[1px] border-[#EDEFF5] px-6 py-6 shadow  rounded-xl   bg-white w-[400px] h-[242px]  ">
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
            <div className="flex justify-start ml-[123px] -mt-[67px]">
    <div className="absolute">
    <img src={bubble2} alt="" className="w-[43px]  h-[42px] " />
    </div>
   
</div>
        </div>
    )
}