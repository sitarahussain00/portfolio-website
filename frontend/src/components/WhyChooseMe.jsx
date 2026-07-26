import {
  Lightbulb,
  FolderKanban,
  HeartHandshake,
  ShieldCheck,
  UserCircle,
} from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const reasons = [
  { title: 'Practical, Hands-On Approach', icon: Lightbulb },
  { title: 'Real-World Project Experience', icon: FolderKanban },
  { title: 'Clear, Approachable Guidance', icon: HeartHandshake },
  { title: 'Quality-Focused Delivery', icon: ShieldCheck },
  { title: 'Collaborative Mindset', icon: UserCircle },
]

export default function WhyChooseMe() {
  const ref = useScrollAnimation()

  return (
    <section className="py-16 md:py-24 bg-secondaryBlush/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Me?" />

        <div
          ref={ref}
          className="animate-on-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {reasons.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl border border-warmBeige/80 bg-ivory/80 shadow-soft hover:shadow-card hover:bg-primaryBlush/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primaryBlush/20 border border-warmBeige flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-dustyRose" strokeWidth={1.75} />
              </div>
              <p className="text-sm font-medium text-charcoal leading-snug">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
