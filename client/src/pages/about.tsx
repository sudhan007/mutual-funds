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
        <div className="relative lg:mt-[100px] mt-[90px] z-30 md:pl-[150px]  px-6 md:pr-[274px]">
          <div>
            <h1 className="md:text-[42px] text-[30px] flex flex-col text-[#2C2C2C] font-bold">
              <p className="">
                <span> Let’s explore what the </span>
                <span className="bg-gradient-to-r from-[#1B2EA1] to-[#090F34] bg-clip-text text-transparent">
                  Singaar Wealth
                </span>
              </p>
              <p>is about. </p>
            </h1>
          </div>
          <div className="flex flex-col mt-[30px] gap-10">
            <p className="md:text-xl text-base text-[#535252]">
              Singaar Wealth offers tailored investment solutions through mutual
              funds that align with your financial goals and risk tolerance. Our
              mission is to empower clients with informed investment decisions
              and strategic financial planning.
            </p>
            <p className="md:text-xl text-base text-[#535252]">
              Whether you're looking to grow your wealth, save for retirement,
              or secure your family's financial future, We are committed to
              guiding you every step of the way.
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
