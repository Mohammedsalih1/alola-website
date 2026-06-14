// "use client"
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { FaFacebook, FaTiktok} from 'react-icons/fa';
// import Image from 'next/image';

// const HeroSection = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navlinks = [
//     {
//       text: "عني",
//       url: "#about"
//     }, 
//     {
//       text :'خدماتي',
//        url: "#services"
//     }, 
//     {text :'اعمالي', url: "#work"}, 
//     {text :'اراء العملاء', url: "#clients"},
//      {text :'تواصل معي', url: "#contact"}
//   ]

//   return (
//     <div style={{ fontFamily: "'Cairo', sans-serif" }} className="min-h-screen bg-[#1a0533] text-white selection:bg-[#f9d452] selection:text-[#1a0533]" dir="rtl">
//       {/* Navbar */}
//       <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-50">
//         <div className="text-2xl font-bold text-[#f9d452]">
//             <Image src="/logo2.png" width={110} height={50}/>
//         </div>
//         {/* Desktop Menu */}
//       <div className="hidden md:flex gap-8 text-[16px] font-medium">
//         <a href="#" className="text-[#f9d452] relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-[#f9d452]">
//           الرئيسية
//         </a>
//         {/* الروابط الأخرى مع تأثير الخط السفلي المتحرك من اليمين لليسار */}
//         {navlinks.map((item) => (
//           <a 
//             key={item}
//             href={item.url} 
//             className="text-white hover:text-[#f9d452] relative pb-1 transition-colors duration-300 group/nav"
//           >
//             {item.text}
//             <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#f9d452] transition-all duration-300 group-hover/nav:w-full"></span>
//           </a>
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white hover:text-[#f9d452]  cue transition-colors duration-300 p-2"
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown (تأثير فتح وإغلاق سلس بدون اختفاء مفاجئ) */}
//           <div className={`absolute top-20 left-6 right-6 bg-[#2d0a54] p-5 rounded-2xl flex flex-col gap-2 md:hidden shadow-2xl border border-white/10 z-50 transition-all duration-300 ease-in-out ${
//             isMenuOpen 
//               ? 'opacity-100 translate-y-0 pointer-events-auto' 
//               : 'opacity-0 -translate-y-4 pointer-events-none'
//           }`}>
//             <a href="#" className="text-[#f9d452] bg-white/5 pr-4 py-2.5 rounded-xl font-medium transition-all">
//               الرئيسية
//             </a>
            
//             {navlinks.map((item, indx) => (
//               <a 
//                 key={indx}
//                 href={item.url}
//                 className="text-white hover:text-[#f9d452] hover:bg-white/5 pr-2 hover:pr-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
//               >
//                 {item.text}
//               </a>
//             ))}
//           </div>
//         {/* Desktop Menu */}
//         {/* <div className="hidden md:flex gap-8 text-[16px] font-medium">
//           <a href="#" className="text-[#f9d452] border-b-2 border-[#f9d452] pb-1">الرئيسية</a>
//           <a href="#" className="hover:text-[#f9d452] transition-colors">عني</a>
//           <a href="#" className="hover:text-[#f9d452] transition-colors">خدماتي</a>
//           <a href="#" className="hover:text-[#f9d452] transition-colors">اعمالي</a>
//           <a href="#" className="hover:text-[#f9d452] transition-colors">اراء العملاء</a>
//           <a href="#" className="hover:text-[#f9d452] transition-colors">تواصل معي</a>
//         </div> */}

//         {/* Mobile Menu Button */}
//         {/* <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div> */}

//         {/* Mobile Dropdown */}
//         {/* {isMenuOpen && (
//           <div className="absolute top-20 left-6 right-6 bg-[#2d0a54] p-6 rounded-2xl flex flex-col gap-4 md:hidden shadow-2xl border border-white/10">
//             <a href="#" className="text-[#f9d452]">الرئيسية</a>
//             <a href="#">عني</a>
//             <a href="#">خدماتي</a>
//             <a href="#">اعمالي</a>
//             <a href="#">اراء العملاء</a>
//             <a href="#">تواصل معي</a>
//           </div>
//         )} */}
//       </nav>

//       {/* Hero Content */}
//       <div className="container mx-auto px-6 pt-10 pb-20 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-100px)]">
        
