import Providers from "@/lib/Providers";
import "./globals.css";
import "./loader.css";
import 'react-quill/dist/quill.snow.css';

export const metadata = {
  title: "Raian's Portfolio",
  description: "Portfolio of Raian.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
