"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      {showTooltip && (
        <div className="mr-3 px-3 py-1 rounded-md bg-black text-white text-xs shadow-lg animate-fade-in">
          Chat with us
        </div>
      )}

      {/* Button */}
      <Link
        href="https://wa.me/918087936260?text=Hello%20Binary%20Brains,%20I%20want%20more%20information"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="
          relative
          flex items-center justify-center
          w-16 h-16 rounded-full
          bg-green-500 text-white
          shadow-xl
          hover:bg-green-600
          transition-all duration-300
          animate-pulse-slow hover:animate-bounce-icon
        "
      >
        <MessageCircle className="w-8 h-8" />
      </Link>

      <style jsx>{`
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 15px 8px rgba(34, 197, 94, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-icon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }

        .animate-bounce-icon {
          animation: bounce-icon 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default WhatsAppFloat
