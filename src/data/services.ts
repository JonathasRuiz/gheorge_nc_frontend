import {
  Layers,
  Bath,
  ChefHat,
  TreePine,
  Home,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: "floor-tiling",
    title: "Floor Tiling",
    description:
      "Expert installation of ceramic, porcelain, and natural stone floor tiles for any room in your home or business.",
    icon: Layers,
  },
  {
    id: "wall-tiling",
    title: "Wall Tiling",
    description:
      "Precision wall tile installations for kitchens, bathrooms, and feature walls with flawless finishes.",
    icon: Home,
  },
  {
    id: "bathroom",
    title: "Bathroom Tiling",
    description:
      "Complete bathroom tiling solutions including showers, wet rooms, and underfloor heating preparation.",
    icon: Bath,
  },
  {
    id: "kitchen",
    title: "Kitchen Tiling",
    description:
      "Beautiful kitchen splashbacks and floor tiling that transforms your cooking space.",
    icon: ChefHat,
  },
  {
    id: "outdoor",
    title: "Outdoor Tiling",
    description:
      "Durable outdoor tile installations for patios, terraces, and garden paths built to withstand the elements.",
    icon: TreePine,
  },
  {
    id: "repairs",
    title: "Tile Repairs",
    description:
      "Professional repair and replacement of damaged or cracked tiles, restoring your surfaces to perfection.",
    icon: Wrench,
  },
]
