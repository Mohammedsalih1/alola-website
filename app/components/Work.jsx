// "use client"
// import Image from 'next/image';
// import React, { useState } from 'react';


// // بيانات المشاريع
// const projectsData = [
//   {
//     id: 1,
//     title: 'مقرأة الرحمة',
//     shortDesc: 'شعار يجسد روح العلم والسكينة، ويعكس هوية تعليم القرآن الكريم بأسلوب بسيط وأنيق.',
//     fullDesc: 'شعار مقرأة الرحمة يجسد روح العلم والسكينة والرحمة، حيث يعكس هوية تعليم القرآن الكريم بأسلوب بسيط وأنيق. تم تصميمه ليعبر عن الطمأنينة والإيمان، مع لمسة روحانية تربط بين العلم والعبادة. يعتمد الشعار على شكل متوازن يوحي بالثبات والنور والهداية، ليكون رمزاً لمقرأة تهدف لنشر القرآن وتعليم تلاوته بروح رحيمة ومحببة.',
//     coverImg: '/work1-3.jpeg',
//     extraImages: ['/work1-2.jpeg', '/work1.jpeg'] // ضعي مسارات الصور الإضافية هنا
//   },
//   {
//     id: 2,
//     title: 'عيادة التغذية العلاجية',
//     shortDesc: 'شعار يعكس مفهوم الصحة والتوازن، ويجمع بين البساطة والاحترافية للتعبير عن الحيوية.',
//     fullDesc: 'شعار عيادة التغذية العلاجية يعكس مفهوم الصحة والتوازن والحياة السليمة، حيث يجمع بين البساطة والاحترافية في التصميم. يرمز الشعار إلى الاهتمام بالتغذية كوسيلة للعلاج وتحسين جودة الحياة، مع إبراز فكرة العناية بالجسم من الداخل والخارج. تم اختيار عناصره وألوانه ليعبر عن الحيوية، والاهتمام بالصحة، والالتزام بأسلوب حياة متوازن يساعد على الوقاية والعلاج في آنٍ واحد.',
//     coverImg: '/work2.jpeg', // تأكدي من امتداد الصورة لديك (jpg أو jpeg)
//     extraImages: ['/work2-1.jpeg', '/work2-3.jpeg']
//   },
//   {
//     id: 3,
//     title: 'مدرسة إقرأ التعليمية',
//     shortDesc: 'شعار يعبر عن العلم والمعرفة والانطلاق نحو مستقبل مشرق لبناء جيل واعٍ ومثقف.',
//     fullDesc: 'شعار مدرسة اقرأ التعليمية يعبر عن العلم والمعرفة والانطلاق نحو مستقبل مشرق. يجسد الشعار رسالة المدرسة في بناء جيل واعٍ ومثقف، من خلال التركيز على التعلم كقيمة أساسية للحياة. تم تصميمه بأسلوب بسيط وهادئ يعكس الجدية والالتزام، مع لمسات رمزية تشير إلى الكتاب والقلم والنور، كدلالة على الهداية بالعلم وفتح آفاق الفكر. ويجسد الشعار هوية تعليمية تهدف إلى ترسيخ حب القراءة والعلم منذ الصغر.',
//     coverImg: '/work3.jpeg',
//     extraImages: ['/work3-2.jpeg', '/work3-3.jpeg']
//   }
// ];

// export default function MyWorks() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   // دالة لإغلاق النافذة المنبثقة
//   const closeModal = () => setSelectedProject(null);

//   return (
//     <section style={{ fontFamily: "'Cairo', sans-serif" }} className="bg-[#1f013d] py-16 px-4 md:px-8 font-sans" dir="rtl">
//       <div className="max-w-7xl mx-auto">
        
//         {/* رأس القسم (Heading) */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
//           <div>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f9d452] mb-8 relative inline-block">
//             اعمالي
//             {/* خط سفلي ذهبي متدرج */}
//             <span className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-[#f9d452] to-transparent rounded-full translate-y-1.5"></span>
//           </h2>
//             <p className="text-gray-400 text-[16px] md:text-base max-w-xl leading-relaxed">
//              لمسات إبداعية تحول الأفكار إلى تصاميم بصرية ملهمة. تصفح مجموعة من أبرز مشاريعي التي تعكس شغفي واحترافيتي في المجال .
//             </p>
//           </div>
//         </div>

