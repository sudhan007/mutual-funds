// import Logo from "../assets/Logo.png"
import Logo from '../assets/new_Logo.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png';
import phone from '../assets/phone.png';
import rightbar from '../assets/rightbar.png';
import instagram from '../assets/instagram.png';
export default function Footer() {
  return (
    <div
      className="lg:h-[578px] lg:[210px] mt-[87px] w-full overflow-hidden"
      style={{
        backgroundColor: '#041742',
        // background: 'linear-gradient(149.33deg, #0A155B 0.87%, #060D34 94.27%)',
      }}>
      <div className="mt-16 flex lg:flex-row flex-col gap-12 lg:justify-center lg:items-center">
        <div className="lg:w-1/2 lg:px-16 px-8   flex flex-col gap-8 ">
          <div className="flex items-center justify-start gap-7 w-full">
            <img src={Logo} alt="logo" className="w-20 h-18" />
            <p className="text-[#FFFEFE] text-2xl"> Singaar Wealth</p>
          </div>
          <div className="w-5/6 text-[#B3B6BD] text-base flex flex-col gap-7">
            <p>
              Singaar Wealth offers tailored investment solutions through mutual
              funds that align with your financial goals and risk tolerance. Our
              mission is to empower clients with informed investment decisions
              and strategic financial planning.
            </p>
            <p>
              Whether you're looking to grow your wealth, save for retirement,
              or secure your family's financial future, We are committed to
              guiding you every step of the way.
            </p>
          </div>
        </div>
        <div className="block ml-[27px] md:hidden">
          <a
            href="https://www.instagram.com/singaarwealth/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={instagram} className="w-[69px]" alt="instagram" />
          </a>
        </div>
        <div className="lg:w-1/2  lg:py-10 lg:px-44  px-8  justify-start items-start flex flex-col gap-10">
          <div>
            <h1 className="text-[#F8F8F8] text-3xl font-medium">
              Contact Details
            </h1>
          </div>
          <div className="text-xl flex flex-col gap-5 text-[#F8F8F8B8]">
            <a
              href="mailto:ajithjoseph@singaar.in"
              target="_blank"
              rel="noopener noreferrer">
              <div className="flex gap-3">
                <img src={mail} alt="mail" className="w-8 h-8" />
                <p>ajithjoseph@singaar.in</p>
              </div>
            </a>
            <a href="tel:+919090717130">
              <div className="flex gap-3">
                <img src={phone} alt="call" className="w-8 h-8" />
                <p>+91 9090717130 </p>
              </div>
            </a>
            <div className="flex gap-3">
              <img src={location} alt="Location" className="w-8 h-8" />
              <p>5/22 Main Road, KanyaKumari,629702</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block ml-[72px] mt-[40px] hidden">
        <a
          href="https://www.instagram.com/singaarwealth/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={instagram} className="w-[69px]" alt="instagram" />
        </a>
      </div>
      <div className="flex justify-end ">
        <div className="relative">
          <img src={rightbar} alt="vector" className="h-[200px] w-[100px]" />
        </div>
      </div>
    </div>
  );
}
