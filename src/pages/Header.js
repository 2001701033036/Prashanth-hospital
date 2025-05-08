
import { useState,useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
   const [activeLink, setActiveLink] = useState("home");

   // Function to handle link click
   const handleClick = (link) => {
      setActiveLink(link); // Update active link on click
   };

   // Set up Intersection Observer to detect when sections are in view
   useEffect(() => {
      const sections = document.querySelectorAll("section"); // All sections
      const options = {
         threshold: 0.2, // Trigger when 50% of section is in view
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveLink(entry.target.id); // Set active link to the ID of the section
            }
         });
      }, options);

      // Observe each section
      sections.forEach((section) => {
         observer.observe(section);
      });

      return () => {
         observer.disconnect(); // Clean up observer on component unmount
      };
   }, []);
   const [toggleMenu, setToggleMenu] = useState(false)

    return (<header className="flex justify-between px-5 w-full fixed h-auto items-center shadow-md m-h:100vh bg-white z-50 font-semibold">
            {/* LEFTSIDE NAME AND IMAGE */}
            <div className="flex ">
                <a href="" className="text-2xl text-cyan-600 px-2 font-bold hidden md:block">Prashanth Hospital</a>
                <img src="images/logoph.png" alt="image" className="w-9 h-10 rounded-full
                " />
            </div>
            {/* RIGHTSIDE NAVIGATION */}
            <nav className="hidden md:block">
                <ul className="flex gap-5  nav-head">
                    <li>
                        <a
                        href="#home" 
                        className={`${activeLink === "home" ? " text-cyan-600 font-bold border-b-2 border-text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("home")}>
                     Home</a>
                    </li>   

                    <li>
                        <a href="#about"  className={`${activeLink === "about" ? "  text-cyan-600 font-bold border-b-2 border-text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("about")}>
                     About</a>
                    </li>

                    {/* <li>
                    <a href="#gallery" className={`${activeLink === "gallery" ? "  text-cyan-600 font-bold border-b-2 border-text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("gallery")}>Gallery</a>
                    </li> */}
                     {/* <li className='hover-nav'>
                    <NavLink to="/services"className={`${activeLink === "profile" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("profile")}>Service</NavLink>
                    </li>  */}
                     <li>
                    < a href="#testimonials" className={`${activeLink === "testimonials" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("testimonials")}>
                     Testimonials</a>

                    </li> 
                </ul>

            </nav>

            {/* mobile nav */}

            {toggleMenu && <nav className="block md:hidden sticky text-black ">
                <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col gap-5 items-start  mobile-nav ">
                <li>
                        <a
                        href='#home' className={`${activeLink === "" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("home")}>
                     Home</a>
                    </li>   

                    <li>
                        <a href="#about"  className={`${activeLink === "about" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("about")}>
                     About</a>
                    </li>

                    {/* <li>
                    <a href="#gallery" className={`${activeLink === "profile" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("gallery")}>Gallery</a>
                    </li> */}
                     {/* <li className='hover-nav'>
                    <NavLink to="/services"className={`${activeLink === "profile" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("profile")}>Service</NavLink>
                    </li>  */}
                     <li>
                    < a href="#testimonials" className={`${activeLink === "testimonials" ? " font-bold border-b-2 text-cyan-600" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:text-cyan-600 px-2`}
                  onClick={() => handleClick("testimonials")}>
                     Testimonials</a>

                    </li>  
                </ul>

            </nav>}
                    <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className="text-black h-5"/></button>
        </header>

    )
}
export default Header;