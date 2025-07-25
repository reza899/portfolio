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
        <SectionTitle main center>
          Full-stack AI Engineer <br />
          Building Intelligent Solutions
        </SectionTitle>
        <SectionText>
          Passionate and experienced software engineer with over ten years of expertise in designing and building full-stack applications using the Microsoft ecosystem, React, and TypeScript. Known for analyzing customer needs, crafting scalable solutions, and writing maintainable, production-quality code. Transitioning towards modern AI-driven development, leveraging LLMs and tools like Azure AI, LangChain, and OpenAI APIs to enhance productivity and build intelligent solutions in daily software engineering tasks.
        </SectionText>
        <Button onClick={handleGetInTouch}>Get In Touch</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
