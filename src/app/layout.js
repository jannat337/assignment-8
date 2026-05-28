import Navbar from "@/components/Navbar";
import "./globals.css";
import "animate.css";
import { FaFacebook, FaTwitter, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export const metadata = {
  title: "SunCart ☀️ - Summer Essentials Store",
  description: "A modern summer eCommerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-180px)]">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

            {/* Contact Us */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-base mb-3">Contact Us</h3>
              <p className="text-gray-400 flex items-center gap-2">
                <MdPhone className="text-orange-400 text-lg" />
                +880 1234-567890
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <MdEmail className="text-orange-400 text-lg" />
                support@suncart.com
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-base mb-3">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition text-2xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                  <FaXTwitter />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-base mb-3">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">Terms & Conditions</a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
            Copyright © 2026 – <span className="text-white font-bold">SunCart</span>. All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}