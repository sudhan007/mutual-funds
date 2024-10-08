import HDFC from "../assets/HDFC.png"
import Mirae from "../assets/Mirae.png"
import Nippon from "../assets/Nippon.png"
import ICICI from "../assets/ICICI.png"
import Navi from "../assets/navi.png"
import Motilal from "../assets/Motilal.png"
import Quant from "../assets/quant.png"
import Bandhan from "../assets/Bandhan.png"

export default function Partners(){
   
   
    return(
<div className="mt-[107px]  flex justify-center items-center flex-col ">
    <div>
        <h1 className="text-[#667085] text-[30px]">
        Our Distribution  partner
        </h1>
    </div>
    <div className="mt-[60px] mx-[211px]  flex flex-wrap flex-col gap-[68px]">
<div className="flex gap-[53px]">
<img src={HDFC} className=" max-w-[150px] max-h-[50px]"  alt="HDFC Mutual Fund" />
<img src={Mirae} className=" max-w-[184px] max-h-[56px]" alt="Mirae Asset Financial service" />
<img src={ICICI} className=" max-w-[303px] max-h-[36px]" alt="ICICI Prudential" />
<img src={Navi} className=" max-w-[194px] max-h-[59px] " alt="Navi Mutual Fund" />
</div>
<div className="flex gap-[83px] ">
<img className="max-w-[338px] max-h-[63px]" src={Nippon} alt="Nippon Mutual fund" />
<img className="max-h-[44px] max-w-[112px]" src={Motilal} alt="Motilal oswal mutual fund" />
<img className="max-h-[70px] max-w-[154px]" src={Quant} alt="quant" />
<img className="max-h-[49px] max-w-[147px]" src={Bandhan} alt="Bhandan Mutual Fund" />

</div>
    </div>
    </div>
    )
}