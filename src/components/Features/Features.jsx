/* eslint-disable react/prop-types */
import { IconArrowRight, IconBoundingBox, IconCodeSlash, IconWandMagicSparkles } from "../../assets/icons/icons"
import "./Features.css"
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
                    <FeatureCard
                    logoColor="text-red-400"
                    logobgColor="bg-red-200"
                    logo={<IconWandMagicSparkles/>}
                    header="Fast building"
                    text="Tailor This Landing Page UI Kit to your unique style and brand with customisable components, in no time!"
                    />
                    <FeatureCard
                    logoColor="text-dark-green"
                    logobgColor="bg-green-200"
                    logo={<IconBoundingBox/>}
                    header="Responsive Design" 
                    text="No need to worry about screen size. This Landing Page UI Kit adapts to any screen size, from desktop to mobile."                   
                    />
                    <FeatureCard
                    logoColor="text-yellow-600"
                    logobgColor="bg-yellow-100"
                    logo={<IconCodeSlash/>}
                    header="No Code Needed" 
                    text="Zero coding skills required, Figma prototypes empowers you to create and preview stunning landing pages with ease."                   
                    />
                </div>
            </div>
        </div>
    )
}