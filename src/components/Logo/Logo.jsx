import airbnb from "..//..//assets/images/airbnb.png"
import google from "..//..//assets/images/google.png"
import amazon from "..//..//assets/images/amazon.png"
import microsoft from "..//..//assets/images/microsoft.png"
import fedex from "..//..//assets/images/fedex.png"
import hubspot from "..//..//assets/images/hubspot.png"

export default function Logo(){
    return(
        <div className="logo">
            <div className="px-16 mb-16 md:px-12 sm:px-5 md:mb-0">
                <hr />
                <div className="flex justify-between gap-6 items-center flex-wrap py-10 md:justify-center">
                    <img className="sm:w-[90px]" src={airbnb} alt="Airbnb logo" width={110}/>
                    <img className="sm:w-[90px]" src={google} alt="Google Logo" width={110} />
                    <img className="sm:w-[90px]" src={amazon} alt="Amazon Logo" width={110} />
                    <img className="sm:w-[90px]" src={microsoft} alt="Microsoft Logo" width={110} />
                    <img className="sm:w-[90px]" src={fedex} alt="Fedex Logo" width={110} />
                    <img className="sm:w-[90px]" src={hubspot} alt="Hubspot Logo" width={110}/>
                </div>
                <hr />
            </div>
        </div>
    )
}