//         {/* Right Side: Text Content */}
//         <div className="w-full md:w-1/2 flex flex-col items-start text-right z-10 order-2 md:order-1 mt-12 md:mt-0">
//           <h2 className="text-[#f9d452] text-3xl md:text-4xl font-bold mb-2">مرحباً، أنا عُلا ✌️</h2>
//           <h1 className="text-3xl md:text-5xl font-bold mb-6">مصممة جرافيك</h1>
          
//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
//             أصمم هويات بصرية ومنشورات سوشال ميديا تساعد المشاريع على الظهور بشكل احترافي.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-12">
//             <a href='#work' className="bg-[#f9d452] cursor-pointer text-[#1a0533] px-10 py-3 rounded-lg font-bold hover:bg-[#e2bc3d] transition-all transform hover:scale-105 shadow-lg shadow-[#f9d452]/20">
//               تصفح اعمالي
//             </a>
//             <a href='#contact' className="border-2 cursor-pointer border-[#f9d452] text-[#f9d452] px-8 py-3 rounded-lg font-bold hover:bg-[#f9d452] hover:text-[#1a0533] transition-all">
//               تواصل معي
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-5">
//             <a href="https://web.facebook.com/profile.php?id=61577585291365" target='_blank'  className="text-white hover:text-[#f9d452] transition-colors"><FaFacebook size={22} /></a>
//             <a href="#" target='_blank' className="text-white hover:text-[#f9d452] transition-colors"><FaTiktok size={22} /></a>
          
//           </div> 
//         </div>

//         {/* Left Side: Image and Floating Icons */}
//         <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
//           {/* Main Character Image Placeholder */}
//           {/* <div className="relative z-10 w-64 h-64 md:w-[450px] md:h-[450px]">
//             <img 
//               src="https://via.placeholder.com/600x600/1a0533/f9d452?text=3D+Character" // Replace with your 3D character image
//               alt="Designer Avatar" 
//               className="w-full h-full object-contain"
//             />
//           </div> */}
//           <div className="relative z-10 w-64 h-[350px] md:w-[380px] md:h-[500px] mx-auto group">
      
//             {/* الإطار الخلفي (الشكل الزخرفي) */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 opacity-80 shadow-xl -z-10"></div>
            
//             {/* إطار إضافي بلمسة زجاجية (Glassmorphism effect) اختياري */}
//             <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[2rem] -translate-x-2 -translate-y-2 border border-white/20 shadow-lg -z-10"></div>

//             {/* حاوية الصورة الأساسية */}
//             <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-zinc-100">
//               <Image 
//                 src="/hero-img.jpeg" 
//                 alt="Graphic Designer Portfolio"
//                 fill
//                 priority
//                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                 sizes="(max-width: 768px) 256px, 380px"
//               />
//             </div>
      
//           </div>

//           {/* Floating Skill Icons (Mimicking the image) */}
//           <div className="absolute top-10 right-10 animate-bounce delay-100 bg-[#001e36] p-3 rounded-xl border border-white/10 rotate-12">
//              <span className="text-[#31a8ff] font-bold text-xl">Ps</span>
//           </div>
//           <div className="absolute bottom-20 right-0 animate-pulse bg-[#330000] p-3 rounded-xl border border-white/10 -rotate-12">
//              <span className="text-[#ff9a00] font-bold text-xl">Ai</span>
//           </div>
//           <div className="absolute bottom-10 left-10 animate-bounce bg-[#2e001f] p-3 rounded-xl border border-white/10 rotate-6">
//              <span className="text-[#ff61f6] font-bold text-xl">Xd</span>
//           </div>
          
//           {/* Background Glow Effect */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#f9d452]/10 blur-[120px] rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// "use client"
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { FaFacebook, FaTiktok} from 'react-icons/fa';
// import Image from 'next/image';

// const HeroSection = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // تتبع حركة الـ Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navlinks = [
//     { text: "عني", url: "#about" }, 
//     { text :'خدماتي', url: "#services" }, 
//     { text :'اعمالي', url: "#work" }, 
//     { text :'اراء العملاء', url: "#clients" },
//     { text :'تواصل معي', url: "#contact" }
//   ];

