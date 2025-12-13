"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Check } from "lucide-react"
import { EnrollmentForm } from "@/components/enrollment-form"

export function CTA() {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+91 8087936260"

  const handleCallClick = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-balance">
              Join thousands of successful graduates and take the first step towards your dream tech career. Limited
              seats available for the upcoming batch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnrollmentForm
              preSelectedCourse=""
                triggerButton={
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
                onClick={handleCallClick}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    Number Copied!
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 8087936260
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free demo class &bull; EMI options available &bull; 100% placement support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
