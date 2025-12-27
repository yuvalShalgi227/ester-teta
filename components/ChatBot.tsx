
import React, { useState, useRef, useEffect } from 'react';
import { getHealingResponse } from '../services/gemini';
import { Message } from '../types';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'שלום, אני המדריך הוירטואלי של אסתר צימרמן. איך אוכל לעזור לך היום בחיבור לתדר הריפוי?',
      timestamp: Date.now(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getHealingResponse(input);
    
    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseText,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
        className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-rose-400 rotate-90' : 'bg-sky-500 hover:scale-110'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 right-4 md:left-6 md:right-auto w-auto md:w-[400px] h-[70vh] md:h-[500px] glass rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in border border-sky-100">
          <div className="bg-sky-500 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">אסתר תטא - עוזר וירטואלי</h3>
              <p className="text-xs opacity-80">הדרכה רוחנית חכמה</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="md:hidden">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm md:text-base leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-sky-100 text-sky-800 rounded-br-none' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 md:p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="שאלו משהו..."
              className="flex-1 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-sky-400 text-sm md:text-base"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 disabled:opacity-50"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
