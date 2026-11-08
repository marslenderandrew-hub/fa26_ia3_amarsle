import SectionHeading from './SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section bg-navy-950/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects & Awards"
          subtitle="These projects and achievements show how I approach problems across engineering and business."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
