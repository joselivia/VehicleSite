import MessageBanner from "./components/banner";
import Footbar from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <MessageBanner/>
        <main>{children}</main>
              <Footbar /> 
      </body>
    </html>
  );
}
