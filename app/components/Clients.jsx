"use client"
import React from 'react';

// بيانات العملاء وآرائهم
const testimonialsData = [
  {
    id: 1,
    name: 'محمد عبد الهادي',
    role: 'عميل',
    review: 'العلا للتصميم اكيد يوم من الايام حنسمع بيها ف القمه... بجد شغل محترفين وتصميم وتنفيذ عالي الدقه وبمهارات جدا عاااليه، تسلمي كتير علي الشغل الممتاز.',
    avatarColor: 'bg-[#d495a2]' // لون الأفاتار مقارب للتصميم المرفق
  },
  {
    id: 2,
    name: 'إيمان إبراهيم',
    role: 'عميلة',
    review: 'شكرا... العلا للإعلان والتصميم.. تم اعتماد الشعار ولله الحمد الشعار جميل وابداع ابداع.',
    avatarColor: 'bg-[#d495a2]'
  },
  {
    id: 3,
    name: 'محمد معني',
    role: 'إعلامي قناة الزرقاء',
    review: 'ي سلام ي علا، الله يكرمك ي ربي ويسعدك والله تصميم جميل ورائع جدا، شاكر ومقدر كل جهودك وبالتوفيق ليك.',
    avatarColor: 'bg-[#d495a2]'
  }
];

// مكون النجمة الذهبية
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 text-[#FACC15]" // اللون الذهبي
  >
    <path 
      fillRule="evenodd" 
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
      clipRule="evenodd" 
    />
  </svg>
);

export default function Testimonials() {
  return (
    <section id='clients' style={{ fontFamily: "'Cairo', sans-serif" }} className="bg-[#1f013d] py-16 px-4 md:px-8 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس القسم (Heading) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f9d452] mb-6 relative inline-block">
              آراء العملاء
              {/* خط سفلي ذهبي متدرج */}
              <span className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-[#f9d452] to-transparent rounded-full translate-y-1.5"></span>
            </h2>
            <p className="text-gray-400 text-[16px] md:text-base max-w-xl leading-relaxed mt-2">
              ثقة عملائنا هي وسام نعتز به. نضع بين يديكم انطباعات وتجارب شركاء النجاح الذين أسعدنا العمل معهم وتحويل رؤاهم إلى تصاميم إبداعية.
            </p>
          </div>
        </div>

        {/* شبكة آراء العملاء (Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-[#2A1B43] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2A1B43]/50"
            >
              {/* الأفاتار (Avatar) */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${testimonial.avatarColor} shadow-inner`}>
                <span className="text-[#1f013d] text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              
              {/* معلومات العميل */}
              <h3 className="text-white text-lg font-bold">{testimonial.name}</h3>
              {testimonial.role !== 'عميل' && testimonial.role !== 'عميلة' && (
                <span className="text-gray-400 text-sm mb-2 block">{testimonial.role}</span>
              )}

              {/* نجوم التقييم */}
              <div className="flex gap-1 my-4">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              
              {/* نص التقييم */}
              <p className="text-gray-300 text-[15px] leading-loose flex-grow mt-2 italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}