//         {/* شبكة المشاريع (Cards Grid) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projectsData.map((project) => (
//             <div key={project.id} className="bg-[#2A1B43] rounded-2xl overflow-hidden flex flex-col shadow-lg transition-transform hover:-translate-y-2 duration-300">
//               {/* الغلاف */}
//               <div className="h-fu overflow-hidden">
//                 <Image
//                   src={project.coverImg} 
//                   width={902}
//                   height={1024}
//                   alt={project.title} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* محتوى البطاقة */}
//               <div className="p-6 flex flex-col flex-grow text-center">
//                 <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
//                 <p className="text-gray-300 text-[16px] leading-relaxed mb-6 flex-grow">
//                   {project.shortDesc}
//                 </p>
//                 <button 
//                   onClick={() => setSelectedProject(project)}
//                   className="bg-[#FACC15] cursor-pointer hover:bg-[#EAB308] text-black font-semibold py-2.5 px-6 rounded-lg w-full transition-colors"
//                 >
//                   عرض المشروع
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* النافذة المنبثقة (Modal) */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//           <div className="bg-[#2A1B43] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row" dir="rtl">
            
//             {/* زر الإغلاق */}
//             <button 
//               onClick={closeModal}
//               className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition-all z-10"
//             >
//               ✕
//             </button>

//             {/* تفاصيل المشروع */}
//             <div className="p-8 md:w-1/2 flex flex-col justify-center">
//               <h3 className="text-white text-3xl font-bold mb-4">{selectedProject.title}</h3>
//               <p className="text-gray-300 leading-loose text-sm mb-6">
//                 {selectedProject.fullDesc}
//               </p>
              
//               {/* صور إضافية مصغرة إن وجدت */}
//               <h4 className="text-white font-semibold mb-3">لقطات إضافية:</h4>
//               <div className="flex gap-3">
//                 {selectedProject.extraImages.map((img, index) => (
//                   <img 
//                     key={index}
//                     src={img} 
//                     alt={`${selectedProject.title} detail ${index + 1}`}
//                     className="w-20 h-20 object-cover rounded-md border border-gray-600"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* صورة الغلاف الكبيرة في النافذة */}
//             <div className="md:w-1/2 bg-black">
//               <img 
//                 src={selectedProject.coverImg} 
//                 alt={selectedProject.title} 
//                 className="w-full h-full object-contain"
//               />
//             </div>

//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const projectsData = [
//   {
//     id: 1,
//     title: 'مقرأة الرحمة',
//     shortDesc: 'شعار يجسد روح العلم والسكينة، ويعكس هوية تعليم القرآن الكريم بأسلوب بسيط وأنيق.',
//     fullDesc: 'شعار مقرأة الرحمة يجسد روح العلم والسكينة والرحمة، حيث يعكس هوية تعليم القرآن الكريم بأسلوب بسيط وأنيق. تم تصميمه ليعبر عن الطمأنينة والإيمان، مع لمسة روحانية تربط بين العلم والعبادة. يعتمد الشعار على شكل متوازن يوحي بالثبات والنور والهداية، ليكون رمزاً لمقرأة تهدف لنشر القرآن وتعليم تلاوته بروح رحيمة ومحببة.',
//     coverImg: '/work1.jpeg',
//     extraImages: ['/work1-2.jpeg', '/work1-3.jpeg'] 
//   },
//   {
//     id: 2,
//     title: 'عيادة التغذية العلاجية',
//     shortDesc: 'شعار يعكس مفهوم الصحة والتوازن، ويجمع بين البساطة والاحترافية للتعبير عن الحيوية.',
//     fullDesc: 'شعار عيادة التغذية العلاجية يعكس مفهوم الصحة والتوازن والحياة السليمة، حيث يجمع بين البساطة والاحترافية في التصميم. يرمز الشعار إلى الاهتمام بالتغذية كوسيلة للعلاج وتحسين جودة الحياة، مع إبراز فكرة العناية بالجسم من الداخل والخارج. تم اختيار عناصره وألوانه ليعبر عن الحيوية، والاهتمام بالصحة، والالتزام بأسلوب حياة متوازن يساعد على الوقاية والعلاج في آنٍ واحد.',
//     coverImg: '/work2.jpg',
//     extraImages: ['/work2-1.jpeg', '/work2-3.jpeg']
//   },
//   {
//     id: 3,
//     title: 'مدرسة إقرأ التعليمية',
//     shortDesc: 'شعار يعبر عن العلم والمعرفة والانطلاق نحو مستقبل مشرق لبناء جيل واعٍ ومثقف.',
//     fullDesc: 'شعار مدرسة اقرأ التعليمية يعبر عن العلم والمعرفة والانطلاق نحو مستقبل مشرق. يجسد الشعار رسالة المدرسة في بناء جيل واعٍ ومثقف، من خلال التركيز على التعلم كقيمة أساسية للحياة. تم تصميمه بأسلوب بسيط وهادئ يعكس الجدية والالتزام، مع لمسات رمزية تشير إلى الكتاب والقلم والنور، كدلالة على الهداية بالعلم وفتح آفاق الفكر. ويجسد الشعار هوية تعليمية تهدف إلى ترسيخ حب القراءة والعلم منذ الصغر.',
//     coverImg: '/work3.jpeg',
//     extraImages: ['/work3-1.jpeg', '/work3-3.jpeg']
//   }
// ];

