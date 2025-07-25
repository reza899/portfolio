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
        <meta name="description" content="Experienced full-stack software engineer with 10+ years in React, TypeScript, .NET. Transitioning to modern AI-driven development, leveraging LLMs and AI tools to enhance productivity and build intelligent solutions." />
        <meta name="keywords" content="Full-stack Developer, AI Engineer, React, TypeScript, .NET, LangChain, OpenAI, Azure AI, Software Engineer" />
        <meta name="author" content="Reza Bozorgi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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
