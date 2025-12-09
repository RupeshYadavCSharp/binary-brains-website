import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Courses } from "@/components/courses"
import { UpcomingBatches } from "@/components/upcoming-batches"
import { WhyChooseUs } from "@/components/why-choose-us"
import { GoogleReviews } from "@/components/google-reviews"
import { ContactSection } from "@/components/contact-section"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Courses />
      <UpcomingBatches />
      <WhyChooseUs />
      <GoogleReviews />
      <ContactSection />
      <CTA />
      <Footer />
    </main>
  )
}