//   return (
//     <div style={{ fontFamily: "'Cairo', sans-serif" }} className="bg-[#1a0533] text-white selection:bg-[#f9d452] selection:text-[#1a0533]" dir="rtl">
      
//       {/* Navbar - تم تغيير sticky إلى fixed */}
//       <nav className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out ${
//         isScrolled 
//           ? 'bg-[#1a0533]/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-3' 
//           : 'bg-transparent py-6'
//       }`}>
//         <div className="container mx-auto px-6 flex justify-between items-center relative">
//           <div className="text-2xl font-bold text-[#f9d452]">
//               <Image src="/logo2.png" alt="Logo" width={110} height={50} className="object-contain" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8 text-[16px] font-medium">
//             <a href="#" className="text-[#f9d452] relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-[#f9d452]">
//               الرئيسية
//             </a>
//             {navlinks.map((item) => (
//               <a 
//                 key={item.text}
//                 href={item.url} 
//                 className="text-white hover:text-[#f9d452] relative pb-1 transition-colors duration-300 group/nav"
//               >
//                 {item.text}
//                 <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#f9d452] transition-all duration-300 group-hover/nav:w-full"></span>
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-[#f9d452] transition-colors duration-300 p-2 focus:outline-none"
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Mobile Dropdown */}
//           <div className={`absolute top-[100%] mt-4 left-0 right-0 mx-6 bg-[#2d0a54]/95 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-2 md:hidden shadow-2xl border border-white/10 z-50 transition-all duration-400 ease-in-out origin-top ${
//             isMenuOpen 
//               ? 'opacity-100 scale-y-100 pointer-events-auto' 
//               : 'opacity-0 scale-y-95 pointer-events-none'
//           }`}>
//             <a href="#" className="text-[#f9d452] bg-white/5 pr-4 py-2.5 rounded-xl font-medium transition-all" onClick={() => setIsMenuOpen(false)}>
//               الرئيسية
//             </a>
            
//             {navlinks.map((item, indx) => (
//               <a 
//                 key={indx}
//                 href={item.url}
//                 onClick={() => setIsMenuOpen(false)} 
//                 className="text-white hover:text-[#f9d452] hover:bg-white/5 pr-2 hover:pr-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
//               >
//                 {item.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Content - تم زيادة الـ padding-top لتعويض مساحة الـ fixed navbar */}
//       <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        
//         {/* Right Side: Text Content */}
//         <div className="w-full md:w-1/2 flex flex-col items-start text-right z-10 order-2 md:order-1 mt-12 md:mt-0">
//           <h2 className="text-[#f9d452] text-3xl md:text-4xl font-bold mb-2">مرحباً، أنا عُلا ✌️</h2>
//           <h1 className="text-3xl md:text-5xl font-bold mb-6">مصممة جرافيك</h1>
          
//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
//             أصمم هويات بصرية ومنشورات سوشال ميديا تساعد المشاريع على الظهور بشكل احترافي.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-12">
//             <a href='#work' className="bg-[#f9d452] cursor-pointer text-[#1a0533] px-10 py-3 rounded-lg font-bold hover:bg-[#e2bc3d] transition-all transform hover:scale-105 shadow-lg shadow-[#f9d452]/20">
//               تصفح اعمالي
//             </a>
//             <a href='#contact' className="border-2 cursor-pointer border-[#f9d452] text-[#f9d452] px-8 py-3 rounded-lg font-bold hover:bg-[#f9d452] hover:text-[#1a0533] transition-all">
//               تواصل معي
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-5">
//             <a href="https://web.facebook.com/profile.php?id=61577585291365" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaFacebook size={22} /></a>
//             <a href="#" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaTiktok size={22} /></a>
//           </div> 
//         </div>

//         {/* Left Side: Image and Floating Icons */}
//         <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
          
//           <div className="relative z-10 w-64 h-[350px] md:w-[380px] md:h-[500px] mx-auto group">
//             {/* الإطار الخلفي (الشكل الزخرفي) */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 opacity-80 shadow-xl -z-10"></div>
            
//             {/* إطار إضافي بلمسة زجاجية */}
//             <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[2rem] -translate-x-2 -translate-y-2 border border-white/20 shadow-lg -z-10"></div>

