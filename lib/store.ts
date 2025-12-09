// Data store for courses and batches using localStorage
// Can be easily migrated to Supabase or other database

export interface Course {
  id: string
  title: string
  description: string
  duration: string
  tags: string[]
  popular: boolean
  createdAt: string
}

export interface Batch {
  id: string
  courseId: string
  courseName: string
  startDate: string
  startTime: string
  seats: number
  enrolledCount: number
  status: "upcoming" | "ongoing" | "completed"
  createdAt: string
}

const COURSES_KEY = "binary_brains_courses"
const BATCHES_KEY = "binary_brains_batches"

// Default courses
const defaultCourses: Course[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and databases to build complete web applications.",
    duration: "6 Months",
    tags: ["React", "Node.js", "MongoDB"],
    popular: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts including OOP, data structures, and automation.",
    duration: "3 Months",
    tags: ["Python", "Django", "Flask"],
    popular: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Data Science & ML",
    description: "Dive into data analysis, machine learning, and AI with hands-on projects using real datasets.",
    duration: "8 Months",
    tags: ["Python", "TensorFlow", "SQL"],
    popular: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native for iOS and Android platforms.",
    duration: "4 Months",
    tags: ["React Native", "iOS", "Android"],
    popular: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Cloud Computing & DevOps",
    description: "Learn AWS, Docker, Kubernetes, and CI/CD pipelines for modern cloud infrastructure.",
    duration: "5 Months",
    tags: ["AWS", "Docker", "Kubernetes"],
    popular: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description: "Master security concepts, ethical hacking, penetration testing, and network security.",
    duration: "4 Months",
    tags: ["Security", "Networking", "Linux"],
    popular: false,
    createdAt: new Date().toISOString(),
  },
]

// Initialize with default data if empty
function initializeStore() {
  if (typeof window === "undefined") return

  if (!localStorage.getItem(COURSES_KEY)) {
    localStorage.setItem(COURSES_KEY, JSON.stringify(defaultCourses))
  }
  if (!localStorage.getItem(BATCHES_KEY)) {
    localStorage.setItem(BATCHES_KEY, JSON.stringify([]))
  }
}

// Courses CRUD
export function getCourses(): Course[] {
  if (typeof window === "undefined") return defaultCourses
  initializeStore()
  const data = localStorage.getItem(COURSES_KEY)
  return data ? JSON.parse(data) : defaultCourses
}

export function addCourse(course: Omit<Course, "id" | "createdAt">): Course {
  const courses = getCourses()
  const newCourse: Course = {
    ...course,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  courses.push(newCourse)
  localStorage.setItem(COURSES_KEY, JSON.stringify(courses))
  return newCourse
}

export function updateCourse(id: string, updates: Partial<Course>): Course | null {
  const courses = getCourses()
  const index = courses.findIndex((c) => c.id === id)
  if (index === -1) return null

  courses[index] = { ...courses[index], ...updates }
  localStorage.setItem(COURSES_KEY, JSON.stringify(courses))
  return courses[index]
}

export function deleteCourse(id: string): boolean {
  const courses = getCourses()
  const filtered = courses.filter((c) => c.id !== id)
  if (filtered.length === courses.length) return false

  localStorage.setItem(COURSES_KEY, JSON.stringify(filtered))
  return true
}

// Batches CRUD
export function getBatches(): Batch[] {
  if (typeof window === "undefined") return []
  initializeStore()
  const data = localStorage.getItem(BATCHES_KEY)
  return data ? JSON.parse(data) : []
}

export function addBatch(batch: Omit<Batch, "id" | "createdAt">): Batch {
  const batches = getBatches()
  const newBatch: Batch = {
    ...batch,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  batches.push(newBatch)
  localStorage.setItem(BATCHES_KEY, JSON.stringify(batches))
  return newBatch
}

export function updateBatch(id: string, updates: Partial<Batch>): Batch | null {
  const batches = getBatches()
  const index = batches.findIndex((b) => b.id === id)
  if (index === -1) return null

  batches[index] = { ...batches[index], ...updates }
  localStorage.setItem(BATCHES_KEY, JSON.stringify(batches))
  return batches[index]
}

export function deleteBatch(id: string): boolean {
  const batches = getBatches()
  const filtered = batches.filter((b) => b.id !== id)
  if (filtered.length === batches.length) return false

  localStorage.setItem(BATCHES_KEY, JSON.stringify(filtered))
  return true
}
