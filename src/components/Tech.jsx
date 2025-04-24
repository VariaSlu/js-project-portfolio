import styled from 'styled-components';

const Section = styled.section`
  background: #ddd;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TechList = styled.p`
  max-width: 600px;
  margin: 0 auto;
`;

const Tech = () => {
  return (
    <Section>
      <Title>Tech</Title>
      <TechList>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, NodeJS,
        MongoDB, Web Accessibility, APIs, mob-programming, pair-programming,
        GitHub, Figma
      </TechList>
    </Section>
  )
}

export default Tech