import React from 'react';
import { Container, SectionStyled, Title } from './Section.styled';

interface IProp {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<IProp> = ({ children, title }) => {
  return (
    <SectionStyled>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionStyled>
  );
};
