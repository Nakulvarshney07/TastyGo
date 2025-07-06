import React from "react";
import './FloatingChatBot.css'

const FloatingChatButton = () => {
  const openChat = () => {
    window.open("http://127.0.0.1:7860", "_blank");
   
  };

  return (
  <button
      className="Chat-button"
      onClick={openChat}
    >
       🤖 Ask Bot
    </button>


  );
};

export default FloatingChatButton;
