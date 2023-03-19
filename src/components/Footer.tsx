import { social } from "@/utilities/data";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <hr className="mb-8 opacity-[3]" />
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between text-center">
          <div className="flex space-x-6 items-center justify-center text-center">
            {social.map((item, index) => {
              return (
                <div key={index} className="">{item.logo}</div>
              );
            })}
          </div>
          <p>&copy; 2023 Michael Gourdine. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;