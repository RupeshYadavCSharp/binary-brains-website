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
  syllabus?: string[]
  highlights?: string[]
  prerequisites?: string[]
  careerOutcomes?: string[]
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
    syllabus: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+ & TypeScript",
      "React.js & State Management",
      "Node.js & Express.js",
      "MongoDB & SQL Databases",
      "REST APIs & GraphQL",
      "Authentication & Security",
      "Deployment & DevOps Basics",
    ],
    highlights: [
      "Build 10+ real-world projects",
      "Industry-relevant curriculum",
      "Live coding sessions",
      "Code reviews by experts",
      "Job assistance program",
    ],
    prerequisites: ["Basic computer knowledge", "Logical thinking ability", "No prior coding experience required"],
    careerOutcomes: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Application Developer"],
  },
  {
    id: "2",
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts including OOP, data structures, and automation.",
    duration: "3 Months",
    tags: ["Python", "Django", "Flask"],
    popular: false,
    createdAt: new Date().toISOString(),
    syllabus: [
      "Python Basics & Syntax",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "File Handling & Automation",
      "Django Web Framework",
      "Flask Microframework",
      "Database Integration",
      "API Development",
    ],
    highlights: [
      "Hands-on coding exercises",
      "Automation projects",
      "Web scraping techniques",
      "Real-world applications",
    ],
    prerequisites: ["Basic computer skills", "Eagerness to learn programming"],
    careerOutcomes: ["Python Developer", "Backend Developer", "Automation Engineer", "Django Developer"],
  },
  {
    id: "3",
    title: "Data Science & ML",
    description: "Dive into data analysis, machine learning, and AI with hands-on projects using real datasets.",
    duration: "8 Months",
    tags: ["Python", "TensorFlow", "SQL"],
    popular: true,
    createdAt: new Date().toISOString(),
    syllabus: [
      "Statistics & Probability",
      "Python for Data Science",
      "Data Visualization (Matplotlib, Seaborn)",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "TensorFlow & Keras",
      "Natural Language Processing",
      "Model Deployment",
    ],
    highlights: ["Work with real datasets", "Kaggle competitions", "Industry capstone project", "ML model deployment"],
    prerequisites: ["Basic Python knowledge", "High school mathematics", "Analytical mindset"],
    careerOutcomes: ["Data Scientist", "ML Engineer", "Data Analyst", "AI Specialist"],
  },
  {
    id: "4",
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native for iOS and Android platforms.",
    duration: "4 Months",
    tags: ["React Native", "iOS", "Android"],
    popular: false,
    createdAt: new Date().toISOString(),
    syllabus: [
      "React Native Fundamentals",
      "UI Components & Styling",
      "Navigation & Routing",
      "State Management (Redux)",
      "Native Device Features",
      "API Integration",
      "App Store Deployment",
      "Performance Optimization",
    ],
    highlights: [
      "Build 5+ mobile apps",
      "Deploy to App Store & Play Store",
      "Cross-platform development",
      "Real device testing",
    ],
    prerequisites: ["JavaScript knowledge", "Basic React.js understanding"],
    careerOutcomes: ["Mobile App Developer", "React Native Developer", "Cross-Platform Developer"],
  },
  {
    id: "5",
    title: "Cloud Computing & DevOps",
    description: "Learn AWS, Docker, Kubernetes, and CI/CD pipelines for modern cloud infrastructure.",
    duration: "5 Months",
    tags: ["AWS", "Docker", "Kubernetes"],
    popular: false,
    createdAt: new Date().toISOString(),
    syllabus: [
      "Cloud Computing Fundamentals",
      "AWS Services (EC2, S3, Lambda)",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Best Practices",
    ],
    highlights: [
      "Hands-on AWS projects",
      "Real-world deployment scenarios",
      "Industry certifications prep",
      "DevOps toolchain mastery",
    ],
    prerequisites: ["Linux basics", "Basic programming knowledge", "Networking fundamentals"],
    careerOutcomes: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer", "Platform Engineer"],
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description: "Master security concepts, ethical hacking, penetration testing, and network security.",
    duration: "4 Months",
    tags: ["Security", "Networking", "Linux"],
    popular: false,
    createdAt: new Date().toISOString(),
    syllabus: [
      "Security Fundamentals",
      "Network Security",
      "Ethical Hacking Techniques",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Cryptography",
      "Security Tools & Frameworks",
      "Incident Response",
    ],
    highlights: [
      "Hands-on hacking labs",
      "Real vulnerability testing",
      "Industry tools training",
      "Certification preparation",
    ],
    prerequisites: ["Basic networking knowledge", "Linux familiarity", "Problem-solving skills"],
    careerOutcomes: ["Security Analyst", "Penetration Tester", "Security Engineer", "SOC Analyst"],
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