// export default function MyWorks() {
//   const [activeProject, setActiveProject] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   // دالة فتح النافذة بلمسة سلسة
//   const openModal = (project) => {
//     setActiveProject(project);
//     // تأخير بسيط جداً للسماح للـ DOM بالرندر قبل تطبيق الـ opacity
//     setTimeout(() => setIsOpen(true), 10);
//     // منع التمرير في الصفحة الخلفية عند فتح النافذة
//     document.body.style.overflow = 'hidden';
//   };

//   // دالة إغلاق النافذة بلمسة سلسة
//   const closeModal = () => {
//     setIsOpen(false);
//     // انتظار انتهاء الحركة (Transition) قبل إزالة العنصر من الـ DOM
//     setTimeout(() => {
//       setActiveProject(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // إغلاق النافذة عند الضغط على زر Esc
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   return (
//     <section className="bg-[#120524] py-16 px-4 md:px-8 font-sans min-h-screen" dir="rtl">
//       <div className="max-w-7xl mx-auto">
        
//         {/* رأس القسم (Heading) */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
//           <div>
//             <h2 className="text-white text-3xl font-bold mb-3">أعمالي</h2>
//             <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
//               لمسات إبداعية تحول الأفكار إلى تصاميم بصرية ملهمة. تصفحي مجموعة من أبرز مشاريعي التي تعكس شغفي واحترافيتي كمصممة جرافيك.
//             </p>
//           </div>
//           <button className="text-gray-300 hover:text-white mt-6 md:mt-0 text-sm border-b border-gray-500 pb-1 transition-colors">
//             عرض الكل
//           </button>
//         </div>

//         {/* شبكة المشاريع (Cards Grid) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project) => (
//             <div key={project.id} className="bg-[#2A1B43] rounded-2xl overflow-hidden flex flex-col shadow-xl transition-transform hover:-translate-y-2 duration-300 group">
//               {/* الغلاف - استخدام Next Image مع object-contain لمنع القص */}
//               <div className="relative w-full h-56 md:h-64 bg-[#1a1029] p-4">
//                 <Image 
//                   src={project.coverImg} 
//                   alt={project.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
//                 />
//               </div>
              
//               {/* محتوى البطاقة */}
//               <div className="p-6 flex flex-col flex-grow text-center">
//                 <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
//                 <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
//                   {project.shortDesc}
//                 </p>
//                 <button 
//                   onClick={() => openModal(project)}
//                   className="bg-[#FACC15] hover:bg-[#EAB308] text-[#120524] font-bold py-3 px-6 rounded-lg w-full transition-colors shadow-md"
//                 >
//                   عرض المشروع
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* النافذة المنبثقة (Modal) مع انتقالات سلسة */}
//       {activeProject && (
//         <div 
//           className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
//           onClick={closeModal} // إغلاق عند الضغط خارج النافذة
//         >
//           <div 
//             className={`bg-[#2A1B43] rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative shadow-2xl transition-all duration-300 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
//             onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل النافذة
//             dir="rtl"
//           >
            
//             {/* زر الإغلاق */}
//             <button 
//               onClick={closeModal}
//               className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full hover:bg-black/70 transition-all z-10 backdrop-blur-sm text-lg font-bold"
//             >
//               ✕
//             </button>

