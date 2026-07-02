import React, { useState } from 'react';
import { Bot, Send, X } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Bonjour ! Je suis AGENT'IA. Comment puis-je vous aider aujourd'hui ?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
        
        // Simuler une réponse
        setTimeout(() => {
            setMessages(prev => [...prev, { text: "Je consulte votre dossier... Votre dernière demande de congé est actuellement en cours de validation par votre N+1. Souhaitez-vous relancer ?", sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
            {/* Bubble Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '60px', height: '60px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #009944, #006633)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', border: 'none', cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(0,153,68,0.5)',
                        animation: 'fadeUp 0.5s ease'
                    }}
                >
                    <Bot size={32} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="card fade-up" style={{ width: '350px', height: '500px', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', background: '#0a0f1a', border: '1px solid var(--border)' }}>
                    <div style={{ padding: '1rem', background: 'linear-gradient(90deg, #006633, #009944)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="flex gap-2" style={{ color: 'white', fontWeight: 600 }}>
                            <Bot /> AGENT'IA
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}><X size={20} /></button>
                    </div>
                    
                    <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                background: msg.sender === 'user' ? '#1f2937' : 'rgba(0,153,68,0.15)',
                                color: msg.sender === 'user' ? '#fff' : '#00c857',
                                padding: '0.75rem', borderRadius: '12px',
                                maxWidth: '85%', fontSize: '0.85rem'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Posez votre question..." 
                            value={input} onChange={e => setInput(e.target.value)}
                            style={{ borderRadius: '50px' }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
