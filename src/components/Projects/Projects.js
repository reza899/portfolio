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
  
  // Helper function to get the correct image path for GitHub Pages
  const getImagePath = (path) => {
    const isGitHubPages = typeof window !== 'undefined' 
      ? window.location.hostname === 'reza899.github.io'
      : process.env.DEPLOY_TARGET === 'github-pages';
    const basePath = isGitHubPages ? '/portfolio' : '';
    return `${basePath}${path}`;
  };
  
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
      <section data-section="projects" data-content-type="portfolio">
        <SectionTitle main as="h2" role="heading" aria-level="2">Projects</SectionTitle>
        <GridContainer data-content-type="project-list">
        {projects.map((project, index) => {
          const isAutoSDLC = project.title.includes("AutoSDLC");
          const isLogo = isLogoImage(project.image);
          
          return (
            <BlogCard 
              key={`project-${project.id}`} 
              className={isAutoSDLC ? "featured" : ""}
              data-project-id={project.id}
              data-project-type={aiTags.some(tag => project.tags.includes(tag)) ? "ai-project" : "traditional-project"}
              data-featured={isAutoSDLC}
            >
              <ImgContainer background={getImageBackground(project)}>
                <Img 
                  src={getImagePath(project.image)}
                  alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                  isLogo={isLogo}
                  data-image-type={isLogo ? "logo" : "screenshot"}
                />
              </ImgContainer>
              <CardContent>
                <TitleContent>
                  {isAutoSDLC && <FeaturedBadge data-badge-type="featured">Featured Project</FeaturedBadge>}
                  <HeaderThree role="heading" aria-level="3" data-project-title={project.title}>
                    {project.title}
                  </HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo data-content-type="project-description">
                  {project.description}
                </CardInfo>
                <TagList data-content-type="technology-tags">
                  {project.tags.map((tag, i) => (
                    <Tag 
                      key={i} 
                      className={aiTags.includes(tag) ? "ai-tag" : ""}
                      data-technology={tag}
                      data-tag-type={aiTags.includes(tag) ? "ai-technology" : "standard-technology"}
                    >
                      {tag}
                    </Tag>
                  ))}
                </TagList>
                <UtilityList data-content-type="project-links">
                  <ExternalLinks 
                    href={project.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-link-type="source-code"
                    aria-label={`View source code for ${project.title}`}
                  >
                    <AiFillGithub />
                    Code
                  </ExternalLinks>
                  {project.visit !== project.source && (
                    <ExternalLinks 
                      href={project.visit} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="secondary"
                      data-link-type="live-demo"
                      aria-label={`View live demo of ${project.title}`}
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
      </section>
    </Section>
  );
};

export default Projects;