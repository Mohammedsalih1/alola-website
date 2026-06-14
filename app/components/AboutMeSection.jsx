"use client"
import React from 'react';
import Image from 'next/image';
import { PhotoshopIcon, IllustratorIcon, FigmaIcon, InDesignIcon, CanvaIcon } from './icons/DesignIcons';

const AboutMeSection = () => {

  return (
    <section style={{ fontFamily: "'Cairo', sans-serif" }} id="about" className="bg-[#1f013d] py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* حاوية صورة التاج - مع أنيميشن خفيف */}
        <div className="relative flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
          {/* خلفية متوهجة ناعمة خلف التاج */}
          <div className="absolute inset-0 bg-[#f9d452] opacity-10 rounded-full blur-[60px] md:blur-[80px]"></div>
          
          <div className="relative animate-float-slow">
            <Image 
              src="/crawon2.png" 
              alt="Golden Crown" 
              width={600} // استخدم عرض أعلى قليلاً لضمان الجودة
              height={600} 
              className="w-full h-full object-contain"
              priority // تعطي الأولوية لتحميل الصورة
            />
          </div>
        </div>

        {/* حاوية النص العربي - تصميم يشبه المرفق */}
        <div className="flex-grow bg-[#2d0e51] p-8 sm:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.5)] border border-white/5 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f9d452] mb-8 relative inline-block">
            من أنا
            {/* خط سفلي ذهبي متدرج */}
            <span className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-[#f9d452] to-transparent rounded-full translate-y-1.5"></span>
          </h2>
          
          <div className="space-y-6 text-white/90 leading-relaxed text-[17px] sm:text-[17px]">
            <p>
            أنا مصممة جرافيك متخصصة في تصميم الهوية البصرية وتصميمات السوشال ميديا، أساعد الشركات ورواد الأعمال على بناء حضور بصري احترافي يعكس هويتهم ويُميزهم عن المنافسين.            </p>
            <p>
            أمتلك خبرة تمتد لأكثر من سنتين في مجال التصميم، وخلال هذه الفترة قدمت حلولًا إبداعية لأكثر من 100 عميل في مجالات متنوعة، مع التركيز على الجمع بين الجمال البصري والرسالة التسويقية الفعالة.  
            </p>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">الأدوات التي أتقنها</h3>
              <div className="flex gap-4">
                <Image src="/photoshop.png" width={48} height={48} />
                <Image src="/illustrator.png" width={48} height={48} />
                <Image src="/figma.png" width={48} height={48} />
                <Image src="/indesign.png" width={48} height={48} />
                <Image src="/canva.png" width={48} height={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* تعريف الأنيميشن (أضفه في ملف tailwind.config.js الخاص بك) */}
      <style jsx global>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMeSection;