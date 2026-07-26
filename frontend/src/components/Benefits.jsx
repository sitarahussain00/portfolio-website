import { ClipboardList, RefreshCw, Users, Target } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const benefits = [
  {
    title: 'Plan Smart',
    description: 'Structured planning for successful outcomes.',
    icon: ClipboardList,
  },
  {
    title: 'Work Agile',
    description: 'Embrace agility and adapt with confidence.',
    icon: RefreshCw,
  },
  {
    title: 'Lead Teams',
    description: 'Empower teams and drive impactful collaboration.',
    icon: Users,
  },
  {
    title: 'Deliver Results',
    description: 'Focus on value delivery and measurable results.',
    icon: Target,
  },
]

export default function Benefits() {
  const ref = useScrollAnimation()

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 pb-6">
      <div
        ref={ref}
        className="animate-on-scroll max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {benefits.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="card-base rounded-2xl p-5 md:p-6 flex flex-col items-center sm:items-start text-center sm:text-left bg-ivory"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondaryBlush/15 mb-4">
              <Icon className="h-5 w-5 text-dustyRose" strokeWidth={1.75} />
            </div>
            <h3 className="font-semibold text-charcoal text-sm mb-2">{title}</h3>
            <p className="text-xs sm:text-[0.8125rem] text-mutedText leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
