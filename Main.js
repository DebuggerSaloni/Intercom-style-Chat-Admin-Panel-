import { useEffect, useState, useRef } from 'react';
import './Main.css';
import ChatMessage from './ChatMessage';
import EmojiPicker from 'emoji-picker-react';

const initialMessages = {
  1: [
    { id: 1, sender: 'admin', text: 'Hi John!', time: '12:40 PM' },
    { id: 2, sender: 'user', text: 'Hey there 👋', time: '12:41 PM' },
  ],
  2: [
    { id: 1, sender: 'admin', text: 'Hello Jane!', time: '12:30 PM' },
    { id: 2, sender: 'user', text: 'I have a question.', time: '12:31 PM' },
  ],
  3: [
    { id: 1, sender: 'admin', text: 'Hi Bob!', time: '12:20 PM' },
    { id: 2, sender: 'user', text: 'Help me out.', time: '12:21 PM' },
  ],
};

export default function Main({ selectedUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      setMessages(initialMessages[selectedUser.id] || []);
    }
  }, [selectedUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'admin',
        text: getFakeReply(newUserMessage.text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  const getFakeReply = (text) => {
    const replies = [
      "Got it 👍",
      "I'm checking on that for you.",
      "Let me get back to you shortly.",
      "Can you tell me more?",
      "Interesting, go on...",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  if (!selectedUser) {
    return (
      <div className="main">
        <div className="placeholder">Select a chat to get started</div>
      </div>
    );
  }

  return (
    <div className="main">
      <header className="main-header">Chat with {selectedUser.name}</header>

      <div className="chat-window">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <div className="chat-message admin">
            <div className="message-bubble typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input">
        <button className="emoji-toggle" onClick={() => setShowEmoji((prev) => !prev)}>😊</button>

        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button onClick={handleSend}>Send</button>
      </div>

      {showEmoji && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
}
