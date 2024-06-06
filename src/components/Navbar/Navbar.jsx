import { IconRocketLaunchOutline, IconDeviceTvOld } from "../../assets/icons/icons";

export default function Navbar(){
    return(
        <nav>
            <div className="flex items-center justify-between py-6 px-20 lg:px-10 sm:px-5 xs:justify-center">
                <div  className="flex items-center justify-start gap-3  ">
                    <div className="text-[26px]"><IconDeviceTvOld/></div>
                    <div  className="text-[22px]"><span  className="font-bold">Landing</span>Page</div>
                </div>
                <div className="flex gap-10 items-center max-[1024px]:gap-5">
                    <a href="/" className="text-dark-green font-medium text-[17px] md:hidden">Contact</a>
                    <button className=" bg-green-100 text-dark-green font-medium rounded-3xl px-7 py-3 sm:text-[15px] sm:px-5 sm:py-2 xs:hidden">How it works</button>
                    <button className="flex items-center gap-3 bg-dark-green text-white font-medium rounded-3xl px-7 py-3 md:hidden "><IconRocketLaunchOutline/> Get Started</button>
                </div>
            </div>
        </nav>
    )
}