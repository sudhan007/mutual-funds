import ellipse1 from '../assets/Ellipse1.png';
import ellipse2 from '../assets/Ellipse2.png';
import arrow from '../assets/arrow_growth.png';
export default function About() {
  return (
    <div className="relative pt-10">
      <div>
        <div className="absolute md:-mt-[74px] -mt-14">
          <img
            src={ellipse1}
            alt="eclipse"
            className="md:w-[239px] w-[122px] md:ml-[58px] ml-0  md:h-[229px] h-[117px] "
          />
        </div>
        <div className="relative lg:mt-[50px] mt-[90px] z-30 md:pl-[100px]  px-6 md:pr-[100px]">
          <div>
            <h1 className="md:text-[42px] text-[30px] flex flex-col text-[#2C2C2C] font-bold" style={{ textAlign : "center" }}>
              <p className="">
                <span>About </span>
                <span className="bg-gradient-to-r from-[#1B2EA1] to-[#090F34] bg-clip-text text-transparent">
                  Singaar Wealth
                </span>
              </p> 
            </h1>
          </div>
          <div className="flex flex-col mt-[30px] gap-10">
            <p className="md:text-xl text-base text-[#535252]" style={{ textAlign : "justify" }}>
              Singaar Wealth is a professionally driven financial planning and distribution firm committed to enabling families to build, 
              manage, and preserve long-term wealth with discipline and clarity. We serve as a trusted financial partner, 
              offering structured guidance across planning, protection, and capital allocation — always aligned with our clients’ 
              life goals rather than short-term market movements.
            We emphasize strategic thinking, responsible risk management, and goal-based investing. Our approach is centered on 
            transparency, accountability, and informed decision-making.
            Through carefully curated mutual fund solutions tailored to individual financial objectives and risk profiles, we help 
            clients navigate their financial journey with confidence. Whether the focus is wealth creation, retirement planning, or 
            securing generational stability, Singaar Wealth is dedicated to delivering thoughtful strategies and consistent guidance at every stage.  
             At Singaar Wealth, we don’t just manage investments — we build lasting financial partnerships.</p>
          
          </div><br />

          <div className="my-8 text-center ">
        <p className="md:text-xl text-base font-bold text-[#363636]">
          Plan. Preserve. Prosper.
        </p>
      </div>

      <div className=" text-center ">
        <p className="md:text-xl text-base text-[#363636]">
          This philosophy guides every decision we make..
        </p>
      </div>
        </div>
        <div className="md:-mt-40  -mt-20 ">
          <div className="flex justify-end">
            <div className="absolute ml-40 mt-20 z-20">
              <img
                src={arrow}
                alt="arrow"
                className="md:w-[260px] md:h-[174px] h-[113px] w-[170px]"
              />
            </div>
            <div className="relative">
              <img
                src={ellipse2}
                alt="eclipse"
                className="md:h-[393px] md:w-[408px] w-[231px] h-[223px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
