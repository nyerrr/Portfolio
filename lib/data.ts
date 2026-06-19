export const personalInfo = {
  name: 'Rainier Burlasa',
  role: 'Full-Stack Developer',
  tagline: 'I build real products — from thesis to production.',
  description:
    'CS student graduating with 4 years of hands-on experience building full-stack web apps and AI-powered systems. Open to full-time and freelance opportunities.',
  email: 'rainierburlasa472@gmail.com',
  github: 'https://github.com/nyerrr',
  linkedin: 'https://www.linkedin.com/in/burlasa-rainier-j-862597377/',
  resumeUrl: '/CV BURLASA, RAINIER.pdf',
  available: true,
}

export const stats = [
  { number: '4+', label: 'years coding' },
  { number: '5+', label: 'projects built' },
  { number: '200', label: 'hours internship' },
]

export const projects = [
  {
    number: '01',
    title: 'GAIDA',
    description:
      'AI-powered mental health support PWA for university students. Detects anxiety through voice and text using a 3-model ML ensemble (Random Forest, Neural Network, Logistic Regression) with fuzzy crisis detection. Features real-time counselor monitoring, live intervention, and Philippine language support via fine-tuned GPT-3.5 and Whisper.',
    tags: ['Python', 'Machine Learning', 'PWA', 'Real-time'],
    url: 'https://github.com/nyerrr/gaida-system',
  },
  {
    number: '02',
    title: 'PresyOn',
    description:
      'Inflation trend monitoring PWA that scrapes live data from PSA, DA CALABARZON, and fuel price sources. Features 6-month trend analysis, a price calculator, AI recommendations, and an OpenAI-powered agent.',
    tags: ['Web Scraping', 'OpenAI', 'PWA', 'Data Viz'],
    url: 'https://presyo-ph-sigma.vercel.app/',
  },
  {
    number: '03',
    title: 'Companero Realty',
    description:
      'Real estate platform rebuilt from scratch with a modern UI/UX, property modals, and a full admin panel. Admins can manage listings with full CRUD, image uploads, and monitor active users.',
    tags: ['Next.js', 'TypeScript', 'Admin Panel', 'CRUD'],
    url: 'https://github.com/nyerrr/verge-website',
  },
  {
    number: '04',
    title: 'PrismoLens',
    description:
      'Photobooth service website for a small business with an admin panel for managing reviews and inquiries from customers.',
    tags: ['Next.js', 'TypeScript', 'Admin Panel'],
    url: 'https://prismolens.vercel.app/',
  },
  {
    numer: '05',
    title: 'TindahanLink',
    description:
      'TindahanLink is a free, installable web app that helps Filipino micro-store owners manage their inventory, track sales, record utang, and get smart restock suggestions - all from their phone.',
    tags: ['React + Vite', 'Tailwind CSS', 'Supabase', 'Recharts', 'Framer Motion', 'OpenWeatherMap API', 'PWA (vite-plugin-pwa)' ],
    url: 'https://tindahan-link.vercel.app/',
  },
  {
    number: '06',
    title: 'Dance-coach',
    description:
      'Dance coach is an AI-powered web app that helps users learn and practice dance routines with real-time pose feedback.',
    tags: ['React + Vite', 'MediaPipe Tasks Vision', 'Supabase JS client', 'Vite-plugin-PWA', 'Tailwind CSS V4', 'FastAPI', 'OpenCV', 'Vercel', 'Render'],
    url: 'https://dance-coach-six.vercel.app/',
  }
]

export const skills = [
  { name: 'React / Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Node.js', category: 'runtime' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Supabase', category: 'database' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'Tailwind CSS', category: 'styling' },
  { name: 'Docker', category: 'devops' },
  { name: 'Web Scraping', category: 'data' },
  { name: 'PWA', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'Vite', category: 'build tools' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'OpenCV', category: 'AI/ML' },
  { name: 'MediaPipe Tasks Vision', category: 'AI/ML' },
  { name: 'Vercel', category: 'deployment' },
  { name: 'Render', category: 'deployment' },
]