import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '10+', text: 'Years Experience'},
  { number: '500+', text: 'Enterprise Users Served', },
  { number: '5', text: 'Cross-functional Team Led', },
  { number: '4', text: 'Major Platform Migrations', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Leadership & Impact</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
