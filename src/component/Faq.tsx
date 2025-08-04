'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { ChevronDown, ChevronRight, MessageSquare, HelpCircle } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const faqData = [
  {
    question: 'Tugas apa saja yang bisa dikerjakan?',
    answer: 'Kami menerima berbagai jenis tugas seperti makalah, presentasi PowerPoint, coding/programming, laporan praktikum, hingga desain grafis dan skripsi (by request).',
  },
  {
    question: 'Berapa lama waktu pengerjaan?',
    answer: 'Tugas ringan bisa selesai dalam 1–2 hari, sedangkan tugas menengah hingga besar memerlukan 3–7 hari tergantung tingkat kesulitannya.',
  },
  {
    question: 'Apakah aman dan privasi terjaga?',
    answer: 'Kami menjaga privasi dan keamanan data Anda dengan sangat serius. Semua informasi yang Anda berikan akan dirahasiakan dan tidak akan dibagikan kepada pihak ketiga.',
  },
  {
    question: 'Bagaimana cara memesan tugas?',
    answer: 'Kirim detail tugas melalui WhatsApp/Instagram/email. Kami akan memberi estimasi harga dan deadline. Setelah pembayaran, tugas langsung dikerjakan.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="pertanyaan" className={`py-16 sm:py-24 bg-white ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Phone Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Floating Help Badge */}
            <div className="absolute top-10 left-20 -translate-x-1/4 bg-teal-500 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg z-20 animate-float">
              <HelpCircle size={20} />
              <span className="font-semibold text-sm">Ask Anything!</span>
            </div>
            
            {/* Floating Message Icon */}
            <div className="absolute bottom-10 right-20 translate-x-1/4 bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20 animate-float-delay">
              <MessageSquare size={32} fill="white" />
            </div>

            {/* Phone Frame */}
            <div className="relative w-80 h-[550px] bg-gray-100 rounded-[40px] p-3 shadow-2xl border-[14px] border-gray-200 transform transition-transform hover:scale-105">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[30px] p-4 flex flex-col overflow-hidden">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-100 rounded-b-lg"></div>
                <div className="flex-grow pt-8 overflow-y-auto">
                  {/* Chat Bubbles */}
                  <div className="flex justify-end mb-3">
                    <div className="bg-teal-50 text-gray-700 p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Halo kak, saya ingin bertanya untuk tugas A</p>
                      <p className="text-xs text-right text-gray-400 mt-1">12:03</p>
                    </div>
                  </div>
                  <div className="flex justify-start mb-3">
                    <div className="bg-white border border-gray-100 p-3 rounded-lg max-w-xs shadow-sm">
                      <p className="text-sm">Tentu kak! Bisa dikirimkan detail tugasnya? Kami siap bantu</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs text-gray-400">12:04</span>
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Additional chat bubbles for realism */}
                  <div className="flex justify-end mb-3">
                    <div className="bg-teal-50 text-gray-700 p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Ini detail tugasnya kak...</p>
                      <p className="text-xs text-right text-gray-400 mt-1">12:05</p>
                    </div>
                  </div>
                </div>
                {/* Input area */}
                <div className="p-3 border-t border-gray-100">
                  <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-grow bg-transparent outline-none text-sm"
                    />
                    <button className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#425953] rounded-full mb-3">
                Pertanyaan yang Sering Diajukan
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Butuh bantuan? Kami siap menjawab semua pertanyaan Anda!
              </h2>
              <p className="text-lg text-gray-500">
                Tidak menemukan apa yang Anda cari? Hubungi tim dukungan kami untuk informasi lebih lanjut.
              </p>
            </div>
            
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl border border-gray-200 transition-all duration-200 ${openIndex === index ? 'shadow-md border-teal-700' : 'hover:border-gray-300'}`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className={`text-lg font-semibold ${openIndex === index ? 'text-primary' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === index ? 'bg-teal-100 text-teal-600 rotate-180' : 'bg-gray-100 text-gray-600'}`}>
                      <ChevronDown size={20} className="transition-transform duration-200" />
                    </div>
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className={`px-6 pb-6 ${openIndex === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Masih punya pertanyaan?</h3>
              <p className="text-gray-600 mb-4">Kami siap membantu! Hubungi tim dukungan kami untuk mendapatkan bantuan pribadi.</p>
              <button className="inline-flex items-center px-6 py-3 bg-[#425953] text-white font-medium rounded-lg hover:bg-teal-700 transition-colors">
                <MessageSquare size={18} className="mr-2" />
                Hubungi Dukungan
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 4s ease-in-out 1s infinite;
        }
      `}</style>
    </section>
  );
}