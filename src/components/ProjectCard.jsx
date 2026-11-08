import { useState } from 'react';

function ProjectImage({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    // Styled placeholder so there is never a broken image.
    return (
      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
        <span className="font-serif text-4xl font-bold text-gold-500/70">
          {title
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Screenshot of ${title}`}
      loading="lazy"
      className="aspect-video w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProjectCard({ project }) {
  const { title, category, description, technologies, github, link, image } = project;

  return (
    <article className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-gold-500/50">
      <ProjectImage src={image} title={title} />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">{category}</p>
        <h3 className="mt-2 text-xl font-semibold text-ink-100">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink-300">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((t) => (
            <li key={t} className="rounded-md bg-navy-700 px-2.5 py-1 text-xs font-medium text-ink-100">
              {t}
            </li>
          ))}
        </ul>

        {(github || link) && (
          <div className="mt-6 flex gap-4 border-t border-navy-700 pt-4 text-sm font-semibold">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300">
                GitHub Repo &rarr;
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300">
                Learn More &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
