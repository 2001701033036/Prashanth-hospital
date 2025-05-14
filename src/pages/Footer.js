import logoph from "../../src/asset/logoph.png"
import { AppStoreButton,GooglePlayButton } from "react-mobile-app-button";
function Footer(){
    const APKUrl = "https://play.google.com/store/apps/details?id=com.prashanth_hospital_patientapp&pcampaignid=web_share";
    const APKappstore = "https://apps.apple.com/in/app/prashanth-hospitals/id6471096372";
    return(
        <section id="footer" className="  md:flex items-center flex-col  md:px-6 md:pt-[250px]">
      

       <div className="bg-neutral-600 rounded-md justify-items-center w-full max-w-4xl  md:space-y-12  md:px-28  md:block hidden">
        <img src={logoph} className=" "/>
        <p className="md:text-4xl text-xl font-bold text-cyan-500 font-serif text-nowrap">Prashanth Hospital</p>
        <p className="text-white md:text-2xl ">Your Wellness, Our Priority</p>

        <div className="md:flex  flex-row  md:gap-6  md:pb-8 ">                 
                        <AppStoreButton
                            url={APKappstore}
                            theme={"dark"}
                            className={"custom-style"} />
                            <div className="text-nowrap">
                            <GooglePlayButton
                            url={APKUrl}
                            theme={"dark"}
                            className={"custom-style"} />
                            </div>
                          
                    </div>

            </div>

{/* MOBILE */}
           <div className="p-2 ">
           <div className="md:hidden block bg-neutral-600 shadow-smw-full py-10 rounded-xl  ">

            
<div className=" justify-items-center grid grid-rows-2 ">
<img src={logoph} className="animate-pulse "/>
<p className=" text-xl font-bold text-cyan-500 font-serif">Prashanth Hospital</p>
<p className="text-white md:text-2xl ">Your Wellness, Our Priority</p>

<div className="md:flex  flex-row pt-5 space-y-3">                 
            <AppStoreButton
                url={APKappstore}
                theme={"dark"}
                className={"custom-style"} />
                <div className="text-nowrap">
                <GooglePlayButton
                url={APKUrl}
                theme={"dark"}
                className={"custom-style"} />
                </div>
              
        </div>

</div>
</div>
           </div>
       

        </section>
    )
}
export default Footer;