//             {/* حاوية الصورة الأساسية */}
//             <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-zinc-100">
//               <Image 
//                 src="/hero-img.jpeg" 
//                 alt="Graphic Designer Portfolio"
//                 fill
//                 priority
//                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                 sizes="(max-width: 768px) 256px, 380px"
//               />
//             </div>
//           </div>

//           {/* Floating Skill Icons */}
//           <div className="absolute top-10 right-10 animate-bounce delay-100 bg-[#001e36] p-3 rounded-xl border border-white/10 rotate-12 shadow-lg">
//              <span className="text-[#31a8ff] font-bold text-xl">Ps</span>
//           </div>
//           <div className="absolute bottom-20 right-0 animate-pulse bg-[#330000] p-3 rounded-xl border border-white/10 -rotate-12 shadow-lg">
//              <span className="text-[#ff9a00] font-bold text-xl">Ai</span>
//           </div>
//           <div className="absolute bottom-10 left-10 animate-bounce bg-[#2e001f] p-3 rounded-xl border border-white/10 rotate-6 shadow-lg">
//              <span className="text-[#ff61f6] font-bold text-xl">Xd</span>
//           </div>
          
//           {/* Background Glow Effect */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#f9d452]/10 blur-[120px] rounded-full pointer-events-none"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// ==========================

// "use client"
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { FaFacebook, FaTiktok} from 'react-icons/fa';
// import Image from 'next/image';

// const HeroSection = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isScrolled, setIsScrolled] = useState(false);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     if (window.scrollY > 80) {
//   //       setIsScrolled(true);
//   //     } else {
//   //       setIsScrolled(false);
//   //     }
//   //   };

//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   const navlinks = [
//     { text: "عني", url: "#about" }, 
//     { text :'خدماتي', url: "#services" }, 
//     { text :'اعمالي', url: "#work" }, 
//     { text :'اراء العملاء', url: "#clients" },
//     { text :'تواصل معي', url: "#contact" }
//   ];

//   {/* تم إضافة overflow-x-hidden هنا لمنع التمرير العرضي */}
//   return (
//     <div style={{ fontFamily: "'Cairo', sans-serif" }} className="bg-[#1a0533] text-white selection:bg-[#f9d452] selection:text-[#1a0533] overflow-x-hidden relative w-full" dir="rtl">
      
//       <nav className="w-full z-100 transition-all duration-500 ease-in-out ${
//         isScrolled 
//           ? 'bg-[#1a0533]/80 backdrop-blur-lg  py-3' 
//           : 'bg-transparent py-4 md:py-6'
//       ">
//         <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
//           <div className="text-2xl font-bold text-[#f9d452]">
//               <Image src="/logo2.png" alt="Logo" width={110} height={50} className="object-contain w-20 md:w-28" />
//           </div>

//           <div className="hidden md:flex gap-8 text-[16px] font-medium">
//             <a href="#" className="text-[#f9d452] relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-[#f9d452]">
//               الرئيسية
//             </a>
//             {navlinks.map((item) => (
//               <a 
//                 key={item.text}
//                 href={item.url} 
//                 className="text-white hover:text-[#f9d452] relative pb-1 transition-colors duration-300 group/nav"
//               >
//                 {item.text}
//                 <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#f9d452] transition-all duration-300 group-hover/nav:w-full"></span>
//               </a>
//             ))}
//           </div>

//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-[#f9d452] transition-colors duration-300 p-2 focus:outline-none"
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* تم تعديل left-4 و right-4 بدلاً من mx-6 لتفادي تجاوز العرض */}
//           <div className={`absolute top-[100%] mt-4 left-4 right-4 bg-[#2d0a54]/95 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-2 md:hidden shadow-2xl border border-white/10 z-50 transition-all duration-400 ease-in-out origin-top ${
//             isMenuOpen 
//               ? 'opacity-100 scale-y-100 pointer-events-auto' 
//               : 'opacity-0 scale-y-95 pointer-events-none'
//           }`}>
//             <a href="#" className="text-[#f9d452] bg-white/5 pr-4 py-2.5 rounded-xl font-medium transition-all" onClick={() => setIsMenuOpen(false)}>
//               الرئيسية
//             </a>
            
