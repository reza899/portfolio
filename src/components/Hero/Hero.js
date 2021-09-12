import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a passionate software engineer who is focusing on Front-end
        development with React, Typescript, and related technologies. I’m able
        to analyze customer needs and designing technical solutions. I have
        enthusiastic to apply best software practices and writing reliable and
        maintainable code.
      </SectionText>
      <Button>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
