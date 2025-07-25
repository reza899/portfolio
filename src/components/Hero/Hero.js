import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const handleGetInTouch = () => {
    window.open('https://www.linkedin.com/in/reza-bozorgi/', '_blank');
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center as="h1">
          Hi, I'm{" "}
          <span 
            data-field="name" 
            data-person="Reza Bozorgi"
            style={{background: 'linear-gradient(270deg, #13ADC7 0%, #6978D1 50%, #945DD6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}
          >
            Reza Bozorgi
          </span>
          <br />
          <span data-field="role" data-job-title="Full-stack AI Engineer">Full-stack AI Engineer</span>
        </SectionTitle>
        <SectionText style={{lineHeight: '1.5'}}>
          Passionate and experienced software engineer with over ten years of expertise in designing and building full-stack applications using the Microsoft ecosystem, React, and TypeScript. Known for analyzing customer needs, crafting scalable solutions, and writing maintainable, production-quality code. Transitioning towards modern AI-driven development, leveraging LLMs and tools like Azure AI, LangChain, and OpenAI APIs to enhance productivity and build intelligent solutions in daily software engineering tasks.
        </SectionText>
        <Button onClick={handleGetInTouch}>Get In Touch</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
