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
  const [, setNavStyle] = useState({ paddingTop: "65px" });
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
        className='h-[100vh] w-[100vw]'
        style={{
          background:
            "linear-gradient(149.33deg, #0A155B 0.87%, #060D34 94.27%)",
        }}>
        <div className='h-full w-full'>
          <div className='absolute w-full '>
            {/* header */}
            <div
              className='px-[75px]  py-2  flex justify-between items-center fixed top-0 left-0 w-full bg-transparent z-50'
              style={headerStyle}>
              <div className='flex items-center gap-[30px]'>
                <img src={Logo} alt='' className='w-[79px] h-[69px]' />
                <p className='text-white text-[28px]'>Singaar Wealth</p>
              </div>
              <div className='flex gap-[26px]'>
                <div className='flex gap-[11px]'>
                  <img src={Mail} alt='' className='w-[29px] h-[29px]' />
                  <p className='text-white text-[19px]'>
                    ajithjoshep@singaar.in
                  </p>
                </div>
                <div className='flex gap-[11px]'>
                  <img src={Phone} alt='' className='w-[29px] h-[29px]' />
                  <p className='text-white text-[19px]'>9090717130</p>
                </div>
              </div>
            </div>

            {/* hero section */}
            <div className='text-center mt-[160px] flex justify-center items-center flex-col'>
              <div className='w-3/4'>
                <div>
                  <p className='text-[74px] text-[#B3B6BD] font-bold'>
                    Empowering Your Wealth Building Journey
                  </p>
                </div>
                <div>
                  <p className='text-[#B3B6BD] text-[28px]'>
                    A Mutual Fund Distributor : ARN-306053
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
                  className='w-[243px] border-[1px] h-[72px] rounded-full text-[#141414] text-[24px]'>
                  Scroll Down
                </button>
              </div>
            </div>
          </div>

          {/* Left and Right bars */}
          <div className='relative h-[100vh] flex items-end w-[100vw]'>
            <div className='flex flex-row justify-between items-end w-full'>
              <div>
                <img src={leftbar} alt='' className='h-[300px] w-[210px]' />
              </div>
              <div>
                <img src={rightbar} alt='' className='h-[200px] w-[100px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
