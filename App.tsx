import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingView from './views/LandingView';
import AboutPage from './views/AboutPage';
import WorkPage, { ProjectDetailPage } from './views/WorkPage'; 
import BlogPage from './views/BlogPage';
import BlogDetailPage from './views/BlogDetailPage';
import GuestbookPage from './views/GuestbookPage';
import LinksPage from './views/LinksPage';
import UsesPage from './views/UsesPage';
import AttributesPage from './views/AttributesPage';
import ContactPage from './views/ContactPage';
import EducationIITMPage from './views/EducationIITMPage';
import EducationNewCollegePage from './views/EducationNewCollegePage';
import { motion, AnimatePresence } from 'framer-motion';

export type ViewState = 'home' | 'about' | 'work' | 'work-detail' | 'blog' | 'blog-detail' | 'guestbook' | 'links' | 'uses' | 'attributes' | 'contact' | 'edu-iitm' | 'edu-newcollege';

// Helper to reset scroll and handle manual restoration for SEO/Refresh fixes
const ScrollReset: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();


  // schema 
const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mohamedfazilrm.dev/#person",
      "name": "Mohamed Fazil RM",
      "alternateName": "Fazil RM",
      "url": "https://mohamedfazilrm.dev",
      "image": "https://mohamedfazilrm.dev/profile-photo.jpg",
      "description": "Mohamed Fazil RM is a Developer and Data Analyst based in Chennai. He specializes in Software Development and Automation development.",
      "jobTitle": ["Automation Developer", "Founder", "Full Stack Developer", "Data Analyst" , 'Software Developer'],
      "gender": "Male",
      "nationality": "Indian",
      "email": "mohamedfazilrm@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "The New College, Chennai",
          "description": "B.Sc. in Mathematics (2023-2026)"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Indian Institute of Technology Madras",
          "description": "BS in Data Science and Applications (2024-2028)"
        }
      ],
      "knowsAbout": [
        "Workflow Automation",
        "Artificial Intelligence",
        "Python",
        "Data Structures and Algorithms",
        "Mathematics",
        "Statistics",
        "Data Analysis",
        "Full Stack Development"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "FOS Automations",
        "url": "https://fosautomations.com/"
      },
      "sameAs": [ 
        "https://www.linkedin.com/in/fazil-rm/", // linkedin
        "https://www.crunchbase.com/person/fazil-rm", //crunch base
        "https://www.youtube.com/@Fazil_RM", // youtube
        "https://www.instagram.com/__fazil_rm__",  // insta
        "https://www.facebook.com/theFazilRM", //facebook
        "https://leetcode.com/u/Fazil-RM/",// leetcode
        "https://github.com/Fazil-RM", //github
        "https://www.trustpilot.com/review/mohamedfazilrm.dev", // trustpilot
        "https://medium.com/@Fazil-RM", //Medium 
        "https://www.kaggle.com/mohamedfazilrm", // kaggle
        "https://fosautomations.com/team/fazil-rm" // fos automations
      ],
     "subjectOf": [
  {
    "@type": "WebApplication",
    "name": "LearnEzily EdTech Platform",
    "url": "https://learnezily.app/",
    "applicationCategory": "EducationApplication",
    "operatingSystem": "Web",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "12" },
      
      "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/PreOrder" 
    }
  },
  {
    "@type": "SoftwareApplication",
    "name": "SpendWise AI Expense Tracker",
    "url": "https://mohamedfazilrm.dev/work/spendwise",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "3"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/PreOrder"
    }
  }
]
    },
    {
      "@type": "WebSite",
      "@id": "https://mohamedfazilrm.dev/#website",
      "url": "https://mohamedfazilrm.dev/",
      "name": "Fazil RM Portfolio",
      "publisher": { "@id": "https://mohamedfazilrm.dev/#person" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://mohamedfazilrm.dev/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "AboutPage",
      "@id": "https://mohamedfazilrm.dev/about/#webpage",
      "url": "https://mohamedfazilrm.dev/about/",
      "name": "About Fazil RM",
      "isPartOf": { "@id": "https://mohamedfazilrm.dev/#website" },
      "mainEntity": { "@id": "https://mohamedfazilrm.dev/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mohamedfazilrm.dev/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mohamedfazilrm.dev"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": location.pathname === "/" ? "Home" : location.pathname.substring(1).toUpperCase(),
          "item": `https://mohamedfazilrm.dev${location.pathname}`
        }
      ]
    }
  ]
};



  const getViewState = (path: string): ViewState => {
    if (path === '/') return 'home';
    if (path.startsWith('/blog/')) return 'blog-detail';
    if (path.startsWith('/work/')) return 'work-detail'; // Added work-detail mapping
    return path.substring(1) as ViewState;
  };

  const currentView = getViewState(location.pathname);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark); 
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // navigateTo now pushes to real browser history
  const navigateTo = (view: ViewState, postId?: string) => {
    if (view === 'home') navigate('/');
    else if (view === 'blog-detail' && postId) navigate(`/blog/${postId}`);
    else if (view === 'work-detail' && postId) navigate(`/work/${postId}`); 
    else navigate(`/${view}`);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent-violet selection:text-white bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 flex flex-col">
      <Helmet>
        <title>Fazil RM | Automation Developer</title>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      
      <ScrollReset />
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        currentView={currentView}
        onNavigate={navigateTo}
      />
      
      <main className="relative pt-2 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<LandingView onNavigate={navigateTo} isDark={isDark} />} />
              <Route path="/about" element={<AboutPage onNavigate={navigateTo} />} />
              <Route path="/work" element={<WorkPage onNavigate={navigateTo} />} />
              {/* Route for separate project pages */}
              <Route path="/work/:projectId" element={<ProjectDetailPage />} />
              
              <Route path="/blog" element={<BlogPage onNavigate={navigateTo} />} />
              <Route path="/blog/:postId" element={<BlogDetailWrapper onNavigate={navigateTo} />} />
              <Route path="/guestbook" element={<GuestbookPage />} />
              <Route path="/links" element={<LinksPage onNavigate={navigateTo} />} />
              <Route path="/uses" element={<UsesPage />} />
              <Route path="/attributes" element={<AttributesPage />} />
              <Route path="/contact" element={<ContactPage isDark={isDark} />} />
              <Route path="/edu-iitm" element={<EducationIITMPage onNavigate={navigateTo} />} />
              <Route path="/edu-newcollege" element={<EducationNewCollegePage onNavigate={navigateTo} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

// Wrapper to extract postId from URL params for the BlogDetailPage
const BlogDetailWrapper: React.FC<{ onNavigate: any }> = ({ onNavigate }) => {
  const { postId } = useParams<{ postId: string }>();
  return <BlogDetailPage onNavigate={onNavigate} postId={postId || null} />;
};

const App: React.FC = () => {
  return (
    <HelmetProvider> 
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;