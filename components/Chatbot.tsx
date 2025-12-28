
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'مرحباً بك في أكاديمية عايد! 👋\nأنا المساعد الذكي، كيف يمكنني مساعدتك في اختبار STEP اليوم؟', isBot: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = { id: Date.now(), text: inputText, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      let botResponseText = '';
      const lowerInput = userMsg.text.toLowerCase();

      if (lowerInput.includes('سعر') || lowerInput.includes('بكم')) {
        botResponseText = 'لدينا 3 باقات للدورات:\n1. التأسيس: 299 ريال\n2. الشاملة: 500 ريال\n3. المكثفة: 350 ريال\n\nوباقة الملفات فقط بـ 99 ريال.';
      } else if (lowerInput.includes('تسجيل') || lowerInput.includes('اشتراك')) {
        botResponseText = 'يمكنك التسجيل بسهولة عن طريق الضغط على زر "سجّل الآن" في أعلى الصفحة أو اختيار الباقة المناسبة لك من قسم الدورات.';
      } else if (lowerInput.includes('ملفات') || lowerInput.includes('تجميعات')) {
        botResponseText = 'نعم، نوفر باقة خاصة للتجميعات والنماذج فقط بسعر 99 ريال (أو 500 نجمة تيليجرام). تجدها في قسم "التجميعات والنماذج".';
      } else if (lowerInput.includes('تحويل') || lowerInput.includes('دفع')) {
        botResponseText = 'نقبل الدفع عبر التحويل البنكي (بنك الإنماء) أو عبر نجوم تيليجرام (Telegram Stars) لتفعيل فوري.';
      } else {
        botResponseText = 'شكراً لاستفسارك. للتفاصيل الدقيقة، يمكنك تصفح أقسام الموقع، أو التواصل مباشرة مع خدمة العملاء عبر الرابط في أسفل الصفحة.';
      }

      const botMsg: Message = { id: Date.now() + 1, text: botResponseText, isBot: true };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-slate-200 flex flex-col max-h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">مساعد الأكاديمية</h3>
                <span className="flex items-center text-xs text-teal-100"><span className="w-2 h-2 bg-green-400 rounded-full ml-1 animate-pulse"></span> متصل الآن</span>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 min-h-[300px]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex mb-3 ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                {msg.isBot && (
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                        <span className="text-xs">🤖</span>
                    </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[80%] text-sm whitespace-pre-line ${
                  msg.isBot 
                    ? 'bg-white text-slate-700 border border-slate-200 rounded-tl-none' 
                    : 'bg-teal-600 text-white rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex mb-3 justify-start">
                  <div className="bg-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="اكتب استفسارك هنا..."
              className="flex-1 bg-slate-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <button 
              type="submit" 
              disabled={!inputText.trim()}
              className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={toggleChat}
        className="group flex items-center justify-center bg-teal-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        {isOpen ? (
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
