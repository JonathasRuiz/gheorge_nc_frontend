import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { TestimonialCard } from "@/components/shared/TestimonialCard"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "300+" },
  { label: "5-Star Reviews", value: "200+" },
]

const features = [
  "Free consultations and quotes",
  "Fully insured and certified",
  "Premium materials only",
  "Clean and tidy workmanship",
  "On-time project delivery",
  "Aftercare support",
]

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Tiling Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your space with precision craftsmanship. Over 15 years of
              experience in residential and commercial tiling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            description="From bathrooms to patios, we deliver exceptional tiling solutions for every space."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="mt-2 text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Why Choose Us?"
                description="We take pride in delivering exceptional quality and service on every project."
                centered={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <p className="text-muted-foreground">Team Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our customers have to say."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+441234567890">
                <Phone className="mr-2 h-5 w-5" /> Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
