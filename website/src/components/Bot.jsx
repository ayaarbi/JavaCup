import React, { useState } from "react";
import "../styles/Bot.css";

export default function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    addMessage(input, "user");
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });
      const data = await res.json();
      addMessage(data.reply, "bot");
    } catch {
      addMessage("Error: CoffeeBot is not responding.", "bot");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div>
      <div id="chat-button" onClick={() => setIsOpen(true)}>
        💬
      </div>

      {isOpen && (
        <div id="chat-widget" style={{ display: "flex" }}>
          <div className="chat-header">
            ☕ CoffeeBot
            <span id="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </span>
          </div>

          <div id="chatbox">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              id="userInput"
              type="text"
              placeholder="Ask me about coffee..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button id="sendBtn" onClick={sendMessage}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
