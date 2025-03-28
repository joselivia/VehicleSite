import "./globals.css";
import { Metadata } from "next";
import RootLayout from "./root-layout"; 

export const metadata: Metadata = {
  metadataBase: new URL("https://daves.co.ke"),
  keywords: [
    "lost car key",
    "car key chip",
    "car unlocking keys",
    "alarm services",
    "key replacement",
    "car keys near me",

  ],
  title:{
    default:"Daves Telamatic",
    template:`%s | Daves Telematic`
  },
openGraph: {
  description: "Daves Telematic offers expert car key replacement, key chip programming, car unlocking, alarm system installation, and security solutions. Reliable and fast services in Kenya.",
images:['']
}

};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
