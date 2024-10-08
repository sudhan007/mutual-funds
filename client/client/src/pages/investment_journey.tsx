import investment_journey  from "../assets/diverse_portfolio_image.png"

 export default function Investment_journey(){

    return(
        <>
        <div>
            <div className="absolute flex justify-center w-full items-center">
            <div className="-mt-[400px]">
                <img src={investment_journey} alt="" className="w-[572px] z-30 h-[572px]" />
            </div>
            </div>
          
            <div className=" mt-[552px]"> 

       
            <div className="  bg-[linear-gradient(149.33deg,#0A155B_0.87%,#060D34_94.27%)] h-[474px] w-full flex flex-col items-center gap-1">
<h1 className="mt-[284px] text-[42px] text-white">How to Get Started On Your </h1>
<span className="text-[42px]" style={{
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