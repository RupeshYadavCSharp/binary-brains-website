"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Quote } from "lucide-react"

const reviews = [
  {
    name: "Amit Deshmukh",
    rating: 5,
    date: "2 months ago",
    content:
      "Excellent institute! The faculty is very supportive and the practical approach to teaching helped me understand complex concepts easily. Got placed in a good company after completing the course.",
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    date: "1 month ago",
    content:
      "Best training institute in Nagpur for programming. The environment is friendly and the senior staff are always ready to help. Highly recommended for anyone wanting to learn coding.",
  },
  {
    name: "Rahul Meshram",
    rating: 5,
    date: "3 weeks ago",
    content:
      "I joined for Python course and the learning experience was amazing. The courses are comprehensive and focus on practical knowledge. The personalized attention from instructors made all the difference.",
  },
  {
    name: "Priya Wankhede",
    rating: 5,
    date: "1 month ago",
    content:
      "Very informative courses with focus on real-world projects. The placement support is excellent. Thank you Binary Brains for helping me start my IT career!",
  },
  {
    name: "Nikhil Borkar",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Great atmosphere for learning. Teachers are experienced and explain everything in detail. The fees are also reasonable compared to other institutes.",
  },
  {
    name: "Anjali Thakur",
    rating: 5,
    date: "3 months ago",
    content:
      "Joined for web development course. The curriculum is up-to-date with latest technologies. Lab facilities are good and doubts are cleared promptly.",
  },
]

export function GoogleReviews() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            870+ reviews on Google with an average rating of 4.9 stars
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">&quot;{review.content}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary bg-transparent">
            <a
              href="https://www.google.com/search?q=Binary+Brains+Nagpur+reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Reviews on Google
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
