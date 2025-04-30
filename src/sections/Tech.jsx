import styled from 'styled-components';

const Section = styled.section`
  background: #ddd;
  padding: 4rem 2rem;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1044px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
`;

const Title = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: clamp(32px, 6vw, 80px);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const TechList = styled.p`
  max-width: 600px;
  margin: 0;
  word-wrap: break-word;
  font-size: clamp(14px, 2vw, 18px);
  text-align: left;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Tech = () => {
  return (
    <Section>
      <Container>
        <Title>Tech</Title>
        <TechList>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, NodeJS,
          MongoDB, Web Accessibility, APIs, mob-programming, pair-programming,
          GitHub, Figma
        </TechList>
      </Container>
    </Section>
  );
};
