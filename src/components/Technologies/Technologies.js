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
    <section data-section="technologies" data-content-type="skills">
      <SectionTitle main as="h2" role="heading" aria-level="2">Technologies & Expertise</SectionTitle>
      <SectionText data-content-type="summary" data-experience-years="10+">
        Over 10+ years of experience across the full technology stack, from enterprise backend systems to modern AI-powered frontends. Currently specializing in integrating LLMs and AI technologies into production applications.
      </SectionText>
      <List data-content-type="skill-categories">
        <ListItem data-skill-category="frontend" data-expertise-level="expert">
          <DiReact size="3rem" aria-label="React framework icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Frontend</ListTitle>
            <ListParagraph data-technologies="React,Next.js,TypeScript,Redux,MobX,Material UI,Tailwind CSS,Styled Components">
              React, Next.js, TypeScript <br />
              Redux, MobX, Material UI <br />
              Tailwind CSS, Styled Components
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="backend" data-expertise-level="expert">
          <DiDotnet size="3rem" aria-label=".NET framework icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Backend</ListTitle>
            <ListParagraph data-technologies="C#,.NET 8,ASP.NET,Python,FastAPI,gRPC,Microservices">
              C#, .NET 8, ASP.NET <br />
              Python, FastAPI, gRPC <br />
              Microservices, Clean Architecture
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="ai-llm" data-expertise-level="advanced">
          <AiFillCode size="3rem" aria-label="AI and code icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">AI & LLMs</ListTitle>
            <ListParagraph data-technologies="LangChain,LangGraph,OpenAI API,Azure AI,Semantic Kernel,RAG,Vector DBs">
              LangChain, LangGraph, OpenAI API <br />
              Azure AI, Semantic Kernel <br />
              RAG, Vector DBs, Agentic Architecture
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="enterprise" data-expertise-level="expert">
          <SiMicrosoft size="3rem" aria-label="Microsoft technologies icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Enterprise</ListTitle>
            <ListParagraph data-technologies="Azure DevOps,Dynamics CRM,SharePoint,Scrum,TDD,CI/CD">
              Azure DevOps, Dynamics CRM <br />
              SharePoint, Enterprise Architecture <br />
              Scrum, TDD, CI/CD Pipelines
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </section>
  </Section>
);

export default Technologies;
