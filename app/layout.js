import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Raj Jatav | EGOISTIC",
  description:
    "Personal portfolio of Raj Jatav, also known as EGOISTIC. Business, entrepreneurship and building a legacy.",
  openGraph: {
    title: "Raj Jatav | EGOISTIC",
    description: "Building my own legacy.",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Jatav | EGOISTIC",
    description: "Building my own legacy.",
    images: ["/og.jpg"],
  },
};

export const viewport = {
  themeColor: "#0B0B0A",
};

const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}d.setAttribute("data-theme",t)}catch(e){d.setAttribute("data-theme","dark")}d.setAttribute("data-js","")})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
