
function Testing() {

    return (
<section>
  {/* FIRST SLIDE */}
<div className="relative md:mb-96 hidden md:block">
  <div className="sticky top-0 h-screen  flex flex-col items-center justify-center bg-gradient-to-b   from-blue-500 to-slate-300"> 
 
  </div>
  {/* SECOND SLIDE */}
  <div className="sticky top-0 h-screen flex flex-col item-center justify center items-center"> 
    <img className="w-1/2 items-center justify-center" src="../images/am.png" />

   
  </div>
{/* THIRD SLIDE */}
<div className="sticky top-0 h-screen flex flex-col item-center justify center items-center  "> 
  <img className="w-1/2 items-center justify-center ml-2" src="../images/rm.png"
  />

</div>
<div className="sticky top-0 h-screen flex flex-col item-center justify center items-center"> 
  <img className="w-1/2 items-center justify-center mr-3" src="../images/pm.png"
  />

</div>

</div>



<div className="relative md:mb-96 md:hidden block">
        <div className=" sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-600 to-slate-300">
          {/* First slide content */}
        </div>

        {/* SECOND SLIDE */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center ">
          <img
            src="../images/am.png"
            alt="Second Slide"
            className=" h-full object-cover md:w-[1500px] lg:w-[2000px] max-w-full"
          />
        </div>

        {/* THIRD SLIDE */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <img
            src="../images/rm.png"
            alt="Third Slide"
            className="w-full h-full object-cover md:w-[1500px] lg:w-[2000px] max-w-full"
          />
        </div>

        {/* FOURTH SLIDE */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <img
            src="../images/pm.png"
            alt="Fourth Slide"
            className="w-full h-full object-cover md:w-[1500px] lg:w-[2000px] max-w-full"
          />
        </div>
      </div>
</section>


    )
}
export default Testing;