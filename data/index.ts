export const images = [
    "/assets/images/proj1.png",
    "/assets/images/proj2.png",
    "/assets/images/proj3.png",
    "/assets/images/proj4.png",
    "/assets/images/proj5.png",
    "/assets/images/proj6.png",
    "/assets/images/proj7.png",
    "/assets/images/proj8.png",
    "/assets/images/proj9.png",
    "/assets/images/proj10.png",
    "/assets/images/6.jpg",
    "/assets/images/proj11.png",
    "/assets/images/proj12.png",
    "/assets/images/proj13.png",
    "/assets/images/proj14.png",
    "/assets/images/proj15.png",
    "/assets/images/proj16.png",
    "/assets/images/proj17.png",
    "/assets/images/proj18.png",
    "/assets/images/proj20.png",
    "/assets/images/proj21.png",
    "/assets/images/proj22.png",
    "/assets/images/proj23.png",
    "/assets/images/proj24.png",
    "/assets/images/proj21.png",
    "/assets/images/proj19.png",
  ]

  export const hero = [
    "/assets/images/6.jpg",
    "/assets/images/mobile8.png",
    "/assets/images/mobile9.png",
    "/assets/images/mobile10.png",
    "/assets/images/6.jpg",
]

// export const hero = [
//     "/assets/images/hero3.png",
//     "/assets/images/hero1.png",
//     "/assets/images/hero2.png",
//     "/assets/images/hero4.png",
//     "/assets/images/hero5.png",
// ]

export const work = [
  {
    id:4,
    src1: '/assets/images/mobile6.png',
    src2: '/assets/images/proj1.png',
    title: "Essentials Interior Design",
    desc: "A sleek and modern website for an interior design company, showcasing their latest work with a visually rich portfolio that highlights their expertise in transforming spaces.",
    href: '',
  },
  {
    id:1,
    src1: '/assets/images/mobile1.png',
    src2: '/assets/images/proj5.png',
    title: "YA Solutions Inc",
    desc: "A dynamic digital marketing agency website designed to showcase their services, case studies, and innovative strategies for helping businesses grow online.",
    href: 'https://www.yasolutionsinc.com/',
  },
  {
    id:2,
    src1: '/assets/images/mobile3.png',
    src2: '/assets/images/proj6.png',
    title: "Growbyte Marketing",
    desc: "A results-driven marketing website tailored for car dealerships, featuring lead-generation tools and data-driven solutions to help dealerships attract and convert customers.",
    href: 'https://growbyte.ca/',
  },
  {
    id:3,
    src1: '/assets/images/mobile7.png',
    src2: '/assets/images/proj23.png',
    title: "The Systems Academy",
    desc: "A full-fledged educational platform offering in-depth courses on NBA sports betting, complete with interactive modules, expert insights, and a structured learning experience.",
    href: 'https://systems-academy.vercel.app/',
  },
]


export const navItems = [
    {
        id:1,
        title: 'Pricing',
        href:"/pricing"
    },
    {
        id:2,
        title: 'Gallery',
        href:"/work"
    },
]

