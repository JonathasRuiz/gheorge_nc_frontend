import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card className="group transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="mt-4">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{service.description}</CardDescription>
      </CardContent>
    </Card>
  )
}
