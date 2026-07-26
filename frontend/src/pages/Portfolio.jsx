import { useNavigate } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { portfolioSections } from '../data/portfolio'

function PortfolioCard({ title, description, image, tag }) {
  return (
    <article className="group card-base rounded-2xl overflow-hidden bg-ivory border border-warmBeige/70 hover:shadow-card transition-shadow duration-300">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-warmBeige">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-ivory/95 text-dustyRose text-xs font-semibold px-3 py-1 rounded-full shadow-soft">
          {tag}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-serif text-lg text-charcoal font-semibold mb-2">
          {title}
        </h3>
        <p className="text-sm text-mutedText leading-relaxed">{description}</p>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const ref = useScrollAnimation()
  const navigate = useNavigate()

  return (
    <div className="pt-24 md:pt-28 pb-10 md:pb-12 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <div className="section-heading flex items-center justify-center gap-4 mb-4">
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-semibold shrink-0">
              Professional Portfolio
            </h1>
          </div>
          <p className="text-mutedText max-w-2xl mx-auto text-sm md:text-base">
            Selected case studies across social platforms, healthcare, telecom,
            webinar SaaS, e-commerce, and hospital digitization — spanning Agile
            delivery, business analysis, and quality assurance.
          </p>
        </div>

        <div ref={ref} className="animate-on-scroll space-y-16 md:space-y-20">
          {portfolioSections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-semibold mb-8 pb-3 border-b border-warmBeige">
                {section.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.items.map((item) => (
                  <PortfolioCard key={item.title} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-mutedText mb-5">
            Interested in working together on your next project?
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="btn-primary text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