//             {/* صورة الغلاف الكبيرة في النافذة (متجاوبة) */}
//             <div className="relative w-full h-64 sm:h-72 md:h-auto md:w-1/2 bg-[#1a1029] flex-shrink-0 p-6">
//               <Image 
//                 src={activeProject.coverImg} 
//                 alt={activeProject.title} 
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-contain p-4 md:p-8 drop-shadow-xl"
//               />
//             </div>

//             {/* تفاصيل المشروع (محتوى قابل للتمرير) */}
//             <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto max-h-[calc(90vh-16rem)] md:max-h-[90vh]">
//               <h3 className="text-[#FACC15] text-2xl md:text-3xl font-bold mb-4 pr-10 md:pr-0">{activeProject.title}</h3>
//               <p className="text-gray-200 leading-loose text-sm md:text-base mb-8 text-justify">
//                 {activeProject.fullDesc}
//               </p>
              
//               {/* صور إضافية */}
//               <div>
//                 <h4 className="text-white font-semibold mb-4 border-b border-gray-600 pb-2">لقطات إضافية</h4>
//                 <div className="flex flex-wrap gap-4">
//                   {activeProject.extraImages.map((img, index) => (
//                     <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-600 hover:border-[#FACC15] transition-colors cursor-pointer bg-[#1a1029]">
//                       <Image 
//                         src={img} 
//                         alt={`${activeProject.title} - صورة إضافية ${index + 1}`}
//                         fill
//                         sizes="96px"
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


"use client"
import Image from 'next/image';
import React, { useState } from 'react';

// بيانات المشاريع
const projectsData = [
  {
    id: 1,
    title: 'مقرأة الرحمة',
    shortDesc: 'شعار يجسد روح العلم والسكينة، ويعكس هوية تعليم القرآن الكريم بأسلوب بسيط وأنيق.',
    fullDesc: 'شعار مقرأة الرحمة يجسد روح العلم والسكينة والرحمة، حيث يعكس هوية تعليم القرآن الكريم بأسلوب بسيط وأنيق. تم تصميمه ليعبر عن الطمأنينة والإيمان، مع لمسة روحانية تربط بين العلم والعبادة. يعتمد الشعار على شكل متوازن يوحي بالثبات والنور والهداية، ليكون رمزاً لمقرأة تهدف لنشر القرآن وتعليم تلاوته بروح رحيمة ومحببة.',
    coverImg: '/work1-3.jpeg',
    extraImages: ['/work1-2.jpeg', '/work1.jpeg'] 
  },
  {
    id: 2,
    title: 'عيادة التغذية العلاجية',
    shortDesc: 'شعار يعكس مفهوم الصحة والتوازن، ويجمع بين البساطة والاحترافية للتعبير عن الحيوية.',
    fullDesc: 'شعار عيادة التغذية العلاجية يعكس مفهوم الصحة والتوازن والحياة السليمة، حيث يجمع بين البساطة والاحترافية في التصميم. يرمز الشعار إلى الاهتمام بالتغذية كوسيلة للعلاج وتحسين جودة الحياة، مع إبراز فكرة العناية بالجسم من الداخل والخارج. تم اختيار عناصره وألوانه ليعبر عن الحيوية، والاهتمام بالصحة، والالتزام بأسلوب حياة متوازن يساعد على الوقاية والعلاج في آنٍ واحد.',
    coverImg: '/work2.jpeg', 
    extraImages: ['/work2-1.jpeg', '/work2-3.jpeg']
  },
  {
    id: 3,
    title: 'مدرسة إقرأ التعليمية',
    shortDesc: 'شعار يعبر عن العلم والمعرفة والانطلاق نحو مستقبل مشرق لبناء جيل واعٍ ومثقف.',
    fullDesc: 'شعار مدرسة اقرأ التعليمية يعبر عن العلم والمعرفة والانطلاق نحو مستقبل مشرق. يجسد الشعار رسالة المدرسة في بناء جيل واعٍ ومثقف، من خلال التركيز على التعلم كقيمة أساسية للحياة. تم تصميمه بأسلوب بسيط وهادئ يعكس الجدية والالتزام، مع لمسات رمزية تشير إلى الكتاب والقلم والنور، كدلالة على الهداية بالعلم وفتح آفاق الفكر. ويجسد الشعار هوية تعليمية تهدف إلى ترسيخ حب القراءة والعلم منذ الصغر.',
    coverImg: '/work3.jpeg',
    extraImages: ['/work3-2.jpeg', '/work3-3.jpeg']
  },
  {
    id: 4,
    title: 'زيزو للبخور والعطور',
    shortDesc : "شعار زيزو للبخور والعطور يعكس الفخامة والأصالة والجاذبية، حيث صُمم ليجسد عالم العطور والبخور بروح أنيقة ومميزة",
    fullDesc: "شعار زيزو للبخور والعطور يعكس الفخامة والأصالة والجاذبية، حيث صُمم ليجسد عالم العطور والبخور بروح أنيقة ومميزة. يجمع الشعار بين البساطة والرقي ليعبر عن جودة المنتجات وتميزها، بينما ترمز تفاصيله إلى عبق الروائح الزكية وسحر العطور الشرقية. كما يعكس الهوية التجارية للعلامة بأسلوب عصري يرسخ الثقة ويترك انطباعاً جميلاً في أذهان العملاء، ليكون رمزاً للأناقة والتميز في عالم البخور والعطور. ✨🖤",
    coverImg: '/work4.jpeg',
    extraImages: ['/work4-2.jpeg', '/work4.jpeg']
  }
];

