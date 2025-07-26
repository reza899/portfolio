import React from 'react';
import styled from 'styled-components';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const HeroSectionTitle = styled(SectionTitle)`
  padding: 10px 0 16px !important;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 8px 0 12px !important;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 6px 0 8px !important;
  }
`;

const ResponsiveSectionText = styled(SectionText)`
  line-height: 1.5;
  min-width: 900px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: unset;
    max-width: 800px;
  }
`;

const Hero = () => {
  const handleGetInTouch = () => {
    window.open('https://www.linkedin.com/in/reza-bozorgi/', '_blank');
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <HeroSectionTitle main center as='h1'>
          Hi, I'm{' '}
          <span
            data-field='name'
            data-person='Reza Bozorgi'
            style={{
              background:
                'linear-gradient(270deg, #13ADC7 0%, #6978D1 50%, #945DD6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Reza Bozorgi
          </span>
          <br />
          <span data-field='role' data-job-title='Full-stack AI Engineer'>
            Full-stack AI Engineer
          </span>
        </HeroSectionTitle>
        <ResponsiveSectionText>
          Passionate and experienced software engineer with over ten years of
          expertise in designing and building full-stack applications using the
          Microsoft ecosystem, React, and TypeScript. Known for analyzing
          customer needs, crafting scalable solutions, and writing maintainable,
          production-quality code. Transitioning towards modern AI-driven
          development, leveraging LLMs and tools like Azure AI, LangChain, and
          OpenAI APIs to enhance productivity and build intelligent solutions in
          daily software engineering tasks.
        </ResponsiveSectionText>
        <Button onClick={handleGetInTouch}>Get In Touch</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
