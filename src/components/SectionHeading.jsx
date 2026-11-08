export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-ink-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-ink-300">{subtitle}</p>}
    </div>
  );
}
