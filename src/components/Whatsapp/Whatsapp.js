import React from 'react';
import "../Whatsapp/Whatsapp.css";

const Whatsapp = () => {
  return (
    <div className="container1 sticky ">
      <button id="whatsapp-button" className="whatsapp bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Chat with us
      </button>
      <div
        id="wa-chat-btn-root"
        className="wa-chat-btn-fixed wa-splmn-chat-btn-offset"
        style={{ display: "table" }}
      >
        <a href="https://wa.me/9844222500?text=Hello,I need to chat" target="_blank">
          <img
            className="wa-chat-btn-icon-cta-big"
            alt="Whatsapp Chat Button"
            src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/image_6.4.png?816/"
          />
        </a>
        <a href="https://wa.me/9844202908" target="_blank">
          <img
            className="wa-chat-btn-icon-cta-big"
            alt="Whatsapp Chat Button"
            src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/image_6.4.png?816/"
          />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
