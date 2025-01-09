"use client";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "@/firebaseConfig";


interface Message {
  id: string;
  name: string;
  message: string;
}

export default function MessageBanner() {

 const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const messagesRef = ref(db, "Messages");
     const fetchMessages = () => {
      get(messagesRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
                   const messagesArray: Message[] = Object.entries(snapshot.val()).map(
              ([id, data]) => {
                         const messageData = data as { name: string; message: string;timestamp: string};
                return {
                  id,
                  ...messageData,
                };
              }
            );
          
              setMessages(messagesArray.slice(-10).reverse()); 
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    };
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="m-7">
      <div className="grid sm:hidden grid-cols-1 gap-6 overflow-y-auto max-h-[40vh]">
        {/* Vertical scroll for small screens */}
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`p-3 w-full rounded-xl ${
              index === 0 ? "bg-green-400" : "bg-blue-400"
            }`}
          >
            <h5 className="font-bold text-white">{msg.name}</h5>
            <p className="text-white">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="hidden sm:flex gap-6 overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {/* Horizontal scroll for larger screens */}
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`p-3 min-w-[250px] rounded-xl ${
              index === 0 ? "bg-green-400" : "bg-blue-400"
            }`}
          >
            <h5 className="font-bold text-white">{msg.name}</h5>
            <p className="text-white">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}