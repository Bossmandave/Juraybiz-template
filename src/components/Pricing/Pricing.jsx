/* eslint-disable react/prop-types */
import './Pricing.css'
import { PricingDetails } from './PricingDetails'

function PricingCard({type, price , description, classList}){
    return(
        <div className={`${classList} border  shadow-sm rounded-xl px-6 py-10`}>
            <h3 className="text-[21px] mb-2">{type}</h3>
            <div><span className="font-bold text-[50px] md:text-[45px] sm:text-[40px]">{price}</span> /month</div>
            <p className="mb-4">{description}</p>
            <div className="mb-6">
                <ol>
                    <li>Write feature detail here</li>
                    <li>Write feature detail here</li>
                    <li>Write feature detail here</li>
                </ol>
            </div>
            <button className="w-full bg-light-green font-semibold py-2 text-dark-green rounded-2xl">Get Started</button>
        </div>
    )
}

export default function Pricing(){
    return(
        <div className="pricing">
            <div className="py-20 my-20 md:my-0 ">
                <div className="text-center mb-6 px-3">
                    <h1 className="text-[38px] font-bold mb-2 sm:text-[33px]">Pick Your Perfect Plan</h1>
                    <p>Find the perfect plan for your business with our flexible pricing options.</p>
                </div>
                <div className="price-grid px-16 xl:px-12 lg:px-10 sm:px-6 xs:px-3">
                    {PricingDetails.map((detail)=>{
                        return(
                            <PricingCard
                                key={detail.id}
                                type={detail.type}
                                price= {detail.price}
                                classList={detail.id === 2 ? detail.classList : null }
                            />                             
                        )
                    })}   
                </div>
            </div>
        </div>
    )
}