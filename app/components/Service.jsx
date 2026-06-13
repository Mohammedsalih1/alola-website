import React from 'react';
import { FaPenNib, FaIdCard, FaShareAlt, FaPrint } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      title: "تصميم الشعارات",
      description: "نصمم لك شعاراً فريداً يختصر قصة نجاحك ويبقى عالقاً في أذهان جمهورك المستهدف.",
      icon: <FaPenNib className="text-4xl" />,
    },
    {
      title: "الهوية البصرية",
      description: "بناء هوية بصرية متكاملة وشاملة تضمن تميز علامتك التجارية وتفردها في السوق.",
      icon: <FaIdCard className="text-4xl" />,
    },
    {
      title: "تصاميم السوشال ميديا",
      description: "بوستات إبداعية وجذابة تزيد من تفاعل جمهورك وتعزز حضورك الرقمي بشكل احترافي.",
      icon: <FaShareAlt className="text-4xl" />,
    },
    {
      title: "المطبوعات",
      description: "تصميم وتجهيز كافة المطبوعات الورقية والدعائية بدقة عالية وألوان تعكس جودة عملك.",
      icon: <FaPrint className="text-4xl" />,
    }
  ];

  return (
    <section id="services" style={{ fontFamily: "'Cairo', sans-serif" }}  className="bg-[#1f013d] py-24 px-6 relative overflow-hidden">
      
      {/* عناصر زخرفية في الخلفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f9d452] opacity-5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* العنوان الرئيسي للقسم */}
        <h2 className="text-[#f9d452] text-4xl md:text-5xl font-extrabold mb-4">خدماتي الإبداعية</h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          نحول أفكارك إلى واقع بصري ملموس يعكس احترافية مشروعك ويجذب عملاءك بلمسات فنية مبتكرة.
        </p>

        {/* شبكة الخدمات (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#2d0e51] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* تأثير التوهج عند التمرير */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f9d452]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* الأيقونة */}
              <div className="bg-[#1f013d] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#f9d452] shadow-inner group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* نصوص الخدمة */}
              <h3 className="text-[#f9d452] text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/80 leading-relaxed text-md">
                {service.description}
              </p>

              {/* خط زخرفي بسيط في الأسفل يظهر عند التمرير */}
              <div className="w-0 h-1 bg-[#f9d452] mx-auto mt-6 transition-all duration-500 group-hover:w-16 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;