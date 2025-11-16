import React from "react";
import { DiReact, DiDatabase } from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";
import { AiFillRobot, AiFillCheckCircle } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
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
        <ListItem data-skill-category="ai-llm" data-expertise-level="advanced">
          <AiFillRobot size="3rem" aria-label="AI and multi-agent systems icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">AI & Multi-agent Systems</ListTitle>
            <ListParagraph data-technologies="MS Agent Framework,LangChain,LangGraph,RAG,Multi-agent">
              MS Agent Framework, LangChain, LangGraph <br />
              Agentic Architecture, Multi-agent systems <br />
              RAG Pipelines, MCP
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="cloud" data-expertise-level="expert">
          <SiMicrosoftazure size="3rem" aria-label="Cloud and Azure icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Cloud & Infrastructure</ListTitle>
            <ListParagraph data-technologies="Azure AI,Azure Services,Docker,CI/CD">
              Azure AI (Foundry), Azure Services <br />
              Github Actions (CI/CD), Docker <br />
              Cloud-native architecture
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="backend" data-expertise-level="expert">
          <FaServer size="3rem" aria-label="Backend technologies icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Backend & APIs</ListTitle>
            <ListParagraph data-technologies="Python,C#,FastAPI,ASP.NET,gRPC">
              Python, C#, TypeScript, JavaScript <br />
              FastAPI, ASP.net, gRPC <br />
              RESTful APIs, Microservices
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="database" data-expertise-level="expert">
          <DiDatabase size="3rem" aria-label="Database technologies icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Databases & Storage</ListTitle>
            <ListParagraph data-technologies="SQL,Vector DBs,Graph DBs,FAISS">
              SQL, relational databases <br />
              Vector DBs (FAISS, Pinecone) <br />
              Graph databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="frontend" data-expertise-level="expert">
          <DiReact size="3rem" aria-label="Frontend technologies icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Frontend</ListTitle>
            <ListParagraph data-technologies="React,Next.js,Redux,TypeScript,HTML5,CSS3">
              React, Next.js, Redux <br />
              TypeScript, HTML5, CSS3 <br />
              Material UI, Styled Components
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-skill-category="practices" data-expertise-level="expert">
          <AiFillCheckCircle size="3rem" aria-label="Methodologies and practices icon" />
          <ListContainer>
            <ListTitle role="heading" aria-level="3">Methodologies & Quality</ListTitle>
            <ListParagraph data-technologies="Clean Architecture,SOLID,TDD,Agile,Testing">
              Clean Architecture, OOP, SOLID <br />
              Design patterns, TDD, GitFlow <br />
              Pytest, Jest, Cypress <br />
              Scrum, Kanban, SAFe, UML, ITIL
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </section>
  </Section>
);

export default Technologies;
