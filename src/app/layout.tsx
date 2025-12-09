import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Dantong Zhu | Software Engineer",
  description: "Portfolio website of Dantong Zhu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
