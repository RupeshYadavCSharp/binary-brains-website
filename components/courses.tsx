"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import { getCourses, type Course } from "@/lib/store"
import { CourseDetailsDialog } from "./course-details-dialog"

export function Courses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    setCourses(getCourses())
  }, [])

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course)
    setDialogOpen(true)
  }

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Popular Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Industry-aligned curriculum designed by experts to help you land your dream job
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  {course.popular && <Badge className="bg-primary/20 text-primary border-0">Popular</Badge>}
                </div>
                <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleLearnMore(course)}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <CourseDetailsDialog course={selectedCourse} open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
