import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: '👋 Hi! How can I help you today?' }
          ]);
            const [input, setInput] = useState('');

              const handleSend = () => {
                  if (!input.trim()) return;
                      const userMsg = { from: 'user', text: input };
                          setMessages(prev => [...prev, userMsg]);
                              setInput('');

                                  setTimeout(() => {
                                        const responses = [
                                                "Thanks for reaching out! Our team will assist you shortly. 😊",
                                                        "Great question! Check our Deals section for amazing discounts. 🔥",
                                                                "You can track your orders from the Admin panel if you're an admin! 📦",
                                                                        "Free shipping on orders over $50! 🚚"
                                                                              ];
                                                                                    const botMsg = { from: 'bot', text: responses[Math.floor(Math.random() * responses.length)] };
                                                                                          setMessages(prev => [...prev, botMsg]);
                                                                                              }, 1000);
                                                                                                };

                                                                                                  return (
                                                                                                      <>
                                                                                                            <button className="chat-widget-btn" onClick={() => setIsOpen(!isOpen)}>
                                                                                                                    {isOpen ? '✕' : '💬'}
                                                                                                                            {!isOpen && <span className="chat-pulse" />}
                                                                                                                                  </button>

                                                                                                                                        {isOpen && (
                                                                                                                                                <div className="chat-widget-box">
                                                                                                                                                          <div className="chat-widget-header">
                                                                                                                                                                      <div className="chat-avatar">🛒</div>
                                                                                                                                                                                  <div>
                                                                                                                                                                                                <div className="chat-title">VeloraCart Support</div>
                                                                                                                                                                                                              <div className="chat-status">● Online</div>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                              <div className="chat-widget-messages">
                                                                                                                                                                                                                                                          {messages.map((msg, i) => (
                                                                                                                                                                                                                                                                        <div key={i} className={`chat-message ${msg.from}`}>
                                                                                                                                                                                                                                                                                        {msg.text}
                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                      <div className="chat-widget-input">
                                                                                                                                                                                                                                                                                                                                                  <input
                                                                                                                                                                                                                                                                                                                                                                value={input}
                                                                                                                                                                                                                                                                                                                                                                              onChange={e => setInput(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                            onKeyPress={e => e.key === 'Enter' && handleSend()}
                                                                                                                                                                                                                                                                                                                                                                                                          placeholder="Type a message..."
                                                                                                                                                                                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                                                                                                                                                                                                  <button onClick={handleSend}>➤</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                              </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                export default ChatWidget;