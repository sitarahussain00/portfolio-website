import { useNavigate } from 'react-router-dom'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import coachPhoto from '../assets/images/pic-removebg-preview.png'

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
]

function FloralAccent({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 15 C45 35 35 55 60 75 C85 55 75 35 60 15Z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <path
        d="M60 75 C40 85 25 100 60 105 C95 100 80 85 60 75Z"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
      />
      <circle cx="60" cy="45" r="3" fill="currentColor" opacity="0.2" />
      <path
        d="M30 60 Q45 50 60 60 Q75 70 90 60"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
    </svg>
  )
}

function FloatingCard({ title, children, className = '', delay = 0 }) {
  return (
    <div
      className={`glass-card rounded-2xl p-3 shadow-card absolute float-card ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-[10px] font-semibold text-charcoal/80 mb-2 tracking-wide">
        {title}
      </p>
      {children}
    </div>
  )
}

function CoachIllustration() {
  return (
    <div className="relative w-full max-w-[26rem] mx-auto">
      {/* Soft glow behind figure */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-br from-primaryBlush/50 via-warmBeige to-secondaryBlush/30 blur-sm" />

      {/* Main figure */}
      <div className="relative z-10 flex justify-center pt-6 pb-20 isolate">
        <img
          src={coachPhoto}
          alt="Sitara Hussain — Professional PMP and Agile coach"
          aria-label="Professional coach illustration"
          className="coach-photo w-56 sm:w-64 md:w-72 h-auto drop-shadow-xl"
          loading="eager"
          decoding="sync"
          draggable={false}
        />
      </div>

      {/* Sprint Board */}
      <FloatingCard title="Sprint Board" className="top-0 -left-2 sm:left-0 w-[9.5rem] sm:w-40" delay={0}>
        <div className="flex gap-1.5">
          {['To Do', 'Doing', 'Done'].map((col, ci) => (
            <div key={col} className="flex-1 min-w-0">
              <p className="text-[7px] text-mutedText/70 mb-1 truncate">{col}</p>
              <div className="space-y-1">
                {[0, 1].map((row) => (
                  <div
                    key={row}
                    className={`h-5 rounded-md flex items-center px-1 gap-0.5 ${
                      ci === 2
                        ? 'bg-secondaryBlush/25'
                        : ci === 1
                          ? 'bg-secondaryBlush/15'
                          : 'bg-warmBeige'
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-dustyRose/40 shrink-0" />
                    <div className="h-1 flex-1 rounded bg-mutedText/15" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FloatingCard>

      {/* Progress Overview */}
      <FloatingCard title="Progress Overview" className="top-6 -right-2 sm:right-0 w-36" delay={150}>
        <div className="flex items-center gap-2.5">
          <div className="relative w-11 h-11 shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#EFE4DE" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#B58482"
                strokeWidth="3"
                strokeDasharray="66 88"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-dustyRose">
              75%
            </span>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 rounded-full bg-dustyRose/70 w-full" />
            <div className="h-2 rounded-full bg-secondaryBlush/50 w-4/5" />
            <div className="h-2 rounded-full bg-warmBeige w-3/5" />
          </div>
        </div>
      </FloatingCard>

      {/* Roadmap */}
      <FloatingCard title="Roadmap" className="bottom-28 -left-1 sm:left-2 w-32" delay={300}>
        <div className="relative pl-3 space-y-2">
          <div className="absolute left-[5px] top-1 bottom-1 w-px bg-secondaryBlush/40" />
          {['Discover', 'Plan', 'Execute', 'Deliver'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 relative">
              <div
                className={`w-2.5 h-2.5 rounded-full shrink-0 z-10 ${
                  i < 3 ? 'bg-dustyRose' : 'bg-warmBeige border border-secondaryBlush/50'
                }`}
              />
              <span className="text-[8px] text-mutedText font-medium">{step}</span>
            </div>
          ))}
        </div>
      </FloatingCard>

      {/* Project Checklist */}
      <FloatingCard title="Project Checklist" className="bottom-14 -right-1 sm:right-0 w-40" delay={450}>
        <div className="space-y-1.5">
          {['Scope Defined', 'Team Aligned', 'Risks Mapped'].map((item, i) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2
                className={`h-3.5 w-3.5 shrink-0 ${
                  i < 2 ? 'text-dustyRose' : 'text-secondaryBlush/50'
                }`}
              />
              <span className="text-[8px] text-mutedText">{item}</span>
            </div>
          ))}
        </div>
      </FloatingCard>

      {/* Certification badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 glass-card rounded-full px-4 py-2.5 shadow-card flex items-center gap-2.5 z-20 whitespace-nowrap">
        <div className="w-7 h-7 rounded-full bg-dustyRose/15 flex items-center justify-center">
          <CheckCircle2 className="h-4 w-4 text-dustyRose" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium text-charcoal">
          PMP® Certified Trainer & Agile Expert
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-blush-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-primaryBlush/25 via-ivory to-warmBeige/60" />
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] opacity-[0.18] text-secondaryBlush pointer-events-none">
        <FloralAccent className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-0 w-48 h-48 opacity-[0.12] text-dustyRose pointer-events-none rotate-45">
        <FloralAccent className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-secondaryBlush/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primaryBlush/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h1 className="font-serif text-[2rem] sm:text-5xl lg:text-[3.35rem] leading-[1.15] text-charcoal mb-6">
              Expert Project Direction,{' '}
              <span className="italic text-dustyRose">Agile Coaching</span>
              {' '}&amp; Career Counselling!
            </h1>

            <p className="text-mutedText text-base md:text-lg leading-relaxed mb-9 max-w-xl">
            Experienced IT Project Manager, Career Coach and QA Professional with expertise in software testing, project coordination, Agile/Scrum methodologies, and stakeholder management. Skilled in manual testing, user acceptance testing (UAT), defect tracking, process improvement, and delivering high-quality digital solutions. Proven experience working with web applications, SaaS platforms, e-commerce projects, and cross-functional teams to ensure successful project delivery. Passionate about helping organizations improve product quality, optimize workflows, and enhance user experiences.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-11">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2.5 btn-primary text-white px-7 py-3.5 rounded-full text-sm md:text-base font-medium transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </button>
              <button
                type="button"
                onClick={() => navigate('/portfolio')}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-secondaryBlush/50 text-charcoal bg-ivory/80 px-7 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-warmBeige hover:border-dustyRose/40 transition-all duration-300 shadow-soft"
              >
                <ArrowRight className="h-4 w-4 text-dustyRose" />
                View Portfolio
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-ivory object-cover shadow-soft"
                  />
                ))}
              </div>
              <p className="text-sm text-mutedText leading-relaxed">
                Trusted by{' '}
                <strong className="text-charcoal font-semibold">50+</strong>{' '}
                professionals to grow their PM & Agile careers.
              </p>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative order-1 lg:order-2 lg:pl-4">
            <CoachIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
