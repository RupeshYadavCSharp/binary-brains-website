"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, BookOpen, Star, CheckCircle, Briefcase, GraduationCap } from "lucide-react"
import { type Course, getBatches, type Batch } from "@/lib/store"
import { EnrollmentForm } from "./enrollment-form"
import { useEffect, useState } from "react"

interface CourseDetailsDialogProps {
  course: Course | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CourseDetailsDialog({ course, open, onOpenChange }: CourseDetailsDialogProps) {
  const [upcomingBatch, setUpcomingBatch] = useState<Batch | null>(null)

  useEffect(() => {
    if (course) {
      const batches = getBatches()
      const courseBatch = batches.find((b) => b.courseId === course.id && b.status === "upcoming")
      setUpcomingBatch(courseBatch || null)
    }
  }, [course])

  if (!course) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">{course.title}</DialogTitle>
              <p className="text-muted-foreground mt-2">{course.description}</p>
            </div>
            {course.popular && <Badge className="bg-primary/20 text-primary border-0 shrink-0">Popular</Badge>}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Course Meta */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Upcoming Batch Info */}
          {upcomingBatch && (
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <GraduationCap className="w-5 h-5" />
                Next Batch Starting Soon!
              </div>
              <p className="text-muted-foreground text-sm">
                Starts on{" "}
                {new Date(upcomingBatch.startDate).toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at {upcomingBatch.startTime}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {upcomingBatch.seats - upcomingBatch.enrolledCount} seats available
              </p>
            </div>
          )}

          <Separator className="bg-border" />

          {/* Syllabus */}
          {course.syllabus && course.syllabus.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                Course Syllabus
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {course.highlights && course.highlights.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                <Star className="w-5 h-5 text-primary" />
                Course Highlights
              </h3>
              <ul className="space-y-2">
                {course.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prerequisites */}
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                Prerequisites
              </h3>
              <ul className="space-y-2">
                {course.prerequisites.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Career Outcomes */}
          {course.careerOutcomes && course.careerOutcomes.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                <Briefcase className="w-5 h-5 text-primary" />
                Career Outcomes
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.careerOutcomes.map((item, index) => (
                  <Badge key={index} className="bg-primary/20 text-primary border-0">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator className="bg-border" />

          {/* Enroll CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <EnrollmentForm
              preSelectedCourse={course.title}
              batchInfo={
                upcomingBatch
                  ? {
                      startDate: upcomingBatch.startDate,
                      startTime: upcomingBatch.startTime,
                    }
                  : undefined
              }
              trigger={
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Enroll Now</Button>
              }
            />
            <Button
              variant="outline"
              className="flex-1 border-border hover:bg-accent bg-transparent"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                  onOpenChange(false)
                }
              }}
            >
              Contact for More Info
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
