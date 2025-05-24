// components/ChatMessage.js
import './ChatMessage.css';

export default function ChatMessage({ message }) {
  const isUser = message.sender === 'user';
  return (
    <div className={`chat-message ${isUser ? 'user' : 'admin'}`}>
      <div className="message-bubble">
        <div className="message-text">{message.text}</div>
        <div className="message-meta">
          <span className="timestamp">{message.time || '12:45 PM'}</span>
          {isUser && <span className="status">✓</span>}
        </div>
      </div>
    </div>
  );
}
