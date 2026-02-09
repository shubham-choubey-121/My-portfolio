"use client";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/logo.png"
                alt="Shubham Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
                priority
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shubham.dev
              </h3>
            </div>

            <p className="text-gray-400 text-sm">
              Building clean, modern, and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["home", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="hover:text-white transition capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/shubhamchoubeyx"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-gray-700"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-pink-500"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:shubhamchoubey393@gmail.com"
                className="social-icon hover:bg-red-600"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
            <p>© {new Date().getFullYear()} Shubham Choubey. All rights reserved.</p>
            <p>Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
