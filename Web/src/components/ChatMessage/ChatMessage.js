import React from "react";
import './ChatMessage.css'
import Avatar from "../../assents/Avatar";

// User (user | gpt)
// message - aonde vai estar o prompt
/* exemplo:
{
    user: 'user'
    message: 'crie um nome de artigo'
} */
export const ChatMessage =({message})=>{
    return (
    <div className={`chat-message ${message.user === 'gpt' && "chatgpt"}`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                {message.user === 'gpt' && ( <Avatar/>)}
            </div>
            <div className="message">{message.message}</div>
        </div>
    </div>
)}