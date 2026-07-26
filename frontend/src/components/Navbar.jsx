import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Mail, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Expertise', to: '/#expertise' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (to) => {
    setOpen(false)
    if (to.includes('#')) {
      const [path, hash] = to.split('#')
      const targetPath = path || '/'
      if (location.pathname !== targetPath) {
        navigate(to)
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1)
    return location.pathname === to
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/80 backdrop-blur-xl border-b border-warmBeige/80 shadow-soft'
          : 'bg-ivory/60 backdrop-blur-lg border-b border-warmBeige/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-script text-[1.65rem] md:text-[2rem] text-secondaryBlush hover:text-dustyRose transition-colors leading-none shrink-0 z-10"
          >
            Sitara Hussain
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden xl:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => handleNav(link.to)}
                className={`text-[0.8125rem] font-medium tracking-wide transition-colors relative py-1 ${
                  isActive(link.to)
                    ? 'text-dustyRose'
                    : 'text-mutedText hover:text-secondaryBlush'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-dustyRose" />
                )}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 z-10">
            <button
              type="button"
              onClick={() => handleNav('/contact')}
              className="hidden lg:inline-flex items-center gap-2 btn-primary text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </button>

            <button
              type="button"
              className="xl:hidden p-2 text-mutedText hover:text-dustyRose transition-colors rounded-lg"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {open && (
        <div className="xl:hidden bg-ivory/95 backdrop-blur-xl border-t border-warmBeige px-4 py-5 shadow-soft">
          <nav className="flex flex-col gap-1 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => handleNav(link.to)}
                className={`py-3 px-3 rounded-xl font-medium text-left transition-colors ${
                  isActive(link.to)
                    ? 'text-dustyRose bg-warmBeige/60'
                    : 'text-mutedText hover:text-secondaryBlush hover:bg-warmBeige/40'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav('/contact')}
              className="mt-3 inline-flex items-center justify-center gap-2 btn-primary text-white px-5 py-3 rounded-full text-sm font-medium w-full"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
