import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, FooterContent, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, FooterProfileImage, ProfileColumn } from './FooterStyles';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:' + 'reza.bozorgi899' + '@' + 'gmail.com';
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Connect</LinkTitle>
            <LinkItem href="#" onClick={handleEmailClick}>
              Contact Me
            </LinkItem>
            <LinkItem href="https://www.linkedin.com/in/reza-bozorgi/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Resources</LinkTitle>
            <LinkItem href="https://github.com/reza899" target="_blank" rel="noopener noreferrer">
              GitHub Projects
            </LinkItem>
            <LinkItem href="https://github.com/reza899/AutoSDLC" target="_blank" rel="noopener noreferrer">
              AutoSDLC
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Navigation</LinkTitle>
            <LinkItem href="#tech">
              Technologies
            </LinkItem>
            <LinkItem href="#about">
              Career Journey
            </LinkItem>
            <LinkItem href="#projects">
              Projects
            </LinkItem>
          </LinkColumn>
          <ProfileColumn>
            <FooterProfileImage 
              src="/images/profile.jpg" 
              alt="Professional headshot of Reza Bozorgi, Senior Full-stack AI Engineer, wearing glasses and a patterned shirt, smiling at the camera"
              data-content-type="profile-photo"
              data-person="Reza Bozorgi"
            />
          </ProfileColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Building the future with AI-driven development</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/reza899" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/reza-bozorgi/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="#" onClick={handleEmailClick}>
              <AiOutlineMail size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{ textAlign: 'center', width: '100%', marginTop: '3rem', fontSize: '14px', opacity: 0.6 }}>
            © {new Date().getFullYear()} Reza Bozorgi. All rights reserved.
          </Slogan>
        </CompanyContainer>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;