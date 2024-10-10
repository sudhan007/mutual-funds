import investment_journey  from "../assets/diverse_portfolio_image.png"

 export default function Investment_journey(){

    return(
        <>
        <div>
            <div className="absolute flex justify-center w-full items-center">
            <div className="lg:-mt-[400px] -mt-[220px]">
                <img src={investment_journey} alt="" className="lg:w-[572px] w-[330px] h-[330px] z-30 lg:h-[572px]" />
            </div>
            </div>
          
            <div className=" lg:mt-[552px] mt-[280px]"> 

       
            <div className="  bg-[linear-gradient(149.33deg,#0A155B_0.87%,#060D34_94.27%)] lg:h-[474px] h-[322px]  w-full flex flex-col items-center gap-1">
<h1 className="lg:mt-[284px] text-center mt-[160px] lg:text-[42px] text-[30px] text-white font-semibold ">How to Get Started On Your </h1>
<span className="lg:text-[42px] text-[30px] font-semibold" style={{
  background: 'linear-gradient(266.01deg, #55CBFB -21.73%, #1D4ED8 96.22%)',
  WebkitBackgroundClip: 'text',  
  WebkitTextFillColor: 'transparent', 
  backgroundClip: 'text',
  color: 'transparent',
}}>Investment Journey</span>
            </div>
            </div>
        </div>
        </>
    )
 }