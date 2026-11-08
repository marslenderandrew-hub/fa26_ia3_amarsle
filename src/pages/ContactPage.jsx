import Contact from '../components/Contact.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function ContactPage({ profile }) {
  usePageTitle('Contact');
  return <Contact profile={profile} />;
}
