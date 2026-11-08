import Hero from '../components/Hero.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function HomePage({ profile }) {
  usePageTitle(null);
  return <Hero profile={profile} />;
}
