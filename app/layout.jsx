import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Sentra Technology — CCTV Analytics, IoT & Software Indonesia",
  description:
    "Mengubah CCTV menjadi sistem cerdas, mengintegrasikan IoT, dan membangun software enterprise — untuk pemerintahan, industri, dan korporasi Indonesia.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
