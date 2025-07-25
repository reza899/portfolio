import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 240px;
  background: ${({ background }) => background || '#0F1624'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  position: relative;
`;

export const Img = styled.img`
  width: ${({ isLogo }) => isLogo ? '60%' : '100%'};
  height: ${({ isLogo }) => isLogo ? '60%' : '100%'};
  object-fit: ${({ isLogo }) => isLogo ? 'contain' : 'cover'};
  transition: transform 0.3s ease;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 3rem;
  place-items: stretch;
  column-gap: 2rem;
  row-gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(145deg, #1b1e26 0%, #0F1624 100%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
    
    ${Img} {
      transform: scale(1.05);
    }
  }
  
  &.featured {
    grid-column: span 2;
    
    @media (max-width: 900px) {
      grid-column: span 1;
    }
  }
`;

export const CardContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleContent = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 2.2rem;
  line-height: 1.2;
`;

export const FeaturedBadge = styled.span`
  display: inline-block;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Hr = styled.hr`
  width: 60px;
  height: 3px;
  margin: 1rem auto;
  border: 0;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
`;

export const CardInfo = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: left;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 2rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
`;

export const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #13ADC7;
  font-size: 1.3rem;
  padding: 0.4rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(19, 173, 199, 0.3);
  white-space: nowrap;
  
  &.ai-tag {
    background: rgba(148, 93, 214, 0.1);
    color: #945DD6;
    border-color: rgba(148, 93, 214, 0.3);
  }
`;

export const UtilityList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
  
  &:hover {
    background: linear-gradient(270deg, #00C9C5 0%, #9E20E8 100%);
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid #13ADC7;
    color: #13ADC7;
    
    &:hover {
      background: rgba(19, 173, 199, 0.1);
      border-color: #00DBD8;
      color: #00DBD8;
    }
  }
`;