import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center overflow-hidden bg-primary lg:bg-no-repeat lg:bg-cover lg:bg-center py-32 lg:py-0 lg:h-[85vh]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left Side */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">{"Hey, I'm Michael"}</p>
            <h1 className="text-center lg:text-left text-4xl leading-[44px] font-bold lg:text-5xl lg:leading-tight xl:text-7xl lg:tracking-[-2px]">
              I Code & Design <br /> Web Interfaces <br /> And Software.
            </h1>
            <p className="max-w-[480px] text-lg text-center pt-4 pb-8 md:pt-6 md:pb-12 lg:text-left">
              A Software Engineer who is fascinated by technologies and passionate about creating
              innovative products with creative and engaging design.
            </p>
            {/* Contact */}
            <Link href={"#contact"}>
              <button className="btn btn-md md:btn-lg group">
                <span 
                  className="w-48 h-48 rounded rotate-[-40deg] bg-accent-hover absolute 
                  bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all 
                  translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                />
                <span 
                  className="relative w-full text-left text-black transition-colors 
                  duration-300 ease-in-out group-hover:text-white"
                >
                  {"Let's Talk"}
                </span>
              </button>
            </Link>
          </div>
          {/* Right Side */}
          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <div className="relative left-[20%] bg-gradient-to-t from-orange-700 via-red-700 to-purple-900 h-[21.87em] w-[21.87em] rounded-[50%] overflow-hidden">
              <div className="h-[2.2em] w-[2.2em] bg-[#D3D3D3] absolute left-[5.62em] top-[4.4em] rounded-[50%] shadow-moon moon"/>
              <div className="star top-[5em] left-[18.75em] before:content-[''] before:top-[1.9em] before:left-[-16.4em]" />
              <div className="star top-[3.12em] left-[11.25em] before:content-[''] before:top-[6.25em] before:left-[7.5em]" />
              <div className="star top-[1.9em] left-[15em] before:content-[''] before:top-[5em] before:left-[-0.93em]" />
              <div className="absolute h-[12.5em] w-[7.5em] bg-[#0C0404] left-[1.9em] bottom-[-0.62em] transform rotate-[-50deg] mountain" />
              <div className="h-[0.18em] w-[2.5em] right-[-0.62em] opacity-[0.2] bg-[#ffffff] transform rotate-[-30deg] absolute animate-[shootingstar_5s_infinite]" />
              <div className="h-[5em] w-[28.12em] bg-[#000000] absolute bottom-[-0.31em]">
                <div className="h-0 w-[1.4em] absolute right-[12.5em] bottom-[4.87em] border-solid border-b-[2.37em] border-l-[0.15em] border-r-[0.15em] border-b-[#041524] 
                  border-l-transparent border-r-transparent windmill"
                >
                  <div className="h-[0.25em] w-[0.25em] absolute bg-[#8daf76] top-[0.75em] left-[0.465em] rounded-[50%] shadow-light light" />
                  <div className="h-[3.75em] w-[3.75em] absolute bottom-[-1.7em] left-[-1.28em] animate-[spin_5s_infinite_linear] blades" />
                </div>
                <div className="h-0 w-0 absolute bottom-[4.87em] left-[4.12em] border-solid border-b-[2em] border-l-[0.37em] border-r-[0.37em] border-b-[#041524] 
                  border-l-transparent border-r-transparent tree" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;