import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Nav from "./components/Nav";
import { MembersProvider } from "./context/dataContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FireStore Database",
  description: "Home - Firestore CRUD Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <MembersProvider>
          <Nav/>
          {children}
        </MembersProvider>
      </body>
    </html>
  );
}
