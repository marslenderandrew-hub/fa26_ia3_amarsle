import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function ProjectsPage({ projects, skills }) {
  usePageTitle('Projects & Skills');
  return (
    <>
      <Projects projects={projects} />
      <Skills skills={skills} />
    </>
  );
}