//             {navlinks.map((item, indx) => (
//               <a 
//                 key={indx}
//                 href={item.url}
//                 onClick={() => setIsMenuOpen(false)} 
//                 className="text-white hover:text-[#f9d452] hover:bg-white/5 pr-2 hover:pr-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
//               >
//                 {item.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        
//         <div className="w-full md:w-1/2 flex flex-col items-start text-right z-10 order-2 md:order-1 mt-12 md:mt-0">
//           <h2 className="text-[#f9d452] text-3xl md:text-4xl font-bold mb-2">مرحباً، أنا عُلا ✌️</h2>
//           <h1 className="text-3xl md:text-5xl font-bold mb-6">مصممة جرافيك</h1>
          
//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
//             أصمم هويات بصرية ومنشورات سوشال ميديا تساعد المشاريع على الظهور بشكل احترافي.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-12">
//             <a href='#work' className="bg-[#f9d452] cursor-pointer text-[#1a0533] px-8 py-3 rounded-lg font-bold hover:bg-[#e2bc3d] transition-all transform hover:scale-105 shadow-lg shadow-[#f9d452]/20">
//               تصفح اعمالي
//             </a>
//             <a href='#contact' className="border-2 cursor-pointer border-[#f9d452] text-[#f9d452] px-8 py-3 rounded-lg font-bold hover:bg-[#f9d452] hover:text-[#1a0533] transition-all">
//               تواصل معي
//             </a>
//           </div>

//           <div className="flex gap-5">
//             <a href="https://web.facebook.com/profile.php?id=61577585291365" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaFacebook size={22} /></a>
//             <a href="#" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaTiktok size={22} /></a>
//           </div> 
//         </div>

//         <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
          
//           <div className="relative z-10 w-64 h-[350px] md:w-[380px] md:h-[500px] mx-auto group">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 opacity-80 shadow-xl -z-10"></div>
            
//             <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[2rem] -translate-x-2 -translate-y-2 border border-white/20 shadow-lg -z-10"></div>

//             <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-zinc-100">
//               <Image 
//                 src="/hero-img.jpeg" 
//                 alt="Graphic Designer Portfolio"
//                 fill
//                 priority
//                 className="object-cover object-top transition-transform duration-700 z-10 group-hover:scale-105"
//                 sizes="(max-width: 768px) 256px, 380px"
//               />
//             </div>
//           </div>

