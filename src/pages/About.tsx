import { motion } from "framer-motion"
import { Award, Users, Shield, Heart } from "lucide-react"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We use only premium materials and proven techniques to ensure a finish that lasts.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We listen, advise, and deliver exactly what you need.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Complete peace of mind with full public liability insurance on every project.",
  },
  {
    icon: Heart,
    title: "Passion for Detail",
    description:
      "Every tile is placed with care and precision. We treat your home like our own.",
  },
]

const team = [
  {
    name: "Gheorghe",
    role: "Founder & Lead Tiler",
    bio: "15+ years of tiling experience. Specialises in complex bathroom and kitchen installations.",
  },
  {
    name: "Andrei",
    role: "Senior Tiler",
    bio: "Expert in large format tiles and underfloor heating installations.",
  },
  {
    name: "Maria",
    role: "Project Coordinator",
    bio: "Ensures every project runs smoothly from quote to completion.",
  },
]

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A family-run tiling business delivering exceptional results since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Gheorghe NC was founded in 2009 by Gheorghe, a skilled tiler
                  with a passion for precision and an eye for design. What began
                  as a one-man operation has grown into a trusted team serving
                  homeowners and businesses across the region.
                </p>
                <p>
                  Over the years, we've completed hundreds of projects — from
                  cosy bathroom renovations to large commercial installations.
                  Our reputation is built on quality workmanship, honest
                  pricing, and a genuine commitment to customer satisfaction.
                </p>
                <p>
                  Today, we continue to uphold the same values that started it
                  all: treat every project with care, use the best materials,
                  and leave every client delighted with the result.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Company Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg mt-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Meet the Team"
            description="The skilled professionals behind every successful project."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Certifications & Accreditations</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm">Fully Insured</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm">City & Guilds Qualified</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm">Which? Trusted Trader</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
