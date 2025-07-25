import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import {
  BlogCard,
  CardContent,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgContainer,
  FeaturedBadge,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const aiTags = ["AI", "LLM", "NLP", "Agentic AI", "Multi-Agent", "Document Processing", "Code Analysis"];
  
  const isLogoImage = (imagePath) => {
    return imagePath && (imagePath.includes('.svg') || imagePath.includes('Logo'));
  };
  
  const getImageBackground = (project) => {
    if (project.title.includes("AutoSDLC")) return "#1a1a2e";
    if (project.title.includes("CodexQ")) return "#0f3460";
    if (project.title.includes("Insurance")) return "#16213e";
    return "#0F1624";
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project, index) => {
          const isAutoSDLC = project.title.includes("AutoSDLC");
          const isLogo = isLogoImage(project.image);
          
          return (
            <BlogCard key={`project-${project.id}`} className={isAutoSDLC ? "featured" : ""}>
              <ImgContainer background={getImageBackground(project)}>
                <Img 
                  src={project.image} 
                  alt={project.title}
                  isLogo={isLogo}
                />
              </ImgContainer>
              <CardContent>
                <TitleContent>
                  {isAutoSDLC && <FeaturedBadge>Featured Project</FeaturedBadge>}
                  <HeaderThree>{project.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{project.description}</CardInfo>
                <TagList>
                  {project.tags.map((tag, i) => (
                    <Tag 
                      key={i} 
                      className={aiTags.includes(tag) ? "ai-tag" : ""}
                    >
                      {tag}
                    </Tag>
                  ))}
                </TagList>
                <UtilityList>
                  <ExternalLinks href={project.source} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                    Code
                  </ExternalLinks>
                  {project.visit !== project.source && (
                    <ExternalLinks 
                      href={project.visit} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="secondary"
                    >
                      <AiOutlineLink />
                      Demo
                    </ExternalLinks>
                  )}
                </UtilityList>
              </CardContent>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;