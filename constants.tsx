
import { Project, TimelineItem, BlogPost, GuestbookEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus AI Platform',
    description: 'A cutting-edge SaaS for managing multiple LLM providers with a unified interface.',
    tags: ['React', 'Next.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    title: 'CryptoTracker',
    description: 'Real-time crypto assets dashboard with advanced charting and news integration.',
    tags: ['TypeScript', 'D3.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'FlowCMS',
    description: 'A headless CMS focused on developer experience and speed.',
    tags: ['Node.js', 'GraphQL', 'React'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1626&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '4',
    title: 'Orbit Design System',
    description: 'A lightweight and accessible UI library for building fast interfaces.',
    tags: ['React', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1628&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gridSpan: 'md:col-span-2'
  }
];

export const CURATED_WORKS = [
  {
    image: 'https://ik.imagekit.io/fazil/Logo-png.png',
    title: 'LearnEzily',
    description: 'Study, practice, and boost your productivity online.',
    link: '#'
  },
  {
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-29%20183740.png',
    title: 'Portfolio',
    description: 'Bridging code and data to build impactful solutions.',
    link: '#'
  },
  {
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-29%20200534.png',
    title: 'Shazil Tech',
    description: 'Expert development and powerful automation solutions.',
    link: '#'
  },
  {
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-29%20202117.png',
    title: 'Alchemeal',
    description: 'Create the perfect meal from what you have.',
    link: '#'
  },
  {
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-06%20201237.png',
    title: 'Hexa play',
    description: 'The ultimate club for competitive local gaming.',
    link: '#'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: '1',
    type: 'experience',
    title: 'Senior Frontend Engineer',
    subtitle: 'TechNova Solutions',
    date: '2022 - Present',
    description: 'Leading the development of consumer-facing web applications, optimizing performance by 40%, and mentoring junior developers.'
  },
  {
    id: '2',
    type: 'experience',
    title: 'Software Developer',
    subtitle: 'Creative Code Agency',
    date: '2020 - 2022',
    description: 'Built high-fidelity marketing websites and integrated custom CMS solutions for Fortune 500 clients.'
  },
  {
    id: '3',
    type: 'education',
    title: 'M.Sc. in Computer Science',
    subtitle: 'University of Technology',
    date: '2018 - 2020',
    description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors.'
  },
  {
    id: '4',
    type: 'education',
    title: 'B.Sc. in Computer Science',
    subtitle: 'State University',
    date: '2014 - 2018',
    description: 'Core foundation in algorithms, data structures, and computer architecture.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Framer Motion',
    excerpt: 'Deep dive into complex animations and orchestrating gestures in React.',
    category: 'Design',
    content: `
      <p>Animations are not just eye candy; they are a bridge between the user and the digital interface. In the world of React, <strong>Framer Motion</strong> has emerged as the gold standard for creating fluid, meaningful motion.</p>
      
      <h3>Why Motion Matters</h3>
      <p>Motion provides context. It tells the user where an element came from and where it's going. It can guide attention, provide feedback, and create a sense of physical weight in a flat digital world.</p>
      
      <h3>Gestures and Interaction</h3>
      <p>Beyond simple enter/exit transitions, Framer Motion excels at handling complex gestures like dragging, hovering, and tapping. By leveraging the <code>whileHover</code> and <code>whileTap</code> props, you can create interfaces that feel responsive and tactile.</p>
      
      <blockquote>"The best animations are the ones you don't explicitly notice, but you would certainly miss if they were gone."</blockquote>
      
      <h3>The Layout Engine</h3>
      <p>One of the most powerful features of Framer Motion is its automatic layout animations. Using the <code>layout</code> prop, you can animate elements between different positions in the DOM tree without writing complex CSS transitions manually.</p>
    `,
    date: 'Oct 12, 2023',
    readingTime: '8 MIN READ',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'The Future of Web Dev',
    excerpt: 'Exploring RSC, edge computing, and the next wave of web architectural patterns.',
    category: 'Engineering',
    content: `
      <p>The web is evolving faster than ever. From the rise of <strong>React Server Components</strong> to the proliferation of edge computing, the way we build and deploy applications is undergoing a paradigm shift.</p>
      
      <h3>Edge Computing: Closer to the User</h3>
      <p>Traditional cloud architectures rely on centralized data centers. Edge computing moves logic to the "edge" of the network, significantly reducing latency and improving the experience for users regardless of their physical location.</p>
      
      <h3>The Rise of AI-Integrated Workflows</h3>
      <p>We are entering an era where AI is not just a feature, but a fundamental part of the developer workflow. Tools like Copilot and automated code generation are becoming standard, allowing developers to focus more on high-level architecture and design patterns.</p>
    `,
    date: 'Sep 28, 2023',
    readingTime: '10 MIN READ',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'UI Design for Engineers',
    excerpt: 'How to build beautiful interfaces even if you are not a designer.',
    category: 'Design',
    content: `
      <p>Engineering and design are two sides of the same coin. For developers, understanding basic design principles can be a superpower that elevates their projects from functional to exceptional.</p>
      
      <h3>Visual Hierarchy</h3>
      <p>Hierarchy is about guiding the user's eye. Use scale, color contrast, and spacing to highlight the most important actions on a page. If everything is loud, nothing is heard.</p>
      
      <h3>Consistency is Key</h3>
      <p>A great UI feels cohesive. Establishing a solid foundation of spacing scales, color palettes, and typography early on prevents the interface from feeling fragmented as it grows.</p>
    `,
    date: 'Aug 15, 2023',
    readingTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1628&auto=format&fit=crop'
  }
];
