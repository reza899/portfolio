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
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>Timeline</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/reza899">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/reza-bozorgi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://dev.to/rezab">
        <AiTwotoneEdit size="3rem" />
      </SocialIcons>
      <SocialIcons href="#" onClick={handleEmailClick}>
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
  );
};

export default Header;
