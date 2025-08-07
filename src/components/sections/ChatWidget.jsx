import React, { useState } from 'react';
import './ChatWidget.css';

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about tech 👨‍💻' },
  ]);
  const [input, setInput] = useState('');

const handleSend = async () => {
  if (input.trim() === '') return;

  const userMessage = { from: 'user', text: input };
  setMessages(prev => [...prev, userMessage]);
  setInput('');

  // Show placeholder while waiting
  setMessages(prev => [...prev, { from: 'bot', text: 'Typing...' }]);

  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();

    setMessages(prev => [
      ...prev.slice(0, -1), // Remove "Typing..."
      { from: 'bot', text: data.reply }
    ]);
  } catch (error) {
    setMessages(prev => [
      ...prev.slice(0, -1),
      { from: 'bot', text: "Something went wrong. Try again later." }
    ]);
  }
};

  return (
    <div className="chat-widget">
      <h3>💬 Tech AI Advisor</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.from === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about tech..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
// ChatWidget.jsx