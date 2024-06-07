/* eslint-disable react/prop-types */
import "./Testimonial.css"
import user1 from "..//..//assets/images/user1.png"
import user2 from "..//..//assets/images/user2.png"
import user3 from "..//..//assets/images/user3.png"
import { TestimonialDetails } from "./TestimonialDetails  "


//Testimonial Prop
function TestimonialCard({name, image , about , feedback, rating}){
    return(
        <div className="px-7 text-center rounded-xl py-7 bg-white shadow hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4"><img src={image} alt="UserImage" width={70} /></div>
            <h2 className="font-semibold text-[21px]">{name}</h2>
            <p className="text-[14px] mb-8">{about}</p>
            <p>{feedback}</p>
            <div className="mt-4 text-[22px]">{rating}</div>
        </div>
    )
}


export default function Testimonial(){
    return(
        <div className="testimonials">
            <div className="mt-10 py-10">
                <div>
                    <div className="text-center mb-6 px-3">
                        <h1 className="text-[38px] font-bold mb-2 sm:text-[33px]">Real Stories from Satisfied Customers</h1>
                        <p>See how our landing page ui kit is making an impact.</p>
                    </div>

                    <div className="test-grid gap-6 mt-20 px-10 sm:px-5">
                        {TestimonialDetails.map((detail)=>{
                            return(
                                <TestimonialCard
                                    key={detail.id}
                                    image={detail.id === 0 ? user1 :
                                        detail.id === 1 ? user2 :
                                        detail.id === 2 ? user3 : null
                                    }
                                    name={detail.name}
                                    about={detail.about}
                                    feedback={detail.feedback}
                                    rating={detail.rating}
                                />                             
        
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
