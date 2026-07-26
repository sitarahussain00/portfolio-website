export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="section-heading flex items-center justify-center gap-4 mb-4">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-semibold shrink-0">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-mutedText max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}
