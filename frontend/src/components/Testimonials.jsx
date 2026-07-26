import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import useScrollAnimation from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'


function AvatarPlaceholder({ initials, name }) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-secondaryBlush/20 border border-warmBeige flex items-center justify-center shrink-0"
      aria-hidden="true"
    >
      <span className="text-xs font-semibold text-dustyRose">{initials}</span>
      <span className="sr-only">{name}</span>
    </div>
  )
}


export default function Testimonials() {
  const ref = useScrollAnimation()

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-warmBeige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What People Say" />

        <div
          ref={ref}
          className="animate-on-scroll grid sm:grid-cols-2 gap-6 md:gap-8 items-stretch"
        >
          {testimonials.map(({ quote, name, role, initials }) => (
            <div
              key={name}
              className="card-base p-6 md:p-8 rounded-2xl bg-ivory border border-warmBeige/80 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-dustyRose text-dustyRose"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-secondaryBlush/30" />
              </div>

              <p className="italic text-mutedText text-sm leading-relaxed mb-6">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto pt-2">
                <AvatarPlaceholder initials={initials} name={name} />
                <div>
                  <p className="font-semibold text-charcoal text-sm">{name}</p>
                  <p className="text-xs text-mutedText">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
