export interface PortfolioItem {
  id: string
  title: string
  category: "bathroom" | "kitchen" | "outdoor" | "floor" | "wall"
  imageUrl: string
  description: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Modern Bathroom Renovation",
    category: "bathroom",
    imageUrl: "/images/portfolio/bathroom-1.jpg",
    description: "Large format porcelain tiles with underfloor heating",
  },
  {
    id: "2",
    title: "Herringbone Kitchen Splashback",
    category: "kitchen",
    imageUrl: "/images/portfolio/kitchen-1.jpg",
    description: "Herringbone pattern ceramic tiles in matte white",
  },
  {
    id: "3",
    title: "Terrace Patio",
    category: "outdoor",
    imageUrl: "/images/portfolio/outdoor-1.jpg",
    description: "Non-slip outdoor porcelain tiles for a modern terrace",
  },
  {
    id: "4",
    title: "Open Plan Living Area",
    category: "floor",
    imageUrl: "/images/portfolio/floor-1.jpg",
    description: "Large format floor tiles throughout an open plan space",
  },
  {
    id: "5",
    title: "Feature Wall",
    category: "wall",
    imageUrl: "/images/portfolio/wall-1.jpg",
    description: "Textured stone-effect feature wall in the living room",
  },
  {
    id: "6",
    title: "Wet Room Installation",
    category: "bathroom",
    imageUrl: "/images/portfolio/bathroom-2.jpg",
    description: "Fully tiled wet room with linear drain and glass screen",
  },
  {
    id: "7",
    title: "Marble Kitchen Floor",
    category: "kitchen",
    imageUrl: "/images/portfolio/kitchen-2.jpg",
    description: "Calacatta marble-effect porcelain floor tiles",
  },
  {
    id: "8",
    title: "Garden Pathway",
    category: "outdoor",
    imageUrl: "/images/portfolio/outdoor-2.jpg",
    description: "Natural stone-effect tiles along a garden pathway",
  },
  {
    id: "9",
    title: "Ensuite Shower",
    category: "bathroom",
    imageUrl: "/images/portfolio/bathroom-3.jpg",
    description: "Floor-to-ceiling tiling in a luxury ensuite shower",
  },
]
