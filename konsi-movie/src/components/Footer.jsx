import React from 'react';

export default function Footer() {
  return (
    <div className="bg-slate-900 text-white py-6">
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">I am a Student Learning New Stuff</p>
        <p className="text-xl font-bold">Team Blue Bird</p>
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} Team Blue Bird. All Rights Reserved.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="mt-4 text-center space-x-6">
        <a href="https://twitter.com" className="hover:text-blue-400 transition duration-300">
          Twitter
        </a>
        <a href="https://linkedin.com" className="hover:text-blue-400 transition duration-300">
          LinkedIn
        </a>
        <a href="https://github.com" className="hover:text-blue-400 transition duration-300">
          GitHub
        </a>
      </div>
    </div>
  );
}
