import Link from "next/link";
import Marquee from "react-fast-marquee";

type Props = {}

const Topic = (props: Props) => {
  return (
    <div className="py-4 lg:py-5 bg-tertiary">
      <div>
        <div>
          <div className="text-stroke text-4xl md:text-6xl font-bold tracking-widest uppercase ">
            {/* Above text */}
            <Marquee gradient={true} gradientColor={[11, 11, 11]}>
              <Link href="https://www.linkedin.com/in/michaelgourdine/" target="_blank" className="cursor-pointer ml-[2in]">
                LinkedIn Portfolio
              </Link>
              <Link href="https://github.com/DataByteMike" target="_blank" className="cursor-pointer ml-[2in]">
                GitHub Page
              </Link>
              <Link href="https://www.youtube.com/watch?v=FTQbiNvZqaY" target="_blank" className="cursor-pointer ml-[2in]">
                Toto - Africa
              </Link>
            </Marquee>
          </div>
        </div>
        {/* Below text */}
        <div className="text-stroke text-4xl md:text-6xl font-bold tracking-widest uppercase">
          <Marquee gradient={true} gradientColor={[11, 11, 11]} direction="right">
            <p className="cursor-pointer ml-[2in]">Machine Learning</p>
            <p className="cursor-pointer ml-[2in]">Full-Stack Dev</p>
            <p className="cursor-pointer ml-[2in]">Robotics</p>
          </Marquee> 
        </div>
      </div>
    </div>
  )
}

export default Topic;