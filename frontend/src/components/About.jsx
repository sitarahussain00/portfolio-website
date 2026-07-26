import { Award, Users, BadgeCheck, TrendingUp } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const stats = [
  { label: '6+ Years of Experience', icon: Award },
  { label: '5+ Professionals Trained', icon: Users },
  { label: 'PMP & Agile Expert', icon: BadgeCheck },
  { label: 'Career-Focused Mentorship', icon: TrendingUp },
]

function FloralBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full text-secondaryBlush/20 pointer-events-none"
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M80 60 C60 100 70 150 110 170 C150 190 200 160 190 120 C180 80 120 20 80 60Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M300 80 C330 120 310 170 270 180 C230 190 200 150 220 110 C240 70 270 40 300 80Z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <path
        d="M50 350 C30 390 60 430 100 420 C140 410 160 360 130 330 C100 300 70 310 50 350Z"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <path
        d="M320 380 C350 400 360 440 330 460 C300 480 260 450 270 410 C280 370 290 360 320 380Z"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
      />
      <circle cx="200" cy="250" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  )
}

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="animate-on-scroll grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left — image card with floral background */}
          <div className="relative max-w-md mx-auto lg:mx-0 w-full">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primaryBlush/30 via-warmBeige to-secondaryBlush/20 -z-10" />
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-dustyRose/10 blur-2xl -z-10 hidden lg:block" />

            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/5] border border-warmBeige/60">
              <FloralBg />
              <div className="absolute inset-0 bg-gradient-to-br from-warmBeige/40 via-transparent to-primaryBlush/20" />

              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=750&fit=crop"
                alt="Elegant workspace with books and planning materials"
                className="relative w-full h-full object-cover mix-blend-normal"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-script text-2xl md:text-[2rem] text-ivory leading-snug drop-shadow-sm">
                  Empowering Leaders.
                  <br />
                  Delivering Excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Right — bio & stats */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-semibold mb-6">
              About Sitara Hussain
            </h2>

            <p className="text-mutedText text-base leading-relaxed mb-10">
            Welcome to my professional portfolio.
I am a PMP® and Certified Scrum Master (CSM®) with over 6 years of experience leading software development, digital transformation, healthcare, AI, telecom, retail, and e-commerce projects. My expertise spans Agile Project Management, Business Analysis, Product Development, and Stakeholder Engagement, enabling organizations to transform ideas into scalable, user-centric solutions.
Throughout my career, I have successfully managed cross-functional teams, facilitated stakeholder collaboration, gathered and translated complex business requirements, and delivered high-quality web, mobile, and AI-powered products. My approach combines strategic thinking, Agile leadership, and strong business acumen to ensure projects are delivered on time, within scope, and aligned with organizational objectives.
I am passionate about helping organizations solve business challenges through technology, process optimization, and innovation while creating exceptional experiences for both stakeholders and end users.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-warmBeige/50 border border-warmBeige hover:bg-warmBeige/70 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondaryBlush/15 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-dustyRose" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-medium text-charcoal leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