export default function MyWorks() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // دالة لفتح النافذة بلمسة سلسة
  const openModal = (project) => {
    setSelectedProject(project);
    // تأخير بسيط جداً للسماح بتطبيق الـ Transition
    setTimeout(() => setIsModalOpen(true), 10);
  };

  // دالة لإغلاق النافذة المنبثقة بشكل سلس
  const closeModal = () => {
    setIsModalOpen(false);
    // ننتظر حتى ينتهي الانيميشن (300ms) قبل إزالة المشروع من الشاشة
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id='work' style={{ fontFamily: "'Cairo', sans-serif" }} className="bg-[#1f013d] py-16 px-4 md:px-8 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس القسم (Heading) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f9d452] mb-8 relative inline-block">
            اعمالي
            {/* خط سفلي ذهبي متدرج */}
            <span className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-[#f9d452] to-transparent rounded-full translate-y-1.5"></span>
          </h2>
            <p className="text-gray-400 text-[16px] md:text-base max-w-xl leading-relaxed">
             لمسات إبداعية تحول الأفكار إلى تصاميم بصرية ملهمة. تصفح مجموعة من أبرز مشاريعي التي تعكس شغفي واحترافيتي في المجال .
            </p>
          </div>
        </div>

        {/* شبكة المشاريع (Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-[#2A1B43] rounded-2xl overflow-hidden flex flex-col shadow-lg transition-transform hover:-translate-y-2 duration-300">
              {/* الغلاف */}
              <div className="h-full overflow-hidden">
                <Image
                  src={project.coverImg} 
                  width={902}
                  height={1024}
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* محتوى البطاقة */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-[16px] leading-relaxed mb-6 flex-grow">
                  {project.shortDesc}
                </p>
                <button 
                  onClick={() => openModal(project)}
                  className="bg-[#FACC15] cursor-pointer text-black font-semibold py-2.5 px-6 rounded-lg w-full transition-all duration-300 hover:bg-[#EAB308] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FACC15]/20 active:scale-95"
                >
                  عرض المشروع
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* النافذة المنبثقة (Modal) */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 bg-black/30 backdrop-blur-md ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div 
            className={`bg-[#2A1B43] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row transition-all duration-300 transform ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`} 
            dir="rtl"
          >
            
            {/* زر الإغلاق */}
            <button 
              onClick={closeModal}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full transition-all duration-300 hover:bg-red-500 hover:rotate-90 hover:scale-110 z-10"
            >
              ✕
            </button>

            {/* تفاصيل المشروع */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-white text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 leading-loose text-sm mb-6">
                {selectedProject.fullDesc}
              </p>
              
              {/* صور إضافية مصغرة إن وجدت */}
              <h4 className="text-white font-semibold mb-3">لقطات إضافية:</h4>
              <div className="flex gap-3">
                {selectedProject.extraImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${selectedProject.title} detail ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md border border-gray-600"
                  />
                ))}
              </div>
            </div>

            {/* صورة الغلاف الكبيرة في النافذة */}
            <div className="md:w-1/2 bg-black">
              <img 
                src={selectedProject.coverImg} 
                alt={selectedProject.title} 
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}