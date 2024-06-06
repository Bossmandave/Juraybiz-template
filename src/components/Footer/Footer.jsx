import { IconBxlLinkedin, IconGithub, IconInstagram, IconYoutube } from "../../assets/icons/icons"


export default function Footer(){
    return(
        <div className="footer">
            <div className="bg-black text-white px-10 py-5 flex items-center justify-between sm:justify-center sm flex-wrap gap-4">
                <p className="text-[14px]">© 2023 --&apos;s Landing Page Ui Kit. </p>
                <div className="flex items-center gap-4 ">
                    <div className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center"><IconYoutube/></div>
                    <div className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center"><IconInstagram/></div>
                    <div className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center"><IconGithub/></div>
                    <div className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center"><IconBxlLinkedin/></div>
                </div>
            </div>
        </div>
    )
}