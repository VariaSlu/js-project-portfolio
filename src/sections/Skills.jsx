import styled from 'styled-components';

const Section = styled.section`
  background: #494A4C;
  color: white;
  padding: 4rem 2rem 8rem;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  font-size: clamp(32px, 6vw, 80px);
font-family: Montserrat;
font-weight: 700;
word-wrap: break-word
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  min-width: 200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const CategoryLabel = styled.div`
  display: inline-block;
  background-color: ${props => props.color};
  color: ${props => props.textColor || 'white'};
  font-weight: 600;
  padding: 0px;
  margin-bottom: 1rem;
  font-size: 32px;
  font-family: Montserrat, sans-serif;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
color: white;
font-size: 18px;
font-weight: 400;
word-wrap: break-word;  
margin-bottom: 0.5rem;
font-family: Montserrat, sans-serif;
`;


export const Skills = () => {
  return (
    <Section id="skills">
      <Title>Skills</Title>

      <Columns>
        <Column>
          <CategoryLabel
            color="#EB5577"
            aria-label="Code skills category"
          >
            Code
          </CategoryLabel>
          <List>
            <Item>HTML5</Item>
            <Item>CSS3</Item>
            <Item>Javascript ES6</Item>
            <Item>React</Item>
            <Item>Node.js</Item>
            <Item>Styled Components</Item>
            <Item>GitHub</Item>
          </List>
        </Column>

        <Column>
          <CategoryLabel
            color="#2483E0"
            aria-label="Toolbox skills category"
          >
            Toolbox
          </CategoryLabel>
          <List>
            <Item>Figma</Item>
            <Item>Atom</Item>
            <Item>Postman</Item>
            <Item>Adobe Photoshop</Item>
            <Item>Adobe Illustrator</Item>
            <Item>Keynote</Item>
            <Item>Slack</Item>
          </List>
        </Column>

        <Column>
          <CategoryLabel
            color="#3A975B"
            aria-label="Upcoming skills category"
          >
            Personality
          </CategoryLabel>
          <List>
            <Item>Dry</Item>
            <Item>Ironic</Item>
            <Item>Funny</Item>
            <Item>Maybe a little awkward</Item>
          </List>
        </Column>

        <Column>
          <CategoryLabel
            color="#FFDE30"
            textColor="#333333"
            aria-label="More skills category"
          >
            More
          </CategoryLabel>
          <List>
            <Item>Design Lead</Item>
            <Item>Branding</Item>
            <Item>Strategy</Item>
            <Item>Process design</Item>
            <Item>Concept development</Item>
            <Item>Agile methodology</Item>
            <Item>Hyper Island toolbox</Item>
          </List>
        </Column>
      </Columns>
    </Section>
  )
}

