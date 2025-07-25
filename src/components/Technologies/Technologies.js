import React from "react";
import { DiFirebase, DiReact, DiDotnet } from "react-icons/di";
import { SiMicrosoft } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies & Expertise</SectionTitle>
    <SectionText>
      Over 10+ years of experience across the full technology stack, from enterprise backend systems to modern AI-powered frontends. Currently specializing in integrating LLMs and AI technologies into production applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            React, Next.js, TypeScript <br />
            Redux, MobX, Material UI <br />
            Tailwind CSS, Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDotnet size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            C#, .NET 8, ASP.NET <br />
            Python, FastAPI, gRPC <br />
            Microservices, Clean Architecture
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillCode size="3rem" />
        <ListContainer>
          <ListTitle>AI & LLMs</ListTitle>
          <ListParagraph>
            LangChain, LangGraph, OpenAI API <br />
            Azure AI, Semantic Kernel <br />
            RAG, Vector DBs, Agentic Architecture
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMicrosoft size="3rem" />
        <ListContainer>
          <ListTitle>Enterprise</ListTitle>
          <ListParagraph>
            Azure DevOps, Dynamics CRM <br />
            SharePoint, Enterprise Architecture <br />
            Scrum, TDD, CI/CD Pipelines
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
