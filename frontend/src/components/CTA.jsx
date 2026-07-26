import { useNavigate } from 'react-router-dom'
import { Rocket, Mail } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function CTA() {
  const ref = useScrollAnimation()
  const navigate = useNavigate()

  return (
    <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="animate-on-scroll max-w-5xl mx-auto cta-gradient rounded-3xl px-8 py-14 md:py-16 text-center shadow-card"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ivory/20 mb-6">
          <Rocket className="h-7 w-7 text-ivory" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-ivory font-semibold mb-8 max-w-lg mx-auto">
          Let&rsquo;s build successful projects together.
        </h2>
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
  )
}
