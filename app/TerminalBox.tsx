"use client";
import { useState } from 'react';

export default function TerminalBox() {
  const [isClicked, setIsClicked] = useState(false);

  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText('pip install bugbreaker');
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400); // Remove border after 2 seconds
  };

  const terminalText = `user ~ % pip install bugbreaker`;

  return (
    <div className="max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden relative">
      <div className="bg-gray-800 p-6 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-lg relative">
        <pre className="font-mono whitespace-pre text-lg">{terminalText}</pre>
        <button
          onClick={() => copyToClipboard(terminalText)}
          className={` mt-5 text-white font-bold p-3 rounded absolute right-2 bottom-3 ${isClicked ? 'border-2 border-white' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 011-1.732A2 2 0 016 2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
