"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus(''); // إخفاء رسالة الخطأ عند بدء الكتابة
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من تعبئة جميع الحقول
    if (!formData.name || !formData.whatsapp || !formData.message) {
      setStatus('error');
      return;
    }

    // تنسيق الرسالة لإرسالها عبر الواتساب
    const text = `مرحباً علا،\n\n*الاسم:* ${formData.name}\n*رقم الواتساب:* ${formData.whatsapp}\n*الرسالة:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // رابط الواتساب الخاص بك مع إضافة النص المنسق
    const whatsappUrl = `https://api.whatsapp.com/message/33GTVXHSJ4TMK1?autoload=1&app_absent=0&text=${encodedText}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, '_blank');
    
    // إظهار رسالة النجاح وتفريغ الحقول
    setStatus('success');
    setFormData({ name: '', whatsapp: '', message: '' });
    
    // إخفاء رسالة النجاح بعد 5 ثواني
    setTimeout(() => setStatus(''), 5000);
  };

  const currentYear = new Date().getFullYear();

  const navlinks = [
    {
      text: "عني",
      url: "#about"
    }, 
    {
      text :'خدماتي',
       url: "#services"
    }, 
    {text :'اعمالي', url: "#work"}, 
    {text :'اراء العملاء', url: "#clients"},
     {text :'تواصل معي', url: "#contact"}
  ]

  return (
    <section style={{ fontFamily: "'Cairo', sans-serif" }} id='contact' className="bg-[#1f013d] pt-16 font-sans flex flex-col" dir="rtl">
      
      {/* ----------------- قسم التواصل ----------------- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row gap-12 lg:gap-24 mb-20">
        
        {/* معلومات التواصل (اليمين) */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f9d452] mb-4 relative inline-block w-fit">
            جاهز تبدأ مشروعك؟
            <span className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-[#f9d452] to-transparent rounded-full translate-y-2"></span>
          </h2>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-md">
            نحن هنا لتحويل أفكارك إلى تصاميم إبداعية مبهرة. تواصل معنا الآن ودعنا نصنع النجاح معاً.
          </p>

          <div className="flex flex-col gap-6 text-gray-300">
            {/* الموقع */}
            <div className="flex items-center gap-4">
              <span className="bg-[#2A1B43] p-3 rounded-full text-[#f9d452]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <span className="text-lg font-medium">الخرطوم، السودان</span>
            </div>

            {/* رقم الهاتف */}
            <div className="flex items-center gap-4">
              <span className="bg-[#2A1B43] p-3 rounded-full text-[#f9d452]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <span className="text-lg font-medium" dir="ltr">+20 11 01723425</span>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex items-center gap-4">
              <span className="bg-[#2A1B43] p-3 rounded-full text-[#f9d452]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <span className="text-lg font-medium">alolaforadvertisinganddesign@gmail.com</span>
            </div>
          </div>
        </div>

        {/* نموذج المراسلة (اليسار) */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="الاسم" 
              className="bg-[#2A1B43] text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f9d452] transition-all"
            />
            
            <input 
              type="text" 
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="رقم الواتساب الخاص بك" 
              dir="rtl"
              className="bg-[#2A1B43] text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f9d452] transition-all"
            />
            
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="اكتب رسالتك هنا..." 
              rows="5"
              className="bg-[#2A1B43] text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f9d452] transition-all resize-none"
            ></textarea>

            {/* رسائل التحقق */}
            {status === 'error' && (
              <p className="text-red-400 text-sm">رجاءً، قم بتعبئة جميع الحقول قبل الإرسال.</p>
            )}
            {status === 'success' && (
              <p className="text-green-400 text-sm">تم توجيهك إلى الواتساب بنجاح!</p>
            )}

            <button 
              type="submit" 
              className="bg-[#FACC15] hover:bg-[#EAB308] cursor-pointer text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mt-2 self-start w-full sm:w-auto"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>

      {/* ----------------- تذييل الصفحة (Footer) ----------------- */}
      <div className="bg-[#180030] w-full pt-12 pb-6 px-4 flex flex-col items-center">
        
        {/* اللوجو */}
        <div className="mb-8">
          <Image 
            src="/logo2.png" 
            alt="شعار العلا للإعلان والتصميم" 
            width={120} 
            height={120} 
            className="object-contain"
          />
        </div>

        {/* روابط التنقل */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 text-gray-300 font-semibold mb-8 text-sm sm:text-base">
          {navlinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="hover:text-[#f9d452] transition-colors duration-300 cursor-pointer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="flex gap-6 mb-8">
          {/* Facebook */}
          <a href="https://web.facebook.com/profile.php?id=61577585291365" className="text-gray-400 hover:text-[#f9d452] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="text-gray-400 hover:text-[#f9d452] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
            </svg>
          </a>
        </div>

        {/* حقوق النشر */}
        <p className="text-gray-500 text-sm flex items-center gap-1">
          <span>&copy;</span>
          <span>{currentYear} جميع الحقوق محفوظة لـ العلا للإعلان والتصميم.</span>
        </p>
      </div>

    </section>
  );
}