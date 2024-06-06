/* eslint-disable react/prop-types */


function MetricCard({value , description}){
    return(
        <div className="text-center border-b-4 border-orange-300 shadow-xl w-[250px] py-10 rounded-t-3xl bg-white">
            <h1 className="font-bold text-[35px]">{value}</h1>
            <p>{description}</p>
        </div>
    )
}
export default function Metrics(){
    return(
        <div className="metrics">
            <div className="py-20">
                <div className="text-center mb-6 px-3">
                    <h1 className="text-[38px] font-bold mb-2 sm:text-[33px]">Our Metrics Tell the Story</h1>
                    <p>Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.</p>
                </div>
                <div className="flex items-center justify-center px-10 mt-16 flex-wrap gap-8">
                    <MetricCard
                    value="10k+"
                    description="Website Launched"
                    />
                    <MetricCard
                    value="931k+"
                    description="Projects created"
                    />
                    <MetricCard
                    value="240k+"
                    description="New users joined"
                    />
                    <MetricCard
                    value="12k+"
                    description="Teams used"
                    />
                </div>
            </div>
            
        </div>
    )
}