export const pricingData = [
    {
      id:1,
      title: 'Lite',
      desc: "Perfect for businesses needing a simple, static one-page website to establish an online presence.",
      price: "$400-$800",
      rate: '/month',
      link:'https://buy.stripe.com/14kaGjaTC3RF1hK6ou',
      packageList: ["Mobile Responsiveness",  "Limited requests and revisions", "Project management in Jira", "Live Progress Updates", "One-page static site", "Free software support"]
    },
    {
        id:1,
        title: 'Core',
        desc: "For businesses needing a multi-page website with enhanced features for a more dynamic online presence.",
        price: "$650-$1000",
        rate: '/month',
        link:'https://buy.stripe.com/eVabKnbXG4VJ5y0aEO',
        packageList: ["Mobile Responsiveness", "Unlimited requests and revisions","Project management in Jira", "Live Progress Updates", "Software support", "Up to 10 pages", "Free software support"]
    },
    {
        id:2,
        title: 'Business',
        desc: "Designed for businesses needing a dynamic website with eCommerce capabilities and seamless third-party integrations.",
        price: "$1200-$2000",
        rate: '/month',
        link:'https://buy.stripe.com/eVaeWz2n673RbWo9AI',
        packageList: ["Mobile Responsiveness", "Unlimited requests and revisions", "Project management in Jira", "Unlimited pages", "Free software support", "Accept payments","Standard eCommerce", "Standard manager platform"]
    },
    {
        id:4,
        title: 'Business Elite',
        desc: "Designed for companies needing to manage everything from products and content to analytics and operations.",
        price: "$2000-$4000",
        rate: '/month',
        link:'https://buy.stripe.com/3csdSvaTCbk7bWoeV5',
        packageList: ["Mobile Responsiveness", "Unlimited requests and revisions", "Project management in Jira", "Unlimited pages", "Free software support", "Accept payments", "Advanced eCommerce", "Advanced manager platform", "AI-tools"]
    }
]


