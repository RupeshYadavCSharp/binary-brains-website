"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Quote, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    avatar: "/professional-indian-woman-software-engineer.jpg",
    content:
      "Binary Brains transformed my career completely. The Full Stack course gave me the skills I needed to land my dream job. The instructors are incredibly supportive and the curriculum is industry-focused.",
    rating: 5,
    highlight: "Got placed in 3 months",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist",
    company: "Amazon",
    avatar: "/professional-indian-man-data-scientist.jpg",
    content:
      "The Data Science program is world-class. The hands-on projects and real datasets prepared me for exactly what I face at work every day. The placement support was exceptional!",
    rating: 5,
    highlight: "150% salary increase",
  },
  {
    name: "Ananya Patel",
    role: "Mobile Developer",
    company: "Microsoft",
    avatar: "/professional-indian-woman-developer.jpg",
    content:
      "From a non-tech background to Microsoft - Binary Brains made it possible. The mentorship and career guidance were invaluable. I can't recommend them enough!",
    rating: 5,
    highlight: "Career switch success",
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer",
    company: "Infosys",
    avatar: "/professional-indian-man-engineer.jpg",
    content:
      "The Cloud & DevOps course was exactly what I needed. Real-world projects, AWS hands-on experience, and excellent faculty. Binary Brains is the best investment I made in my career.",
    rating: 5,
    highlight: "Promoted within 6 months",
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Designer",
    company: "Flipkart",
    avatar: "/professional-indian-woman-designer.jpg",
    content:
      "The UI/UX course at Binary Brains helped me transition from graphic design to product design. The portfolio projects were crucial in landing my role at Flipkart.",
    rating: 5,
    highlight: "Dream company achieved",
  },
]

const companyLogos = [
  { name: "Google", logo: "G" },
  { name: "Amazon", logo: "A" },
  { name: "Microsoft", logo: "M" },
  { name: "Infosys", logo: "I" },
  { name: "TCS", logo: "T" },
  { name: "Wipro", logo: "W" },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Success Stories</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              The careers we transform.
            </h2>
          </div>
          <Button
            variant="outline"
            className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group bg-transparent"
          >
            View All Stories
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Company Logos Ticker */}
        <div className="mb-16 py-6 border-y border-border/50">
          <p className="text-sm text-muted-foreground mb-6 text-center">Our alumni work at top companies</p>
          <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <span className="text-2xl font-bold">{company.logo}</span>
                <span className="text-lg font-semibold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Featured Testimonial */}
          <Card className="bg-card border-border/50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <Quote className="w-12 h-12 text-primary/20 mb-4" />

              <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage
                    src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                  />
                  <AvatarFallback className="bg-primary/20 text-primary text-lg">
                    {testimonials[activeIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-muted-foreground">
                    {testimonials[activeIndex].role} at{" "}
                    <span className="text-primary font-medium">{testimonials[activeIndex].company}</span>
                  </div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">{testimonials[activeIndex].highlight}</span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary/10 border-primary/50"
                    : "bg-card/50 border-border/50 hover:bg-card hover:border-border"
                }`}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground truncate">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-all ${
                        index === activeIndex ? "text-primary translate-x-1" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="rounded-full border-border hover:border-primary hover:text-primary bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="rounded-full border-border hover:border-primary hover:text-primary bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">870+</div>
            <div className="text-muted-foreground mt-1">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">4.9</div>
            <div className="text-muted-foreground mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">95%</div>
            <div className="text-muted-foreground mt-1">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">10k+</div>
            <div className="text-muted-foreground mt-1">Happy Students</div>
          </div>
        </div>
      </div>
    </section>
  )
}
