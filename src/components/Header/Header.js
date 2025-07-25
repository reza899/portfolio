import Link from "next/link";
import React from "react";
import { AiFillGithub, AiTwotoneEdit, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:' + 'reza.bozorgi899' + '@' + 'gmail.com';
  };

  return (
  <Container role="banner" data-section="header">
    <Div1 data-content-type="logo">
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
          data-link-type="home"
          aria-label="Reza Bozorgi Portfolio - Go to homepage"
        >
          <DiCssdeck size="3rem" aria-label="Portfolio logo" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2 role="navigation" aria-label="Main navigation" data-content-type="main-navigation">
      <li>
        <Link href="#projects">
          <NavLink data-nav-item="projects">Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink data-nav-item="technologies">Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink data-nav-item="timeline">Timeline</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3 data-content-type="social-links" role="navigation" aria-label="Social media links">
      <SocialIcons 
        href="https://github.com/reza899"
        data-social-platform="github"
        aria-label="Visit Reza Bozorgi's GitHub profile"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons 
        href="https://www.linkedin.com/in/reza-bozorgi/"
        data-social-platform="linkedin"
        aria-label="Visit Reza Bozorgi's LinkedIn profile"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons 
        href="https://dev.to/rezab"
        data-social-platform="dev-to"
        aria-label="Visit Reza Bozorgi's Dev.to profile"
      >
        <AiTwotoneEdit size="3rem" />
      </SocialIcons>
      <SocialIcons 
        href="#" 
        onClick={handleEmailClick}
        data-social-platform="email"
        data-contact-email="reza.bozorgi899@gmail.com"
        aria-label="Send email to Reza Bozorgi"
      >
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
  );
};

export default Header;