export const pricingChart = [
    {
      id:1,
      name:'Weekly video Calls',
      values: [true, true, true, true]
    },
    {
      id:2,
      name:'Live progress updates',
      values: [true, true, true, true]
    },
    {
      id:3,
      name:'Project Management in Jira',
      values: [true, true, true, true]
    },
    {
      id:4,
      name:'Unlimited Requests',
      values: [true, true, true, false]
    },
    {
      id:5,
      name:'Software support',
      values: [true, true, true, true]
    },
    {
      id:6,
      name:'SEO optimization',
      values: [true, true, true, true]
    },
    {
      id:7,
      name:'Custom forms',
      values: [true, true, true, true]
    },
    {
      id:8,
      name:'Marketing tools',
      values: [true, true, true, true]
    },
    {
      id:9,
      name:'Login/Signup functionality',
      values: [true, true, true, false]
    },
    {
      id:10,
      name:'Email messaging',
      values: [true, true, true, false]
    },
    {
      id:11,
      name:'Live chat',
      values: [true, true, true, false]
    },
    {
      id:12,
      name:'Accept Payments',
      values: [true,true,false,false]
    },
    {
      id:13,
      name:'Recurring Payments',
      values: [true,true,false,false]
    },
    {
      id:14,
      name:'Shipping and tax management',
      values: [true,true,false,false]
    },
    {
      id:15,
      name:'Personalization features',
      values: [true,false,false,false]
    },
    {
      id:16,
      name:'Third-party integrations',
      values: [true,true,false,false]
    },
    {
      id:17,
      name:'Content management',
      values: [true,true,false,false]
    },
    {
      id:18,
      name:'E-commerce management',
      values: [true,true,false,false]
    },
    {
      id:19,
      name:'Analytics and reports',
      values: [true,false,false,false]
    },
    {
      id:20,
      name:'AI tools',
      values: [true,false,false,false]
    },
  ]


  // "use client";
  
  // import { useEffect, useRef } from "react";
  // import Image from "next/image";
  
  // // Image data (5 rows of 4 images, each with a speed factor)
  // const images = [
  //   [
  //     { src: "/assets/images/hero3.png", speed: -0.3 },
  //     { src: "/assets/images/hero2.png", speed: 0.1 },
  //     { src: "/assets/images/proj24.png", speed: 0.1 },
  //     { src: "/assets/images/proj1.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //   ],
  //   [
  //     { src: "/assets/images/proj1.png", speed: -0.05 },
  //     { src: "/assets/images/proj1.png", speed: 0.05 },
  //     { src: "/assets/images/proj1.png", speed: 0.05 },
  //     { src: "/assets/images/proj1.png", speed: 0.05 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
      
  //   ],
  //   [
  //     { src: "/assets/images/hero3.png", speed: -0.3 },
  //     { src: "/assets/images/hero2.png", speed: 0.1 },
  //     { src: "/assets/images/proj24.png", speed: 0.1 },
  //     { src: "/assets/images/proj1.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //   ],
  //   [
  //     { src: "/assets/images/proj8.png", speed: -0.05 },
  //     { src: "/assets/images/proj8.png", speed: 0.05 },
  //     { src: "/assets/images/proj8.png", speed: 0.05 },
  //     { src: "/assets/images/proj8.png", speed: 0.05 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //     { src: "/assets/images/proj8.png", speed: 0.1 },
  //   ],
  //   // [
  //   //   { src: "/assets/images/proj8.png", speed: 0.14 },
  //   //   { src: "/assets/images/proj8.png", speed: 0.24 },
  //   //   { src: "/assets/images/proj8.png", speed: -0.34 },
  //   //   { src: "/assets/images/proj8.png", speed: 0.44 },
  //   // ],
  // ];
  
  // // Floating images (absolute, randomly placed)
  // const floatingImages = [
  //   { src: "/assets/images/mobile7.png", speed: -0.05, top: "5%", left: "25%" },
  //   { src: "/assets/images/mobile7.png", speed: -0.05, top: "20%", left: "60%" },
  //   { src: "/assets/images/mobile7.png", speed: -0.05, top: "5%", left: "40%" },
  //   { src: "/assets/images/mobile7.png", speed: -0.05, top: "12%", left: "70%" },
  //   { src: "/assets/images/mobile7.png", speed: -0.05, top: "5%", left: "85%" },
  // ];
  
  // const ParallaxGallery = () => {
  //   // Using useRef for image and floating image elements
  //   const imageRefs = useRef<(HTMLDivElement | null)[][]>(
  //     Array.from({ length: 5 }, () => Array(4).fill(null))
  //   );
  //   const floatingRefs = useRef<(HTMLDivElement | null)[]>(Array(5).fill(null));
  
  //   useEffect(() => {
  //     let lastScrollY = window.scrollY;
  //     let ticking = false; // To throttle the scroll event
  
  //     const updateParallax = () => {
  //       if (!ticking) {
  //         window.requestAnimationFrame(() => {
  //           const scrollY = window.scrollY;
  
  //           // Move grid images
  //           imageRefs.current.forEach((column, colIndex) => {
  //             column.forEach((img, rowIndex) => {
  //               if (img) {
  //                 const speed = images[colIndex][rowIndex].speed;
  //                 img.style.transform = `translateY(${scrollY * speed}px)`;
  //               }
  //             });
  //           });
  
  //           // Move floating images
  //           floatingRefs.current.forEach((img, index) => {
  //             if (img) {
  //               const speed = floatingImages[index].speed;
  //               img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  //             }
  //           });
  
  //           lastScrollY = scrollY;
  //           ticking = false;
  //         });
  
  //         ticking = true;
  //       }
  //     };
  
  //     const handleScroll = () => {
  //       updateParallax();
  //     };
  
  //     window.addEventListener("scroll", handleScroll);
  
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  
  //   return (
  //     <div className="relative w-full overflow-hidden h-[170vh] bg-gray-400 mt-28">
  //       {/* Floating Images */}
  //       {/* {floatingImages.map(({ src, top, left }, index) => (
  //           <Image src={src} alt={`Floating ${index}`} key={index}
  //           ref={(el) => { floatingRefs.current[index] = el; }} 
  //           style={{ top, left }} width={200} height={200}  className="absolute rounded-lg shadow-lg  will-change-transform z-40" priority />
  //       ))} */}
  
  //       {/* Grid of images */}
  //       <div className="flex justify-center gap-6">
  //         {images.map((column, colIndex) => (
  //           <div key={colIndex} className="flex flex-col gap-6 will-change-transform" ref={(el) => { imageRefs.current[colIndex][0] = el; }}>
  //             {column.map(({ src }, rowIndex) => (
  //                 <Image src={src} key={rowIndex}
  //                  alt={`Parallax ${colIndex}-${rowIndex}`} width={1000} height={1000} className="relative rounded-lg shadow-lg overflow-hidden will-change-transform" priority />
             
  //             ))}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default ParallaxGallery;
  