import { IconArrowRight } from "../../assets/icons/icons"
import "./Cta.css"
import mobileview from "..//..//assets/images/mobileview.png"
export default function CTA(){
    return(
        <div className="cta">
            <div className="cta-grid px-10 mt-10 py-20 sm:px-3">
                <div className="flex items-center justify-center">
                    <div>
                        <div className="relative">
                            <div className="relative w-[400px] h-[400px] sm:h-[300px] sm:w-[300px] bg-red-200 rounded-full flex items-end justify-center isolate overflow-hidden">
                                <img src={mobileview} alt="" width={300} className="z-20 ml-4 sm:w-[250px]"/> 
                            </div>
                            <div className="absolute top-5 z-10 -left-4 w-36 h-36 bg-transparent border-[25px] rounded-full border-dark-green"></div>
                            <div className="absolute bottom-10  right-3 z-10 w-20 h-20 bg-transparent border-[27px] rounded-full border-orange"></div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 md:text-center">
                    <h1 className="text-[50px] font-bold mb-3 sm:text-[45px] xs:text-[40px] ">Get Landing Page UI Kit Today! </h1>
                    <p className="text-[21px] mb-10 sm:text-[19px] xs:[17px]">Break the Figma limits and explore the endless possibilities</p>
                    <button className="text-white flex items-center md:mx-auto gap-3 bg-dark-green px-9 py-4 rounded-3xl sm:px-7 sm:py-2">Get started <IconArrowRight/></button>
                </div>
            </div>
        </div>
    )
}