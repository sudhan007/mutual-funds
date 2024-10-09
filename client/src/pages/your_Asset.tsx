import Piechart from "./pieChart";


export default function Your_Asset(){

    return(
        <div className="lg:mt-48  mt-16 mx-5 lg:mx-0 ">
            <div className="flex flex-col justify-center lg:items-center items-start lg:gap-8 gap-3">
                <p className="text-[#2C2C2C] lg:text-[42px] text-3xl  font-bold">Your Asset <span className="bg-[linear-gradient(91.73deg,#1B2EA1_48.22%,#090F34_127.67%)] bg-clip-text text-transparent">Allocation </span> </p>
                <p className="lg:text-[32px] text-[20px] flex flex-col justify-center lg:items-center items-start text-[#535252]">
                    <span>
                    Give you a snapshot of what your
                    </span>
                    <span>
                    investment is exposed to
                    </span>
                </p>
            </div>
            <Piechart />
        </div>
    )

}