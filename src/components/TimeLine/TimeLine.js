import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <section data-section="timeline" data-content-type="career-history">
        <SectionTitle main as="h2" role="heading" aria-level="2">Career Journey</SectionTitle>
        <SectionText data-content-type="timeline-summary">
          A decade-long journey of growth and evolution in software engineering, from enterprise solutions to cutting-edge AI integration.
        </SectionText>
        <CarouselContainer 
          ref={carouselRef} 
          onScroll={handleScroll}
          role="region"
          aria-label="Career timeline"
          data-content-type="timeline-carousel"
        >
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
              data-timeline-item={index}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
                data-year={item.year}
                data-timeline-entry="true"
                role="article"
                aria-label={`Career milestone ${item.year}`}
              >
                <CarouselItemTitle data-content-type="timeline-year" role="heading" aria-level="3">
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    data-decorative="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear_1179_5)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_5"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#13ADC7" />
                        <stop offset="1" stopColor="#945DD6" />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText data-content-type="timeline-description" data-year={item.year}>
                  {item.text}
                </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
        </CarouselContainer>
        <CarouselButtons role="tablist" aria-label="Timeline navigation" data-content-type="timeline-navigation">
          {TimeLineData.map((item, index) => {
            return (
              <CarouselButton
                key={index}
                index={index}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
                type="button"
                role="tab"
                aria-selected={activeItem === index}
                aria-label={`Go to year ${item.year}`}
                data-timeline-button={index}
                data-year={item.year}
              >
                <CarouselButtonDot active={activeItem} aria-hidden="true" />
              </CarouselButton>
            );
          })}
        </CarouselButtons>
      </section>
    </Section>
  );
};

export default Timeline;
