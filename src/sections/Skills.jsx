import styled from 'styled-components';

const Section = styled.section`
  background: #333;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Column = styled.div`
  min-width: 120px;
`;

const SkillTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 0.5rem;
`;


export const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>
      <Columns>
        <Column>
          <SkillTitle>Code</SkillTitle>
          <List>
            <Item>HTML</Item>
            <Item>CSS</Item>
            <Item>JavaScript</Item>
          </List>
        </Column>
        <Column>
          <SkillTitle>Toolbox</SkillTitle>
          <List>
            <Item>React</Item>
            <Item>Node.js</Item>
            <Item>MongoDB</Item>
          </List>
        </Column>
        <Column>
          <SkillTitle>Upcoming</SkillTitle>
          <List>
            <Item>TypeScript</Item>
            <Item>Testing</Item>
          </List>
        </Column>
        <Column>
          <SkillTitle>More</SkillTitle>
          <List>
            <Item>GitHub</Item>
            <Item>Figma</Item>
          </List>
        </Column>
      </Columns>
    </Section>

  )
}

