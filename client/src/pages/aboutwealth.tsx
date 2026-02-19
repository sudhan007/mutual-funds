const AboutWealth = () => {
  return (
    <div className=" px-5  md:px-10  mt-[55px] mx-0 2xl:mx-[200px] flex justify-center items-center flex-col">
      <div>
        <h1 className="md:text-[42px] text-[30px] flex flex-col text-[#2C2C2C] font-bold">
          <p className="">
            <span> About </span>
            <span className="bg-gradient-to-r from-[#1B2EA1] to-[#090F34] bg-clip-text text-transparent">
              Singaar Wealth
            </span>
          </p>
        </h1>
      </div>
      <div className="flex flex-col mt-[30px] gap-10">
        <p className="md:text-xl leading-relaxed text-base text-[#535252]">
          Singaar Wealth is a financial planning and distribution firm focused
          on helping families make structured, long-term financial decisions. We
          act as a one-point financial partner, guiding clients through
          planning, protection, and disciplined capital allocation. Our approach
          is rooted in clarity, accountability, and alignment with real-life
          goals-not product sales or return promises.
        </p>
      </div>
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
  );
};

export default AboutWealth;
