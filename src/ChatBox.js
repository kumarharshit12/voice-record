import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-box">
      {/* <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
            <span className="sender">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div> */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;