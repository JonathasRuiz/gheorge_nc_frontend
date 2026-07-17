export interface Testimonial {
  id: string
  name: string
  projectType: string
  rating: number
  text: string
  avatarUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    projectType: "Bathroom Renovation",
    rating: 5,
    text: "Absolutely brilliant work on our main bathroom. The attention to detail was outstanding and the finish is flawless. Highly recommend!",
  },
  {
    id: "2",
    name: "Mark Thompson",
    projectType: "Kitchen Tiling",
    rating: 5,
    text: "Gheorghe and his team transformed our kitchen with a beautiful splashback. Professional, clean, and finished on time.",
  },
  {
    id: "3",
    name: "Emily Chen",
    projectType: "Floor Tiling",
    rating: 5,
    text: "We had our entire ground floor tiled and the result is stunning. Great communication throughout the project.",
  },
  {
    id: "4",
    name: "David Williams",
    projectType: "Outdoor Patio",
    rating: 5,
    text: "Excellent job on our patio. The tiles look amazing and the drainage work was done perfectly. Will use again for future projects.",
  },
  {
    id: "5",
    name: "Rachel Adams",
    projectType: "Bathroom Tiling",
    rating: 5,
    text: "Our ensuite has never looked better. The team was punctual, tidy, and the craftsmanship is top-notch.",
  },
  {
    id: "6",
    name: "James Mitchell",
    projectType: "Wall Tiling",
    rating: 4,
    text: "Great work on our feature wall. Very pleased with the result and the professional approach throughout.",
  },
]
