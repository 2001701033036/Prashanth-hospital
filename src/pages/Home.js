import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../animation"; // Import fadeIn variants
import { AppStoreButton, GooglePlayButton } from 'react-mobile-app-button';


function Home() {
    // const [hasAnimated, setHasAnimated] = useState(false); // Track animation state
    const [scrollY, setScrollY] = useState(0); // Track scroll position

    const APKUrl = "https://play.google.com/store/apps/details?id=com.prashanth_hospital_patientapp&pcampaignid=web_share";
    const APKappstore = "https://apps.apple.com/in/app/prashanth-hospitals/id6471096372";
  // Handle scroll event to hide elements
  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-screen "> 
    <div class="area w-full h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] -z-10 ">
  <ul class="circles relative w-full h-full overflow-hidden">
    <li class="circle circle1"></li>
    <li class="circle circle2"></li>
    <li class="circle circle3"></li>
    <li class="circle circle4"></li>
    <li class="circle circle5"></li>
    <li class="circle circle6"></li>
    <li class="circle circle7"></li>
    <li class="circle circle8"></li>
    <li class="circle circle9"></li>
    <li class="circle circle10"></li>
  </ul>
</div>

<div className=" md:items-end">
<div className="md:flex md:w-auto justify-end ">

            <motion.div 
                variants={fadeIn("down", 0.2)} // Use fadeIn as variants
                initial="hidden"
                whileInView="show"  // This will trigger the animation when the element is in view
                viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
                className="md:p-10 md:block hidden"
            >
                
               <div className=" w-[500px]">
               <p className="md:text-4xl text-2xl font-bold text-white md:text-start md:pt-56 pt-28 font-serif">
                Simplify Healthcare with <br />Prashanth Hospital's App!
                </p>
                <p className="md:text-start text-wrap mx-auto text-white  p-2 md:p-0  mt-5">
                Book appointments online, schedule video consultations, view reports, order pharmacy items, and track billing records – all in one app.
                Download Prashanth Hospital App today and experience convenience at your fingertips!
                </p>
               </div>
                
                

                <div className="md:flex   md:gap-10 gap-2 md:pt-8 pt-10 flex items-center justify-center  ">
                
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
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.2)} 
                initial="hidden" 
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }} // Correct usage of viewport prop
                className="flex md:flex-col mb-10 "
            >
                <div className="md:flex flex rounded md:mt-24 mt-10 pl-5 md:pl-0 relative ">

                   {/* FIRST IMAGE */}
                   <div className="relative md:w-[350px] xl:w-[3500] w-44  h-full animate-bounceSlow md:mt-0 md:mr-0  mt-60"
                    style={{zIndex: -1,
                        postion:"",
                        transform: `translateY(-${scrollY * 0.3}px)`, // Move the image up as you scroll
                        opacity: `${Math.max(2 - scrollY / 500, 0)}`, // Fade out as you scroll
                        transition: "opacity 0.3s ease-out", // Smooth opacity transition
                    }}>
                        
                        <img
                            src="../images/fmf.png"
                            alt="Image 1"
                            className="absolute md:top-10  hover-home left-0 bottom-20 md:bottom-0  object-cover rounded-lg  "
                        />
                    </div>

                    {/* SECOND IMAGE */}
                    <div className="relative md:w-[350px] xl:w-[3500] w-44  h-full animate-bounceReverse md:mt-0 mt-60 md:ml-0 "
                    style={{zIndex: -1,
                        postion:"",
                        transform: `translateY(-${scrollY * 0.3}px)`, // Move the image up as you scroll
                        opacity: `${Math.max(2 - scrollY / 500, 0)}`, // Fade out as you scroll
                        transition: "opacity 0.3s ease-out", // Smooth opacity transition
                    }}>
                        
                        <img
                            src="../images/hm.png"
                            alt="Image 2"
                            className="absolute md:top-10  hover-home left-0 bottom-20 md:bottom-0  object-cover rounded-lg  "
                        />
                    </div>
                  
                    {/* <img src="images/e.png" alt="Service Image 2" className="w-1/3 hover-home " />
                    <img src="images/f.png" alt="Service Image 3" className="w-1/3 hover-home hidden md:block" /> */}
                </div>
            </motion.div>
            
            </div>
            

   {/* MOBILE VIEW */}
   
            <motion.div 
                variants={fadeIn("down", 0.2)} // Use fadeIn as variants
                initial="hidden"
                whileInView="show"  // This will trigger the animation when the element is in view
                viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
                className="md:hidden block items-center pt-28 mb-10 "
            >
                <p className="text-2xl font-bold text-white font-serif">
                Simplify Healthcare with <br />Prashanth Hospital's App!
                </p>
                <p className=" text-wrap mx-auto text-white p-2 ">
                Book appointments online, schedule video consultations, view reports, order pharmacy items, and track billing records – all in one app.
                Download Prashanth Hospital App today and experience convenience at your fingertips!
                </p>

                <div className=" gap-2 pt-11  flex items-center justify-center  ">
                
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
            </motion.div>

           
</div>

        </section>
    );
}

export default Home;
