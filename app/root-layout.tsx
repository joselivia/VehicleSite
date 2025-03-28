"use client"; 
import "./globals.css";
import { useEffect } from "react";
import Footbar from "./components/footer";
import Navbar from "./components/navbar";
import { FaWhatsappSquare } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-K2Z523S9";
    document.head.appendChild(script);

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-K2Z523S9";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(iframe);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <div className="wrapper">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>
                <span className="dot"></span>
              </div>
            ))}
          </div>
          {children}
          <a
            href="https://wa.me/+254701936432"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              right: "20px",
              bottom: "20px",
              fontSize: "40px",
              zIndex: 1000,
              color: "#2CFE02",
            }}
          >
            <FaWhatsappSquare />
          </a>
        </main>
        <Footbar />
      </body>
    </html>
  );
}
