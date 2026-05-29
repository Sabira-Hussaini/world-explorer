import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "World Explorer",
  description: "A Next.js country explorer project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5DC] text-[#3F3F46] flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-1 max-w-6xl mx-auto w-full p-6">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}