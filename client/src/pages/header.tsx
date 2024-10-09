import Logo from "../assets/Logo.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import leftbar from "../assets/leftbar.png";
import rightbar from "../assets/rightbar.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [headerStyle, setHeaderStyle] = useState({
    background: "transparent",
    paddingTop: "65px",
    transition: "background 0.3s ease",
    paddingBottom: "0px",
  });
  //@ts-ignore
  const [navStyle, setNavStyle] = useState({ paddingTop: "65px" });
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      setHeaderStyle({
        background: "linear-gradient(149.33deg, #0A155B 0.87%, #060D34 94.27%)",
        transition: "background 5s ease",
        paddingTop: "10px",
        paddingBottom: "10px",
      });
      setNavStyle({
        paddingTop: "20px",
      });
    } else {
      setHeaderStyle({
        background: "transparent",
        paddingTop: "65px",
        paddingBottom: "0px",
        transition: "background 5s ease",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className='lg:h-[796px] h-[820px] w-[100vw] overflow-hidden'
        style={{
          background:
            "linear-gradient(149.33deg, #0A155B 0.87%, #060D34 94.27%)",
        }}>
        <div className='h-full w-full'>
          <div className='absolute w-full '>
            {/* header */}
            <div
              className='md:px-[75px]   md:py-2  flex justify-between items-center fixed top-0 left-0 w-full bg-transparent z-50'
              style={headerStyle}>
              <div className='flex items-center md:pl-0 pl-[23px] gap-[20px]'>
                <img src={Logo} alt='' className='lg:w-[116px]  w-16' />
                <p className='text-white text-[28px]  hidden md:block '>Singaar Wealth</p>
              </div>
              <div className='lg:flex-row items-end   pr-2 md:pr-0 flex md:gap-[26px] gap-2  flex-col '>
                <div className='flex gap-[5px] justify-center items-center '>
                  <img src={Mail} alt='' className='md:w-[29px] md:h-[29px] h-[14px] w-[18px]' />
                  <p className='text-white  md:text-[19px] text-[14px]'>
                    ajithjoseph@singaar.in
                  </p>
                </div>
                <div className='flex justify-center items-center gap-[5px]'>
                  <img src={Phone} alt='' className='md:w-[29px]  md:h-[29px] h-[16px] w-[17px]' />
                  <p className='text-white md:text-[19px] text-[14px]'>9090717130</p>
                </div>
              </div>
            </div>

            {/* hero section */}
            <div className='text-center mt-[160px] flex justify-center items-center flex-col'>
              <div className='lg:w-3/4 w-full  mt-16'>
                <div>
                  <p className='lg:text-[70px] text-[46px] text-[#FCECEC] px-1  flex flex-col font-bold'>
                    <span className="lg:flex-row flex flex-col justify-center gap-3 items-center">
                      <span>
                      Empowering
                      </span>
                      <span>
                      Your Wealth 
                      </span>
                    </span>
                    <span>
                    Building Journey
                    </span>
                  
                  </p>
                </div>
                <div>
                  <p className='text-[#B3B6BD]  justify-center items-center mt-10 lg:text-[28px] text-[20px] flex lg:flex-row flex-col'>
                    <span>
                    A Mutual Fund Distributor :
                    </span>
                    <span>
                    ARN-306053
                    </span>
                  </p>
                </div>
              </div>

              {/* scroll Button */}
              <div className='mt-[75px] w-full flex justify-center items-center'>
                <button
                  style={{
                    background:
                      "linear-gradient(328.68deg, #FFEBC8 13.03%, #FFFBF4 120.61%)",
                  }}
                  className='lg:w-[243px] w-[165px] h-[54px] border-[1px] lg:h-[72px] rounded-full text-[#141414] lg:text-[24px] text-lg'>
                  Scroll Down
                </button>
              </div>
            </div>
          </div>

          {/* Left and Right bars */}
          <div className='relative lg:h-[796px] h-[820px]  flex items-end w-[100vw]'>
            <div className='flex flex-row justify-between items-end w-full'>
              <div>
                <img src={leftbar} alt='' className='md:h-[300px] md:w-[210px]  h-[200px] w-[140px]' />
              </div>
              <div>
                <img src={rightbar} alt='' className='md:h-[200px] md:w-[100px] h-[130px] w-[70px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
