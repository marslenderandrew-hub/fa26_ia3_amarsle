// ---------------------------------------------------------------
// PROJECTS & AWARDS — edit this list to showcase your work.
//
// Each entry:
//   title        Project or award name
//   category     Short label, e.g. 'Project', 'Award', 'Internship'
//   description  2–3 sentences: the problem, what you did, the result
//   technologies Array of tools/technologies/skills used
//   github       Full repository URL, or null to hide the button
//   link         Any other URL (article, demo, certificate), or null
//   image        Path to a screenshot in public/images/, or null
//                (a styled placeholder is shown when null or missing)
//
// The site requires at least 3 entries. Add more by copying a block.
// ---------------------------------------------------------------

export const projects = [
  {
    title: 'Financial Budgeting Agent',
    category: 'Project',
    description:
      'I built an AI agent that scrubs sensitive information from transaction CSV files and then ' +
      'uses AI to categorize spending and show where the money is going. Using these insights, I ' +
      'developed budgets for myself and others.',
    technologies: ['VS Code', 'Claude', 'AI Agent', 'CSV Data Processing'],
    github: null,
    link: null,
    image: null,
  },
  {
    title: 'Online Fleet Inventory Implementation',
    category: 'Internship',
    description:
      'During my internship, I helped implement a new online fleet inventory system. I collected, ' +
      'validated, and organized asset data from locations nationwide to prepare it for the new platform.',
    technologies: ['Microsoft Excel', 'Web-Based Inventory System', 'Data Validation'],
    github: null,
    link: null,
    image: null,
  },
  {
    title: 'Stock Update & Analysis Agent',
    category: 'Project',
    description:
      'I developed an AI agent that provides updates on stocks I am interested in or invested in. ' +
      'It also analyzes insider trading activity and identifies stocks that meet my investment ' +
      'criteria, which helps me decide which companies to research further.',
    technologies: ['VS Code', 'Gemini', 'Google Workspace', 'AI Agent'],
    github: null,
    link: null,
    image: null,
  },
];
