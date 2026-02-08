import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Servd-AI Recipes Platform",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        header
        <main className="min-h-screen">{children}</main>
        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto flex justify-center items-center">
            <p className="text-sm text-muted-foreground">
              Made with Love by Sibin Sunny
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
