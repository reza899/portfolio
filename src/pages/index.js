import Head from "next/head";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Reza Bozorgi - Full-stack AI Engineer | Portfolio</title>
        <meta name="description" content="Senior Full-stack AI Engineer with 10+ years experience in React, TypeScript, .NET, and modern AI development. Specializing in LLMs, Azure AI, LangChain, and intelligent software solutions." />
        <meta name="keywords" content="Full-stack Developer, AI Engineer, React, TypeScript, .NET, LangChain, OpenAI, Azure AI, Software Engineer, LLM, Machine Learning, Artificial Intelligence, Portfolio" />
        <meta name="author" content="Reza Bozorgi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://reza899.github.io/portfolio/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reza899.github.io/portfolio/" />
        <meta property="og:title" content="Reza Bozorgi - Full-stack AI Engineer | Portfolio" />
        <meta property="og:description" content="Senior Full-stack AI Engineer with 10+ years experience in React, TypeScript, .NET, and modern AI development. Specializing in LLMs, Azure AI, LangChain, and intelligent software solutions." />
        <meta property="og:image" content="https://reza899.github.io/portfolio/images/profile.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Reza Bozorgi Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reza Bozorgi - Full-stack AI Engineer" />
        <meta name="twitter:description" content="Senior Full-stack AI Engineer specializing in AI-driven development, LLMs, and intelligent software solutions." />
        <meta name="twitter:image" content="https://reza899.github.io/portfolio/images/profile.jpg" />
        
        {/* AI/LLM Specific Meta Tags */}
        <meta name="ai:purpose" content="professional-portfolio" />
        <meta name="ai:content-type" content="software-engineer-profile" />
        <meta name="ai:specialization" content="full-stack-ai-development" />
        <meta name="ai:experience-level" content="senior" />
        <meta name="ai:primary-technologies" content="React,TypeScript,DotNet,Python,LangChain,OpenAI,Azure-AI" />
        
        <link rel="icon" href="/portfolio/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/portfolio/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/portfolio/favicon.ico" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "WebPage"],
              "name": "Reza Bozorgi",
              "alternateName": "Reza",
              "jobTitle": ["Senior Full-stack AI Engineer", "Full-stack Developer", "AI Engineer"],
              "description": "Experienced software engineer with over ten years of expertise specializing in AI-driven development, full-stack applications, and intelligent solutions using React, TypeScript, .NET, and modern AI technologies.",
              "url": "https://reza899.github.io/portfolio/",
              "image": {
                "@type": "ImageObject",
                "url": "https://reza899.github.io/portfolio/images/profile.jpg",
                "width": 280,
                "height": 280
              },
              "sameAs": [
                "https://www.linkedin.com/in/reza-bozorgi/",
                "https://github.com/reza899",
                "https://dev.to/rezab"
              ],
              "knowsAbout": [
                {
                  "@type": "Thing",
                  "name": "React",
                  "description": "Frontend JavaScript library"
                },
                {
                  "@type": "Thing", 
                  "name": "TypeScript",
                  "description": "Typed JavaScript language"
                },
                {
                  "@type": "Thing",
                  "name": ".NET",
                  "description": "Microsoft development platform"
                },
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence",
                  "description": "AI and machine learning technologies"
                },
                {
                  "@type": "Thing",
                  "name": "LangChain",
                  "description": "LLM application framework"
                },
                {
                  "@type": "Thing",
                  "name": "OpenAI",
                  "description": "AI API and language models"
                },
                {
                  "@type": "Thing",
                  "name": "Azure AI",
                  "description": "Microsoft Azure AI services"
                }
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full-stack AI Engineer",
                "occupationLocation": {
                  "@type": "Place", 
                  "name": "Remote"
                },
                "skills": [
                  "React", "TypeScript", ".NET", "Python", "LangChain", "OpenAI", "Azure AI",
                  "Full-stack Development", "Software Engineering", "Machine Learning", 
                  "Artificial Intelligence", "Software Architecture", "API Development"
                ]
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance",
                "description": "Independent software engineer and consultant"
              },
              "yearsOfExperience": "10+",
              "programmingLanguage": ["JavaScript", "TypeScript", "C#", "Python"],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://reza899.github.io/portfolio/"
              }
            })
          }}
        />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Technologies />
      <Timeline />
      <Projects />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
