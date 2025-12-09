import { Code, Users, Briefcase, Award, BookOpen, Headphones } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world projects that you can add to your portfolio and showcase to employers.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience at top tech companies.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "Get dedicated career support with resume reviews, mock interviews, and job referrals.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn industry-recognized certifications that validate your skills to employers.",
  },
  {
    icon: BookOpen,
    title: "Flexible Learning",
    description: "Choose from online, offline, or hybrid modes with weekend and evening batches.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get round-the-clock doubt resolution and mentorship from our teaching assistants.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Binary Brains?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We provide everything you need to succeed in your tech career journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
