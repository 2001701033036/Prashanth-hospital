import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../animation"; // Import fadeIn variants
function About(){
    const [hasAnimated, setHasAnimated] = useState(false);
    return(<section id="about">
        <div className=" md:p-10 md:mt-10 p-10 ">
            <div className="">

            <div>
            <p className="md:text-4xl text-4xl font-bold text-center pt-5 border-cyan-600 border-b-4 w-[130px] m-auto  ">About</p>

            </div>
{/* <-------------------------------------------1st IMAGE -----------------------------------------------> */}

    <div className=" md:flex  mt-10 md:mt-0 items-center justify-center  glow ">
    <motion.div
    variants={fadeIn("rigth", 0.2)} // Use fadeIn as variants
    initial="hidden"
    whileInView="show"  // This will trigger the animation when the element is in view
    viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
    className="items-center  "
    >
        
      <img className="md:w-[500px] " src="images/am.png" alt="" />
    </motion.div>

    <motion.div
    variants={fadeIn("left", 0.2)} // Use fadeIn as variants
    initial="hidden"
    whileInView="show"  // This will trigger the animation when the element is in view
    viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
     className=" text-balance  flex-col flex md:space-y-10 space-y-3 items-center justify-center ">
       <div className="md:w-[500px]">
       <p className="md:text-2xl text-xl text-center font-semibold mt-5 md:mt-0">Convenient <span className="text-cyan-600">Online Appointments</span>  & <span className="text-cyan-600">Video Consultations</span></p>
       <p className="">Easily <span className="font-semibold">book appointments</span> online with <span className="font-semibold">Prashanth Hospital</span> and connect with expert doctors through <span className="font-semibold">video consultations.</span> Our platform allows you to select preferred doctors, check availability, and schedule consultations at your convenience. Whether for routine care or urgent needs, enjoy secure, efficient healthcare from the comfort of your home. Start your <span className="font-semibold">online consultation</span> today and get the care you deserve, anytime, anywhere.</p>
       <button className=" rounded-md  w-[100px] h-[44px] bg-gradient-to-b from-cyan-300 to-cyan-700 text-white font-bold mt-5  relative group overflow-clip transition-all hover:scale-105">
            <div className=" w-full h-full flex flex-col justify-center">Learnmore</div>
            <div className="transition-all ease-out bg-cyan-900 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28">
            </div> 
            </button>
       </div>



    </motion.div>
</div>
{/* <-------------------------------------------2 IMAGE -----------------------------------------------> */}
<div className=" hidden md:flex md:block mt-10 md:mt-0 text-center items-center justify-center ">
<motion.div
variants={fadeIn("left", 0.2)} // Use fadeIn as variants
initial="hidden"
whileInView="show"  // This will trigger the animation when
//  the element is in view
viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
className="text-center text-balance items-center flex justify-center md:space-y-10 space-y-3   ">
        <div className="md:w-[500px]  flex items-center  flex-col ">
        <p className="md:text-2xl text-xl font-semibold mt-5 md:mt-0"><span className="text-cyan-600">Order Medications</span> & <span className="text-cyan-600">Upload Prescriptions</span> for Convenient Home Delivery</p>
        <p className="">Easily order <span className="font-semibold">pharmacy items</span> from the comfort of your home and have them delivered directly to your doorstep. Simply browse through our extensive range of medications and health products, and complete your order with just a few clicks.
        <br/><br/><span>You can also <span className="font-semibold">upload your doctor’s prescription</span> through our platform for a hassle-free experience. Our team will verify your prescription and ensure the right items are delivered promptly, making it easier for you to manage your healthcare needs</span></p>
        <button className=" rounded-md  w-[100px] h-[44px] bg-gradient-to-b from-cyan-300 to-cyan-700 text-white font-bold mt-5 relative group overflow-clip transition-all hover:scale-105">
            <div className=" w-full h-full flex flex-col justify-center">Learnmore</div>
            <div className="transition-all ease-out bg-cyan-900 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28">
            </div> 
            </button>
        </div>

        

    </motion.div>
    <motion.div
    variants={fadeIn("right", 0.2)} // Use fadeIn as variants
    initial="hidden"
    whileInView="show"  // This will trigger the animation when the element is in view
    viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
    className=""
    >
        <img className="md:w-[500px] " src="images/pm.png" alt="" />
    </motion.div>  
</div>
{/* <-------------------------------------------mobile view IMAGE -----------------------------------------------> */}

<div className=" block md:flex md:hidden mt-10 md:mt-0 text-center  items-center ">
<motion.div
variants={fadeIn("left", 0.2)} // Use fadeIn as variants
initial="hidden"
whileInView="show"  // This will trigger the animation when the element is in view
viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
>
        <img className="md:w-[1000px] " src="images/pm.png" alt="" />
    </motion.div>
<motion.div 
variants={fadeIn("right", 0.2)} // Use fadeIn as variants
initial="hidden"
whileInView="show"  // This will trigger the animation when the element is in view
viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
className="text-center text-balance md:space-y-10 space-y-3">
        <p className="md:text-2xl text-xl font-semibold mt-5 md:mt-0"><span className="text-cyan-600">Order Medications</span> & <span className="text-cyan-600">Upload Prescriptions</span> for Convenient Home Delivery</p>
        <p className="text-pretty">Easily order <span className="font-semibold">pharmacy items</span> from the comfort of your home and have them delivered directly to your doorstep. Simply browse through our extensive range of medications and health products, and complete your order with just a few clicks.
        <br/><br/><span>You can also <span className="font-semibold">upload your doctor’s prescription</span> through our platform for a hassle-free experience. Our team will verify your prescription and ensure the right items are delivered promptly, making it easier for you to manage your healthcare needs</span></p>
        <button className=" rounded-md  w-[100px] h-[44px] bg-gradient-to-b from-cyan-300 to-cyan-700 text-white font-bold  relative group overflow-clip transition-all hover:scale-105">
            <div className=" w-full h-full flex flex-col justify-center">Learnmore</div>
            <div className="transition-all ease-out bg-cyan-900 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28">
            </div> 
            </button>
    </motion.div>
   
    
</div>
{/* <-------------------------------------------3 IMAGE -----------------------------------------------> */}

<div className="md:flex flex-row mt-10 md:mt-0 text-center items-center justify-center ">
    <motion.div
    variants={fadeIn("right", 0.2)} // Use fadeIn as variants
    initial="hidden"
    whileInView="show"  // This will trigger the animation when the element is in view
    viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
    
    >
        <img className="  md:w-[500px]  " src="images/rm.png" alt="" />
    </motion.div>
    <motion.div
    variants={fadeIn("left", 0.2)} // Use fadeIn as variants
    initial="hidden"
    whileInView="show"  // This will trigger the animation when the element is in view
    viewport={{ once: true, amount: 0.7 }} // Proper usage of viewport
    className="text-center items-center text-balance md:space-y-10  space-y-3 ">
      <div className="md:w-[500px]">
      <p className="text-2xl font-semibold mt-5 md:mt-0">View Your <span className="text-cyan-500">Radiology Reports</span> Anytime, Anywhere</p>
        <p className="">With our app, you can easily view and access your <span className="font-bold">radiology reports</span> directly from your mobile device. Once your tests are complete, your reports are securely uploaded and available for you to view at any time. The built-in report viewer allows you to check your test results with ease, ensuring you stay informed about your health status. Get instant access to your reports and track your progress with convenience!</p>
        <button className=" rounded-md  w-[100px] h-[44px] bg-gradient-to-b from-cyan-300 to-cyan-700 text-white font-bold mt-5 relative group overflow-clip transition-all hover:scale-105">
            <div className=" w-full h-full flex flex-col justify-center">Learnmore</div>
            <div className="transition-all ease-out bg-cyan-900 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28">
            </div> 
            </button>
      </div>
    </motion.div>
    </div>

</div>
        </div>
        </section>

    )
}
export default About;