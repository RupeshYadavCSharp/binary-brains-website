"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, Loader2, ArrowRight, Mail } from "lucide-react"

const courses = [
  "Full Stack Web Development",
  "Python Programming",
  "Data Science & ML",
  "Mobile App Development",
  "Cloud Computing (AWS)",
  "Cyber Security",
  "Java Development",
  "UI/UX Design",
  "Digital Marketing",
  "Other",
]

interface EnrollmentFormProps {
  triggerButton?: React.ReactNode
}

export function EnrollmentForm({ triggerButton }: EnrollmentFormProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const generateEmailContent = () => {
    return `New Enrollment Request - Binary Brains

Student Details:
================
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interested: ${formData.course}
${formData.message ? `Message: ${formData.message}` : ""}

---
Sent from Binary Brains Website Enrollment Form`
  }

  const handleCopyAndEmail = async () => {
    setLoading(true)
    const emailContent = generateEmailContent()

    try {
      await navigator.clipboard.writeText(emailContent)
      setCopied(true)

      // Open default email client
      const subject = encodeURIComponent(`New Enrollment Request - ${formData.course}`)
      const body = encodeURIComponent(emailContent)
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=binarybrains0001@gmail.com&su=${subject}&body=${body}`,
        "_blank",
      )

      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setCopied(false)
        setOpen(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      return
    }

    await handleCopyAndEmail()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Enroll Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">Enroll at Binary Brains</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Almost Done!</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Gmail has opened in a new tab. Please click &quot;Send&quot; to complete your enrollment.
            </p>
            <p className="text-xs text-muted-foreground">{copied && "Email content also copied to clipboard!"}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name *
              </Label>
              <Input
                id="name"
                required
                placeholder="Enter your full name"
                className="bg-background border-border"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="bg-background border-border"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                className="bg-background border-border"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="text-foreground">
                Course Interested In *
              </Label>
              <Select
                required
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                placeholder="Any questions or specific requirements..."
                className="bg-background border-border resize-none"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Submit & Send via Gmail
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              This will open Gmail to send your enrollment request directly to Binary Brains.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
