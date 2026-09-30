import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const viewport: Viewport = {
  themeColor: "#FFF9F0"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://littlesprouts-daycare.netlify.app"),
  title: {
    default: "Little Sprouts Daycare — A Safe Place to Learn, Play and Grow",
    template: "%s · Little Sprouts Daycare"
  },
  description:
    "Warm, safe, play-based daycare for infants to school-age children. Explore programs, daily routines, safety practices, and enrollment.",
  openGraph: {
    type: "website",
    siteName: "Little Sprouts Daycare",    images: [
      {
        url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Children playing and learning together in a bright daycare classroom"
      }
    ]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%232F7D5B'/%3E%3Ccircle cx='12' cy='13' r='3' fill='%23F6C85F'/%3E%3Ccircle cx='20' cy='13' r='3' fill='%23FFF9F0'/%3E%3Cpath d='M10 21c2 2.5 10 2.5 12 0' stroke='%23fff' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
