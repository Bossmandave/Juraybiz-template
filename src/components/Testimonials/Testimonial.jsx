/* eslint-disable react/prop-types */
import "./Testimonial.css"
import user1 from "..//..//assets/images/user1.png"
import user2 from "..//..//assets/images/user2.png"
import user3 from "..//..//assets/images/user3.png"

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
                        <TestimonialCard
                        image={user1}
                        name="Sarah K."
                        about="UX Designer @Brello"
                        feedback="I was looking for a way to streamline my design process and the --’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"
                        rating="⭐⭐⭐⭐⭐"
                        />
                        <TestimonialCard
                        image={user2}
                        name="Michael L."
                        about="Creative Director @Yo"
                        feedback="The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"
                        rating="⭐⭐⭐⭐⭐"
                        />
                        <TestimonialCard
                        image={user3}
                        name="Lauren M."
                        about="UI Designer @Boo"
                        feedback="--’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."
                        rating="⭐⭐⭐⭐⭐"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}