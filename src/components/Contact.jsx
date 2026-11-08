import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

function Headshot({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-gold-500 bg-navy-700 shadow-xl shadow-gold-500/10 sm:h-48 sm:w-48">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center font-serif text-5xl font-bold text-gold-500">
          {initials}
        </div>
      ) : (
        <img src={src} alt={`Photo of ${name}`} className="h-full w-full object-cover" onError={() => setFailed(true)} />
      )}
    </div>
  );
}

export default function Contact({ profile }) {
  return (
    <section id="contact" className="section bg-navy-950/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="I am always happy to talk about strategy, technology, or graduate programs at Purdue."
        />

        <div className="card flex flex-col items-center gap-8 p-8 text-center md:flex-row md:p-10 md:text-left">
          {/* key resets the fallback state whenever the photo path changes */}
          <Headshot key={profile.photo} src={profile.photo} name={profile.name} />

          <div className="flex-1">
            <h3 className="font-serif text-2xl font-bold text-ink-100">{profile.name}</h3>
            <p className="mt-1 text-ink-300">{profile.title}</p>
            <p className="text-ink-500">{profile.organization}</p>

            <dl className="mt-6 space-y-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="break-all text-gold-400 hover:text-gold-300">
                    {profile.email}
                  </a>
                </dd>
              </div>
              {profile.phone && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">Phone</dt>
                  <dd>
                    <a
                      href={`tel:+1${profile.phone.replace(/\D/g, '')}`}
                      className="text-gold-400 hover:text-gold-300"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">LinkedIn</dt>
                <dd>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-gold-400 hover:text-gold-300"
                  >
                    {profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Email Me
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