//           <div className="absolute top-10 right-4 md:right-10 animate-bounce delay-100 bg-[#001e36] p-3 rounded-xl border border-white/10 rotate-12 shadow-lg">
//              <span className="text-[#31a8ff] font-bold text-xl">Ps</span>
//           </div>
//           <div className="absolute bottom-20 -right-2 md:right-0 animate-pulse bg-[#330000] p-3 rounded-xl border border-white/10 -rotate-12 shadow-lg">
//              <span className="text-[#ff9a00] font-bold text-xl">Ai</span>
//           </div>
//           <div className="absolute bottom-10 left-4 md:left-10 animate-bounce bg-[#2e001f] p-3 rounded-xl border border-white/10 rotate-6 shadow-lg">
//              <span className="text-[#ff61f6] font-bold text-xl">Xd</span>
//           </div>
          
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 bg-[#f9d452]/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaTiktok, FaWhatsapp} from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { text: "عني", url: "#about" }, 
    { text :'خدماتي', url: "#services" }, 
    { text :'اعمالي', url: "#work" }, 
    { text :'اراء العملاء', url: "#clients" },
    { text :'تواصل معي', url: "#contact" }
  ];

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif" }} className="bg-[#1a0533] text-white selection:bg-[#f9d452] selection:text-[#1a0533] overflow-x-hidden relative w-full" dir="rtl">
      
      {/* تم إضافة isolation-isolate لضمان أن القائمة تظهر فوق كل شيء */}
      <nav className="w-full z-[1000] relative isolation-isolate py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
          <div className="text-2xl font-bold text-[#f9d452]">
              <Image src="/logo2.png" alt="Logo" width={110} height={50} className="object-contain w-20 md:w-28" />
          </div>

          <div className="hidden md:flex gap-8 text-[16px] font-medium">
            <a href="#" className="text-[#f9d452] relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-[#f9d452]">
              الرئيسية
            </a>
            {navlinks.map((item) => (
              <a 
                key={item.text}
                href={item.url} 
                className="text-white hover:text-[#f9d452] relative pb-1 transition-colors duration-300 group/nav"
              >
                {item.text}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#f9d452] transition-all duration-300 group-hover/nav:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#f9d452] transition-colors duration-300 p-2 focus:outline-none relative z-[1001]"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* القائمة المنسدلة: تم رفع الـ z-index إلى 1000 لتكون في الأعلى دائماً */}
          <div className={`absolute top-full mt-4 left-4 right-4 bg-[#2d0a54]/95 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-2 md:hidden shadow-2xl border border-white/10 z-[1000] transition-all duration-400 ease-in-out origin-top ${
            isMenuOpen 
              ? 'opacity-100 scale-y-100 pointer-events-auto' 
              : 'opacity-0 scale-y-95 pointer-events-none'
          }`}>
            <a href="#" className="text-[#f9d452] bg-white/5 pr-4 py-2.5 rounded-xl font-medium transition-all" onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </a>
            
            {navlinks.map((item, indx) => (
              <a 
                key={indx}
                href={item.url}
                onClick={() => setIsMenuOpen(false)} 
                className="text-white hover:text-[#f9d452] hover:bg-white/5 pr-2 hover:pr-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 pt-10 pb-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        
        <div className="w-full md:w-1/2 flex flex-col items-start text-right z-10 order-2 md:order-1 mt-12 md:mt-0">
          <h2 className="text-[#f9d452] text-3xl md:text-4xl font-bold mb-2">مرحباً، أنا عُلا ✌️</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">مصممة جرافيك</h1>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            أصمم هويات بصرية ومنشورات سوشال ميديا تساعد المشاريع على الظهور بشكل احترافي.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href='#work' className="bg-[#f9d452] cursor-pointer text-[#1a0533] px-8 py-3 rounded-lg font-bold hover:bg-[#e2bc3d] transition-all transform hover:scale-105 shadow-lg shadow-[#f9d452]/20">
              تصفح اعمالي
            </a>
            <a href='#contact' className="border-2 cursor-pointer border-[#f9d452] text-[#f9d452] px-8 py-3 rounded-lg font-bold hover:bg-[#f9d452] hover:text-[#1a0533] transition-all">
              تواصل معي
            </a>
          </div>

          <div className="flex gap-5">
            <a href="https://web.facebook.com/profile.php?id=61577585291365" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaFacebook size={22} /></a>
            <a href="https://www.tiktok.com/@aloladesign18?_r=1&_t=ZS-97Co8x0j1mv" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaTiktok size={22} /></a>
            <a href="https://api.whatsapp.com/message/33GTVXHSJ4TMK1?autoload=1&app_absent=0" target='_blank' rel="noreferrer" className="text-white hover:text-[#f9d452] transition-colors"><FaWhatsapp size={22} /></a>
          
          </div> 
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
          <div className="relative z-10 w-64 h-[350px] md:w-[380px] md:h-[500px] mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 opacity-80 shadow-xl -z-10"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[2rem] -translate-x-2 -translate-y-2 border border-white/20 shadow-lg -z-10"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-zinc-100">
              <Image src="/hero-img.jpeg" alt="Graphic Designer Portfolio" fill priority className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 256px, 380px" />
            </div>
          </div>
          
          <div className="absolute top-10 right-4 md:right-10 animate-bounce delay-100 bg-[#001e36] p-3 rounded-xl border border-white/10 rotate-12 shadow-lg z-0">
             <span className="text-[#31a8ff] font-bold text-xl">Ps</span>
          </div>
          <div className="absolute bottom-20 -right-2 md:right-0 animate-pulse bg-[#330000] p-3 rounded-xl border border-white/10 -rotate-12 shadow-lg z-0">
             <span className="text-[#ff9a00] font-bold text-xl">Ai</span>
          </div>
          <div className="absolute bottom-10 left-4 md:left-10 animate-bounce bg-[#2e001f] p-3 rounded-xl border border-white/10 rotate-6 shadow-lg z-0">
             <span className="text-[#ff61f6] font-bold text-xl">Xd</span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 bg-[#f9d452]/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;