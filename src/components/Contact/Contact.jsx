import { IconBasketball, IconBehance, IconBxUser, IconEnvelopeClosed, IconInstagram, IconTelephone, IconTwitter } from "../../assets/icons/icons"
import "./Contact.css"


export default function Contact(){
    return(
        <div className="contact-form">
            <div className="py-[60px] px-[55px] lg:px-10 md:px-6 xs:px-3">
                <div className="p-[60px] border rounded-2xl bg-white lg:p-12 sm:p-6">
                    <div className="mb-16">
                        <h1 className="text-[38px] font-bold sm:text-[33px]">Let&apos;s get in touch!</h1>
                        <p>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
                    </div>
                    <div className="contact-grid">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-dark-green text-[22px]"><IconTelephone/></div>
                                <p>+012 345 6789</p>
                            </div>
                            <div className="flex items-center gap-3 mb-12">
                                <div className="text-dark-green text-[22px]"><IconEnvelopeClosed/></div>
                                <p>Hello@--app.com</p>
                            </div>
                            <h1 className="text-[21px] font-semibold">Connect with Us</h1>
                            <div className="flex items-center gap-4 mt-5">
                                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconInstagram/></div>
                                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconBasketball/></div>
                                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconBehance/></div>
                                <div className="rounded-full w-9 h-9 bg-light-green text-[20px] flex items-center justify-center"><IconTwitter/></div>
                            </div>
                        </div>
                        <div>
                            <div className="relative mb-3 xs:w-fit">
                                <input type="text" className="bg-white border outline-dark-green w-full rounded-2xl pl-16 pr-3 py-4 text-black" placeholder="Full Name" />
                                <div className="absolute left-5 border-r border-dark-green pr-2 top-[20px] text-dark-green text-[20px]"><IconBxUser/></div>
                            </div>
                            <div className="relative mb-6 xs:w-fit">
                                <input type="email" className="bg-white border outline-dark-green w-full rounded-2xl pl-16 pr-3 py-4 text-black" placeholder="Email"/>
                                <div className="absolute left-5 border-r border-dark-green pr-2 top-[20px] text-dark-green text-[20px]"><IconEnvelopeClosed/></div>
                            </div>
                            <button className="px-12 py-4 bg-dark-green text-white font-medium rounded-2xl sm:px-9 sm:py-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}