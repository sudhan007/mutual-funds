import { useState, useEffect } from 'react';
import HDFC from "../assets/HDFC.png";
import Mirae from "../assets/Mirae.png";
import Nippon from "../assets/Nippon.png";
import ICICI from "../assets/ICICI.png";
import Navi from "../assets/navi.png";
import Motilal from "../assets/Motilal.png";
import Quant from "../assets/quant.png";
import Bandhan from "../assets/Bandhan.png";

export default function Partners() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 768); 
  };

  
  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const images = [
    { src: HDFC, alt: "HDFC Mutual Fund", width: "w-[90px] lg:w-[150px]", height: "h-[32px] lg:h-[50px]" },
    { src: Mirae, alt: "Mirae Asset Financial Service", width: "w-[110px] lg:w-[184px]", height: "h-[34px] lg:h-[56px]" },
    { src: ICICI, alt: "ICICI Prudential", width: "w-[180px] lg:w-[303px]", height: "h-[22px] lg:h-[36px]" },
    { src: Navi, alt: "Navi Mutual Fund", width: "w-[116px] lg:w-[194px]", height: "h-[35px] lg:h-[59px]" },
    { src: Nippon, alt: "Nippon Mutual Fund", width: "w-[202px] lg:w-[338px]", height: "h-[38px] lg:h-[63px]" },
    { src: Motilal, alt: "Motilal Oswal Mutual Fund", width: "w-[67px] lg:w-[112px]", height: "h-[27px] lg:h-[44px]" },
    { src: Quant, alt: "Quant", width: "w-[92px] lg:w-[154px]", height: "h-[42px] lg:h-[70px]" },
    { src: Bandhan, alt: "Bandhan Mutual Fund", width: "w-[88px] lg:w-[147px]", height: "h-[30px] lg:h-[49px]" }
  ];

  const renderImages = () => {
    if (isLargeScreen) {
      return (
        <>
          <div className="flex mb-20 justify-center items-center flex-wrap gap-[63px]">
            {images.slice(0, 4).map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className={`${image.width} ${image.height}`} />
            ))}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-[83px] mt-6">
            {images.slice(4).map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className={`${image.width} ${image.height}`} />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="w-full mb-16 flex justify-center items-center flex-wrap gap-[8px]">
            {images.slice(0, 3).map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className={`${image.width} ${image.height}`} />
            ))}
          </div>
          <div className="w-full flex justify-center mb-16 items-center flex-wrap gap-[16px] mt-6">
            {images.slice(3, 5).map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className={`${image.width} ${image.height}`} />
            ))}
          </div>
          
          <div className="w-full flex justify-center items-center flex-wrap gap-[8px] mt-6">
            {images.slice(5).map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className={`${image.width} ${image.height}`} />
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <div className="lg:mt-[160px] mt-[55px] mx-0 2xl:mx-[200px] flex justify-center items-center flex-col">
      <div>
        <h1 className="text-[#667085] text-[30px]">Our Distribution Partners</h1>
      </div>
      <div className="lg:mt-[60px]  mt-[70px]">
        {renderImages()}
      </div>
    </div>
  );
}
