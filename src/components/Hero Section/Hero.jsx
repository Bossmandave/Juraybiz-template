import { IconRocketLaunchOutline } from "../../assets/icons/icons";
import screenshot from "..//..//assets/images/mobile screenshot.png"
import "./Hero.css"
export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-wrapper px-16 mb-16 xl:px-12 md:text-center sm:px-5 xs:px-2">
                <div className="pt-28 sm:pt-24 ">
                    <h1 className="text-[67px] w-full mb-7 leading-[60px] font-bold lg:leading-[72px] sm:text-[50px] xs:text-[45px] sm:leading-[60px] ">Create Engaging Landing Pages</h1>
                    <p className="text-[17px] xs:w-[95%]">Build beautiful landing pages in record time with this Landing Page UI kit for Figma. No code required!</p>
                    <div className="flex items-center gap-5 mt-8 md:justify-center">
                        <button className="flex items-center gap-3 bg-dark-green text-white font-medium rounded-3xl px-7 py-3 hover:bg-white hover:text-dark-green transition-all hover:border-2 sm:px-5 sm-py-2 sm:text-[15px] "><IconRocketLaunchOutline/> Get Started</button>
                        <button className="border border-dark-green text-dark-green font-medium rounded-3xl px-7 py-3 hover:text-white hover:bg-dark-green transition-all sm:px-5 sm-py-2 sm:text-[15px] xs:hidden ">How it works</button>
                    </div>
                </div>

                <div className="flex items-center justify-center pt-20">
                    <div className="relative">
                        <img className="sm:w-[200px]" src={screenshot} alt="Mobile Screenshot" width={250} />
                        <div className="absolute top-9 -right-16 -z-10 w-28 h-28 bg-transparent border-[25px] rounded-full border-dark-green sm:-right-12"></div>
                        <div className="absolute bottom-20 -left-20 -z-10 w-20 h-20 bg-transparent border-[27px] rounded-full border-red-500 sm:-left-16 sm:h-16 sm:w-16 sm:border-[20px]"></div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[400px] h-[400px] bg-red-200 sm:w-[300px] sm:h-[300px] rounded-full "></div>
                    </div>
                </div>
            </div>
        </div>
    )
}