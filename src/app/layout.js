// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: 'PortForge – Futuristic Portfolio Builder',
  description: 'Build your dream student portfolio with a single click.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
