import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  min-width: 250px;
  min-height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(270deg, #13ADC7 0%, #6978D1 50%, #945DD6 100%) border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
    height: 150px;
    min-width: 150px;
    min-height: 150px;
  }
`;
