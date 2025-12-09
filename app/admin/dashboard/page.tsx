"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, LogOut, Users, TrendingUp, Home } from "lucide-react"
import { Logo } from "@/components/logo"
import { isAdminAuthenticated, clearAdminSession } from "@/lib/auth"
import { getCourses, getBatches, type Course, type Batch } from "@/lib/store"
import { CourseManager } from "@/components/admin/course-manager"
import { BatchManager } from "@/components/admin/batch-manager"
import Link from "next/link"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [courses, setCourses] = useState<Course[]>([])
  const [batches, setBatches] = useState<Batch[]>([])

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push("/admin/login")
      return
    }

    setCourses(getCourses())
    setBatches(getBatches())
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    clearAdminSession()
    router.push("/admin/login")
  }

  const refreshData = () => {
    setCourses(getCourses())
    setBatches(getBatches())
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  const upcomingBatches = batches.filter((b) => b.status === "upcoming").length
  const ongoingBatches = batches.filter((b) => b.status === "ongoing").length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Logo size="sm" />
              </Link>
              <span className="text-sm text-muted-foreground hidden sm:block">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
                <Home className="w-4 h-4 mr-2" />
                View Site
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{courses.length}</p>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{upcomingBatches}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Batches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{ongoingBatches}</p>
                  <p className="text-sm text-muted-foreground">Ongoing Batches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{batches.length}</p>
                  <p className="text-sm text-muted-foreground">Total Batches</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="courses" className="data-[state=active]:bg-background">
              <BookOpen className="w-4 h-4 mr-2" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="batches" className="data-[state=active]:bg-background">
              <Calendar className="w-4 h-4 mr-2" />
              Batches
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <CourseManager courses={courses} onUpdate={refreshData} />
          </TabsContent>

          <TabsContent value="batches">
            <BatchManager batches={batches} courses={courses} onUpdate={refreshData} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
