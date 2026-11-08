import { Link } from 'react-router-dom';

export default function Hero({ profile }) {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      {/* Decorative background: gold glow and a subtle grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-navy-700/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
          {profile.title} · {profile.organization}
        </p>

        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-ink-100 sm:text-5xl lg:text-6xl">
          Hi, I&rsquo;m {profile.name}.
          <span className="mt-2 block text-gold-500">{profile.headline}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{profile.intro}</p>

        <div className="mt-8 max-w-2xl border-l-2 border-gold-500 pl-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">What I Do</h2>
          <p className="mt-2 leading-relaxed text-ink-100">{profile.valueProposition}</p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Career focus areas">
          {profile.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-navy-700 bg-navy-800/70 px-4 py-1.5 text-sm text-ink-300"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
