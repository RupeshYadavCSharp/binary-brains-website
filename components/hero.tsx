"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Check } from "lucide-react"
import { EnrollmentForm } from "@/components/enrollment-form"

export function Hero() {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+91 8087936260"

  const handleCallClick = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <span className="text-primary text-sm font-medium">New Batch Starting Soon</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Master the Future of <span className="text-primary">Technology</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Join Binary Brains and transform your career with industry-leading courses in programming, web
              development, data science, and more. Learn from experts and build real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <EnrollmentForm
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
                    Call Us Now
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-chart-4" />
                <div className="w-3 h-3 rounded-full bg-chart-2" />
              </div>
              <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
                <code>
                  {`function learnToCode() {
  const skills = [
    "Python",
    "JavaScript", 
    "React",
    "Data Science"
  ];
  
  return skills.map(skill => 
    master(skill)
  );
}

// Start your journey today!
learnToCode();`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
