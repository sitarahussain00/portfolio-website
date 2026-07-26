import { useNavigate } from 'react-router-dom'
import {
  FolderKanban,
  ClipboardList,
  Compass,
  Users,
  Workflow,
  ShieldCheck,
  Bot,
  Mail,
  Sparkles,
} from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  {
    title: 'Agile Project Management',
    description:
      'Leading end-to-end project delivery using Agile, Scrum, and hybrid methodologies. Managing scope, schedule, risks, budgets, resources, and stakeholder expectations to ensure successful project outcomes.',
    icon: FolderKanban,
  },
  {
    title: 'Business Analysis & Requirements Engineering',
    description:
      'Facilitating stakeholder workshops, gathering business and technical requirements, creating BRDs, SRS documents, process maps, user stories, acceptance criteria, and functional specifications.',
    icon: ClipboardList,
  },
  {
    title: 'Product Management',
    description:
      'Defining product vision, roadmaps, MVP strategies, feature prioritization, and customer-centric solutions that align business goals with user needs.',
    icon: Compass,
  },
  {
    title: 'Agile Coaching & Scrum Facilitation',
    description:
      'Facilitating Sprint Planning, Daily Stand-Ups, Sprint Reviews, Retrospectives, Backlog Refinement, and Agile best practices to improve team productivity and collaboration.',
    icon: Users,
  },
  {
    title: 'Digital Transformation & Process Improvement',
    description:
      'Analyzing current-state processes, identifying gaps, and designing future-state solutions that improve efficiency, reduce costs, and enhance customer experiences.',
    icon: Workflow,
  },
  {
    title: 'Quality Assurance & User Acceptance Testing',
    description:
      'Creating test strategies, UAT plans, defect management processes, and ensuring product quality through rigorous validation and stakeholder sign-offs.',
    icon: ShieldCheck,
  },
  
]

export default function Services() {
  const ref = useScrollAnimation()
  const navigate = useNavigate()

  return (
    <div className="bg-ivory">
      {/* Hero / banner */}
      <section className="relative overflow-hidden cta-gradient pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="absolute top-10 -left-10 w-56 h-56 rounded-full bg-ivory/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-dustyRose/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ivory bg-ivory/15 border border-ivory/30 rounded-full px-4 py-1.5 mb-6 shadow-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Professional Capabilities
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-semibold mb-5 leading-tight">
            My Services
          </h1>
          <p className="text-ivory/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Professional support across project management, Agile delivery,
            business analysis, product strategy, QA, process improvement, and
            AI-powered automation solutions.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch"
          >
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group h-full flex flex-col rounded-2xl border border-warmBeige bg-primaryBlush/10 p-6 md:p-7 shadow-soft hover:shadow-card hover:bg-primaryBlush/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ivory border border-warmBeige/80 mb-5 group-hover:bg-secondaryBlush/10 transition-colors">
                  <Icon className="h-6 w-6 text-dustyRose" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg text-charcoal font-semibold mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-mutedText leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto cta-gradient rounded-3xl px-8 py-14 md:py-16 text-center shadow-card">
          <h2 className="font-serif text-2xl md:text-3xl text-ivory font-semibold mb-4 max-w-xl mx-auto">
            Need support with your next project?
          </h2>
          <p className="text-ivory/85 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Let&rsquo;s connect to discuss how project leadership, QA, Agile, and
            automation support can help your team move forward.
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-ivory text-secondaryBlush px-8 py-3.5 rounded-full text-base font-medium shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
