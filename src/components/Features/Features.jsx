/* eslint-disable react/prop-types */
import { IconArrowRight, IconBoundingBox, IconCodeSlash, IconWandMagicSparkles } from "../../assets/icons/icons"
import "./Features.css"
import { FeaturesDetails } from "./FeaturesDetails"
//features prop
function FeatureCard({logo, header , text , logoColor , logobgColor}){
    return(
        <>
        <div className="border rounded-xl shadow hover:shadow-xl transition-all flex flex-col justify-center items-center px-7 py-6 bg-white">
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-[26px] ${logoColor} ${logobgColor}`}>{logo}</div>
            <h1 className="text-[25px] mb-3 font-bold">{header}</h1>
            <p className="mb-10 text-center">{text}</p>
            <div>
                <a href="/" className="flex items-center gap-3 text-dark-green font-medium hover:underline">
                    <p>Learn More</p>
                    <IconArrowRight/>
                </a>
            </div>
        </div>
        </>
    )
}

export default function Features(){
    return(
        <div className="features">
            <div className="py-28">
                <div className="text-center px-4 ">
                    <h1 className="text-[38px] font-bold mb-2 sm:text-[33px]">Features</h1>
                    <p className="">These are just a few features you’ll get using our Landing Page Ui Kit.</p>
                </div>
                <div className="features-grid mt-16 px-16 md:px-10 sm:px-5">
                    {FeaturesDetails.map((detail)=>{
                            return(
                                <FeatureCard
                                    key={detail.id}
                                    logoColor={detail.logoColor}
                                    logobgColor= {detail.logobgColor}
                                    logo={detail.id === 0 ? <IconWandMagicSparkles/> :
                                            detail.id === 1 ? <IconBoundingBox/> :
                                            detail.id === 2 ? <IconCodeSlash/> : null
                                        }
                                    header={detail.header}
                                    text= {detail.text}
                                    />                             
        
                            )
                        })}
                </div>
            </div>
        </div>
    )
}