"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"
import { getBatches, type Batch } from "@/lib/store"

export function UpcomingBatches() {
  const [batches, setBatches] = useState<Batch[]>([])

  useEffect(() => {
    const allBatches = getBatches()
    // Show only upcoming batches, sorted by date
    const upcoming = allBatches
      .filter((b) => b.status === "upcoming")
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      .slice(0, 6)
    setBatches(upcoming)
  }, [])

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 || 12
    return `${hour12}:${minutes} ${ampm}`
  }

  if (batches.length === 0) {
    return null
  }

  return (
    <section id="batches" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Upcoming Batches</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            New batches starting soon - Reserve your seat today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch) => (
            <Card
              key={batch.id}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg text-foreground">{batch.courseName}</h3>
                  <Badge className="bg-blue-500/20 text-blue-400 border-0">Upcoming</Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Start Date</p>
                      <p className="text-sm text-foreground font-medium">{formatDate(batch.startDate)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Timing</p>
                      <p className="text-sm text-foreground font-medium">{formatTime(batch.startTime)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Available Seats</p>
                      <p className="text-sm text-foreground font-medium">
                        {batch.seats - batch.enrolledCount} of {batch.seats} seats
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
