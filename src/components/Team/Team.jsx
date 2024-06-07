/* eslint-disable react/prop-types */
import "./Team.css"
import teamimg1 from "..//..//assets/images/teamimg1.png"
import teamimg2 from "..//..//assets/images/teamimg2.png"
import teamimg3 from "..//..//assets/images/teamimg3.png"
import { IconBasketball, IconInstagram, IconTwitter } from "../../assets/icons/icons"
import { TeamDetails } from "./TeamDetail"


function TeamCard({image , name , role}){
    return(
        <div className=" rounded-3xl bg-white shadow hover:shadow-xl transition-all text-center">
            <img src={image} alt="TeamImage" />
            <h1 className="mt-4 text-[21px] font-semibold">{name}</h1>
            <p className="mb-4 text-[16px]">{role}</p>
            <hr />
            <div className="flex items-center justify-center gap-4 my-6">
                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconTwitter/></div>
                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconBasketball/></div>
                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconInstagram/></div>
            </div>
        </div>
    )
}

export default function Team(){
    return(
        <div className="teams">
            <div className="py-10 px-3">
                <div className="text-center mb-6 ">
                    <h1 className="text-[38px] font-bold mb-2 sm:text-[33px]">Meet our Team</h1>
                    <p>Get to know the faces behind the scenes and learn about the values that drive us.</p>
                </div>
                <div className="team-grid px-10 pt-10 lg:px-7 sm:px-4 xs:px-2">
                    {TeamDetails.map((detail)=>{
                        return(
                            <TeamCard
                                key={detail.id}
                                name={detail.name}
                                role= {detail.role}
                                image={detail.id === 0 ? teamimg1 :
                                        detail.id === 1 ? teamimg2 :
                                        detail.id === 2 ? teamimg3 : null
                                    }
                                />                             
                        )
                    })}
                </div>
            </div>
        </div>
    )
}