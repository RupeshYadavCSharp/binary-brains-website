"use client"

import { useState } from "react"
import Link from "next/link"
import { Youtube, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react"

import { Logo } from "@/components/logo"
import { Mail, Phone, MapPin, ExternalLink, Copy, Check } from "lucide-react"

const footerLinks = {
  courses: [
    { label: "Web Development", href: "#courses" },
    { label: "Python Programming", href: "#courses" },
    { label: "Data Science", href: "#courses" },
    { label: "Mobile Development", href: "#courses" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Reviews", href: "#reviews" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

function CopyableContact({ text, icon: Icon }: { text: string; icon: typeof Mail }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 hover:text-primary transition-colors group text-left"
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span>{text}</span>
      {copied ? (
        <Check className="w-3 h-3 text-green-500" />
      ) : (
        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  )
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* COMPANY + CONTACT + SOCIAL ICONS */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Empowering the next generation of tech professionals with industry-leading training programs.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 text-sm text-muted-foreground mb-4">
              <CopyableContact text="binarybrains0001@gmail.com" icon={Mail} />
              <CopyableContact text="+91 8087936260" icon={Phone} />
              <CopyableContact text="+91 9766702037" icon={Phone} />
            </div>

            {/* GOOGLE MAP LOCATION */}
            <a
              href="https://share.google/dSkWd2JTTgRskEvGH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-primary transition-colors mb-6"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                1st Floor, Dattatray Apartment, Plot No. 5, Ambazari - Hingna Rd, Nagpur, MH 440036
              </span>
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 mt-4">
              <Link href="https://www.youtube.com/@binarybrains5462" target="_blank">
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-red-600 transition-colors" />
              </Link>

              <Link href="https://www.instagram.com/binarybrainsnagpur/" target="_blank">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-pink-600 transition-colors" />
              </Link>

              <Link href="https://www.facebook.com/BinaryBrainsNagpur/" target="_blank">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-blue-600 transition-colors" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/binary-brains-nagpur?originalSubdomain=in"
                target="_blank"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-blue-700 transition-colors" />
              </Link>

              <Link href="https://wa.me/918087936260" target="_blank">
                <MessageCircle className="h-6 w-6 text-muted-foreground hover:text-green-600 transition-colors" />
              </Link>
            </div>
          </div>

          {/* COURSES */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Courses</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Binary Brains. All rights reserved.
          </p>

          <a
            href="https://share.google/dSkWd2JTTgRskEvGH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            View on Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
