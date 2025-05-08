// // function Testimonials(){

// //     const content={
// //         testi:[
// //         {
// //          name:"Ramya",
// //          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",   
// //          image:"https://loremfaces.net/96/id/1.jpg",
// //         },
// //         {
// //             name:"Henson",
// //             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",   
// //             image:"https://loremfaces.net/96/id/2.jpg",
// //            },
        
// //            {
// //             name:"Barath",
// //             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",   
// //             image:"https://loremfaces.net/96/id/3.jpg",
// //            },
// //            {
// //             name:"JV",
// //             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",   
// //             image:"https://loremfaces.net/96/id/4.jpg",
// //            },
// //         ]    
// //     }

// // return(<section id="testimonials" className="pt-1 justify-center items-center w-full bg-slate-200">   
// // <p className="font-bold md:text-6xl text-5xl  md:mt-20">Testimonials</p>
// // <div className="justify-center items-center ">
// // <div className="grid md:grid-cols-2  gap-5 rounded-2xl md:px-20  px:2 mt-8 justify-center items-center w-auto h-auto">   

// // { content.testi.map((test) => (
         
// //     <div className="bg-zinc-100  md:p-10 p-5  md:space-y-10 space-y-5 ">   
// //         <p> {test.description}</p>
// //         <div className="flex gap-3 font-mono font-semibold">
// //             <img className="w-10 h-10 rounded-full space-y-10 " src={test.image} alt=""/>
// //             <p>{test.name}</p>  
// //         </div>      
// //     </div>
// //     ))}
    
// // </div>
// // </div>

// //         </section>
// //     )
// // }
// // export default Testimonials;

// "use client";
// import React from "react";
// import { AnimatedTestimonials } from "../component/ui/animated-testimonial";

// export function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//       name: "Sarah Chen",
//       designation: "Product Manager at TechFlow",
//       src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       name: "Michael Rodriguez",
//       designation: "CTO at InnovateSphere",
//       src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       name: "Emily Watson",
//       designation: "Operations Director at CloudScale",
//       src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//       name: "James Kim",
//       designation: "Engineering Lead at DataPro",
//       src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//       name: "Lisa Thompson",
//       designation: "VP of Technology at FutureNet",
//       src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   return(
//     <section id="testimonials" className="scroll-mt-10">
//         <h2 className="md:text-6xl text-4xl font-semibold">Testimonial</h2>
//   <AnimatedTestimonials testimonials={testimonials} />

// </section> 
//   )
// }

"use client";

import React from "react";
import { InfiniteMovingCards } from "../component/ui/animated-testimonial";

export function InfiniteMovingCardsDemo() {
  return (
   <section id="testimonials" className="scroll-mt-14">
    <div className="">
    <p className="text-4xl font-bold">Testimonials</p>
     <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
    </div>
   </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
