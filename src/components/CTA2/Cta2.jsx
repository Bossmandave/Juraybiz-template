import { IconArrowRight } from "../../assets/icons/icons"
import "./Cta2.css"
import mobileview from "..//..//assets/images/CTA2mobileview.png"

export default function CTA2(){
    return(
        <div className="cta2">
            <div className="px-20 py-12 my-10 lg:px-12 md:px-8 sm:px-5">
                <div className="cta2-grid bg-pink rounded-2xl isolate overflow-hidden">
                    <div className="pt-10 pl-10 md:text-center md:px-5 md:pl-0">
                        <h1 className="text-[50px] font-bold mb-3  sm:text-[45px] xs:text-[40px] xs:leading-[50px]">Get Landing Page UI Kit Today! </h1>
                        <p className="text-[21px] mb-10 sm:text-[19px] xs:[17px]">Break the Figma limits and explore the endless possibilities</p>
                        <button className="text-white flex items-center md:mx-auto font-medium gap-3 bg-dark-green px-9 py-4 rounded-3xl sm:px-7 sm:py-2">Get started <IconArrowRight/></button>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <img className="h-full sm:w-[300px]" src={mobileview} alt="MobileView" width={460} />
                        <div className="absolute -top-9 sm:-bottom-10 -z-10 -right-10 w-60 h-60 rounded-full bg-dark-green"></div>
                        <div className="absolute -bottom-20 -z-10 left-3 w-60 h-60 bg-transparent border-[38px] rounded-full border-orange"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}