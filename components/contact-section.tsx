"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, ExternalLink, Copy, Check } from "lucide-react"

const contactInfo = {
  phones: ["+91 8087936260", "+91 9766702037"],
  email: "binarybrains0001@gmail.com",
  address:
    "1st Floor, Dattatray Apartment, Plot No. 5, Ambazari - Hingna Rd, Adhayapak Lay Out, Nagpur, Maharashtra 440036",
  googleMapsUrl: "https://maps.google.com/maps?q=Binary+Brains+Nagpur+Hingna+Road",
  hours: "Mon - Sat: 9:00 AM - 8:00 PM",
}

function CopyableText({ text, type }: { text: string; type: "phone" | "email" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
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
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-left"
    >
      <span>{text}</span>
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Visit us at our Nagpur center or reach out through any of the channels below
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Phone */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <div className="space-y-1">
                      {contactInfo.phones.map((phone, index) => (
                        <CopyableText key={index} text={phone} type="phone" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-2">Click to copy number</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <CopyableText text={contactInfo.email} type="email" />
                    <p className="text-xs text-muted-foreground/70 mt-2">Click to copy email</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
                    <p className="text-muted-foreground">{contactInfo.hours}</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Address & Map */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex-1 min-h-[200px] rounded-lg overflow-hidden bg-background/50 mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Binary Brains, Nagpur</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Hingna Road, Maharashtra</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full border-border hover:bg-secondary bg-transparent">
                <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
