import { useNavigate } from 'react-router-dom'
import {
  FolderKanban,
  Kanban,
  Bug,
  ClipboardCheck,
  Users,
  TrendingUp,
  Compass,
  Award,
  ArrowRight,
} from 'lucide-react'
import { services } from '../data/services'
import useScrollAnimation from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const iconMap = {
  'folder-kanban': FolderKanban,
  kanban: Kanban,
  bug: Bug,
  'clipboard-check': ClipboardCheck,
  users: Users,
  'trending-up': TrendingUp,
  compass: Compass,
  award: Award,
}

export default function Services() {
  const ref = useScrollAnimation()
  const navigate = useNavigate()

  return (
    <section id="expertise" className="py-20 md:py-28 bg-warmBeige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core Expertise"
          subtitle="A blend of project management, QA, and Agile skills focused on delivering high-quality digital solutions."
        />

        <div
          ref={ref}
          className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map(({ title, description, icon }) => {
            const Icon = iconMap[icon]
            return (
              <div
                key={title}
                className="group rounded-2xl border border-warmBeige bg-primaryBlush/10 p-6 text-center shadow-soft hover:shadow-card hover:bg-primaryBlush/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ivory border border-warmBeige/80 mb-4 group-hover:bg-secondaryBlush/10 transition-colors">
                  <Icon className="h-6 w-6 text-dustyRose" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  {description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-sm font-medium text-dustyRose hover:text-secondaryBlush transition-colors"
          >
            View Services
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
