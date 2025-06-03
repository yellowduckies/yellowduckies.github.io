import { ArrowRightCircleIcon, Facebook, FacebookIcon, Instagram, Linkedin, LucideFacebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* BG image with grayscale and overlay, hidden on small screens */}
      <div
        className="hidden sm:block absolute inset-0 z-0 bg-top bg-cover"
        style={{
          backgroundImage: "url('/bg-profile.jpg')",
          filter: "grayscale(1) brightness(0.7)",
        }}
      />
      <div className="hidden sm:block absolute inset-0 bg-black/50 dark:bg-black/70 z-10" />

      {/* Foreground content */}
      <div
        className="
          relative z-20 text-white
          flex flex-col items-center sm:items-start
          w-full
          px-4 sm:px-24
          sm:max-w-2xl
          sm:ml-130
          py-16 sm:py-0
          text-center sm:text-left
        "
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi,<br />I'm Saroj Prasad</h1>
        <p className="text-lg max-w-xl mb-4">
          Senior Software Engineer · React | Node.js | AI <br />
          Building beautiful, performant web apps.<br />
          Passionate about minimal design, tech, and solving real-world problems.<br />
        </p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/saroj-prasad" target="_blank" className="text-gray-600 border rounded-full p-3 hover:bg-gray-800 hover:text-white transition"><Linkedin className="inline w-8 h-8" /></a>
          <a href="https://www.facebook.com/zaynian.prasad" target="_blank" className="text-gray-600 border rounded-full p-3 hover:bg-gray-800 hover:text-white transition"><Facebook className="inline w-8 h-8" /></a>
          <a href="https://x.com/_hunnyyyy_" target="_blank" className="text-gray-600 border rounded-full p-3 hover:bg-gray-800 hover:text-white transition"><Twitter className="inline w-8 h-8" /></a>
          <a href="https://instagram.com/sarojprasad_" target="_blank" className="text-gray-600 border rounded-full p-3 hover:bg-gray-800 hover:text-white transition"><Instagram className="inline w-8 h-8" /></a>
        </div>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center bg-black text-white px-6 py-4 rounded-full hover:bg-gray-800 transition"
        >
          Get in Touch
          <ArrowRightCircleIcon className="ml-2" size={22} />
        </a>
      </div>
    </div>
  );
}
