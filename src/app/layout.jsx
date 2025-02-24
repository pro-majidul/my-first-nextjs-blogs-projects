import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogs Title",
  description: "Generated by create next app",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="p-6 container mx-auto">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar></Navbar>
//         {children}
//       </body>
//     </html>
//   );
// }

import React from 'react';

const layout = ({children}) => {
  return (
    <html lang="en" className="p-6 container mx-auto">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
};

export default layout;
