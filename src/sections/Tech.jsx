import styled from 'styled-components';

const Section = styled.section`
  background: #ddd;
  padding: 4rem 2rem;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  gap: 124px;
`;

const Title = styled.h2`
  color: #000;

font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const TechList = styled.p`
  max-width: 600px;
  margin: 0 auto;
  word-wrap: break-word;
  text-align: left;
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
  )
}



