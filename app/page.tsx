import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Courses } from "@/components/courses"
import { UpcomingBatches } from "@/components/upcoming-batches"
import { WhyChooseUs } from "@/components/why-choose-us"
import { GoogleReviews } from "@/components/google-reviews"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { CTA } from "@/components/cta"
import { WhatsAppFloat } from "@/components/whatsapp-float"
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

      <Testimonials />
      <ContactSection />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
