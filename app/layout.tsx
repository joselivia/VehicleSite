import Footbar from "./components/footer";
import Navbar from "./components/navbar";
import { FaWhatsappSquare } from "react-icons/fa";
import "./globals.css";
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Car Services</title>
        <meta name="description" content="Lost car key" />
        <meta
          name="keywords"
          content="lost car key, car key chip, car unlocking, alarm services, key replacement"
        />
      </Head>
      <body>
        <Navbar />
        <main>
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
            {" "}
            <FaWhatsappSquare />
          </a>
        </main>
        <Footbar />
      </body>
    </html>
  );
}
