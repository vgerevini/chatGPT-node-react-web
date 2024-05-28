import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar";

//user - user ou chatgpt
//message - prompt

export const ChatMessage = ({message}) => {
    return (
    <div className={`chat-message ${message.user === 'gpt'} && "chatgpt"`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                {message.user === 'gpt' && (<Avatar></Avatar> )}
            </div>
            <div className="message">
                {message.message}
            </div>
        </div>
    </div>
    )
}