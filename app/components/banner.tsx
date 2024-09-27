"use client";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "@/firebaseConfig";
import { GiTatteredBanner } from "react-icons/gi";

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
                const messageData = data as { name: string; message: string };
                return {
                  id,
                  ...messageData,
                };
              }
            );
            setMessages(messagesArray.slice(-10).reverse()); // Get the last 10 messages and reverse the order
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    };
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    const banner = document.getElementById("marketing-banner");
    if (banner) {
      banner.style.display = "none";
    }
  };

  return (
    <div
      id="marketing-banner"
      className="fixed z-50 flex justify-between w-[calc(100%-2rem)] -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm max-w-md left-1/2 dark:bg-gray-700 dark:border-gray-600" >
      <GiTatteredBanner />
      <div className="flex items-center truncate overflow-hidden whitespace-nowrap">
        <div className="marquee">
          {messages.map((msg) => (
            <div key={msg.id} className="message">
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <strong>{msg.name}</strong>: {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-shrink-0">
        <button
          onClick={handleClose}
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <span className="sr-only">Close banner</span>×
        </button>
      </div>
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee 35s linear infinite;
        }
        .message {
          margin-right: 2rem;
        }
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @media (max-width: 400px) {
          #marketing-banner {
            width: calc(100% - 1rem);
            padding: 1rem;
          }
          .message {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}
