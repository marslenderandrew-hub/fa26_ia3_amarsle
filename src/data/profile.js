// ---------------------------------------------------------------
// Personal details, value proposition and skills.
// Edit the text here; the Express server sends it to the site
// through GET /api/profile.
// ---------------------------------------------------------------

export const profile = {
  name: 'Andrew Marslender',
  title: 'Student Ambassador for Graduate Programs',
  organization: 'Purdue University, Daniels School of Business',
  headline: 'Where engineering rigor meets business strategy.',
  intro:
    'I earned my undergraduate degree in Mechanical Engineering Technology and am now pursuing a ' +
    'master’s degree in Business and Technology at Purdue University. ' +
    'As a Student Ambassador for Graduate Programs at the Daniels School of Business, I represent ' +
    'the school to prospective students and help them find their path.',
  valueProposition:
    'I combine a technical engineering foundation with business training, which allows me to work at ' +
    'the intersection of business and technology. My goal is to apply that perspective in strategy ' +
    'consulting, corporate development, or private equity by translating complex technical problems ' +
    'into clear business decisions.',
  focusAreas: ['Strategy Consulting', 'Corporate Development', 'Private Equity'],
  email: 'marslenderandrew@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrew-marslender',
  // Replace public/images/headshot.png with your photo (square works best).
  photo: '/images/headshot.png',
};

// level: 'Beginner' | 'Intermediate' | 'Advanced'
export const skills = {
  technical: [
    { name: 'AutoCAD', level: 'Advanced' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Python', level: 'Beginner' },
  ],
  professional: [
    { name: 'Leadership', level: 'Intermediate' },
    { name: 'Public Speaking', level: 'Intermediate' },
  ],
  // Tools and technologies you use or are currently learning.
  // featured: true highlights the tool in gold.
  tools: [
    { name: 'GitLab & GitHub', status: 'Learning', featured: true },
    { name: 'AutoCAD', status: 'Using' },
    { name: 'VS Code', status: 'Learning' },
    { name: 'Google Cloud Run', status: 'Learning' },
    { name: 'React', status: 'Learning' },
    { name: 'AI-assisted development', status: 'Learning' },
  ],
};
