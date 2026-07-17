import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Testimonial } from "@/data/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">&ldquo;{testimonial.text}&rdquo;</p>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.projectType}</p>
        </div>
      </CardContent>
    </Card>
  )
}
