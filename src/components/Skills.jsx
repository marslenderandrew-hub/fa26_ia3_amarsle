import SectionHeading from './SectionHeading.jsx';

const LEVELS = { Beginner: 1, Intermediate: 2, Advanced: 3 };
const WIDTH = { 1: 'w-1/3', 2: 'w-2/3', 3: 'w-full' };

function SkillBar({ name, level }) {
  const value = LEVELS[level] ?? 1;
  return (
    <li>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-medium text-ink-100">{name}</span>
        <span className="text-sm text-gold-400">{level}</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-navy-700"
        role="meter"
        aria-label={`${name} proficiency`}
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={value}
        aria-valuetext={level}
      >
        <div className={`h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 ${WIDTH[value]}`} />
      </div>
    </li>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="card p-6 sm:p-8">
      <h3 className="mb-6 text-lg font-semibold text-ink-100">{title}</h3>
      <ul className="space-y-6">
        {items.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </ul>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          subtitle="Each skill is rated Beginner, Intermediate, or Advanced."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <SkillGroup title="Technical Skills" items={skills.technical} />
          <SkillGroup title="Professional Skills" items={skills.professional} />
        </div>

        <div className="card mt-6 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink-100">Tools &amp; Technologies</h3>
          <p className="mt-1 text-sm text-ink-500">Tools I use today and technologies I am currently learning.</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {skills.tools.map((t) => (
              <li
                key={t.name}
                className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm ${
                  t.featured
                    ? 'border-gold-500/60 bg-gold-500/10 text-gold-300'
                    : 'border-navy-700 bg-navy-900 text-ink-300'
                }`}
              >
                {t.name}
                <span className="text-xs text-ink-500">· {t.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
