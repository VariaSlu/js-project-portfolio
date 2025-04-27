import styled from 'styled-components';
import { Button } from './Button';
import { FaGlobe, FaGithub, FaFileAlt } from "react-icons/fa";

const Content = styled.div`
display: flex;
width: 100%;
height: 100%;
max-width: 900px;
background: none;
padding: 0;
border-radius: 0px;
overflow: hidden;
margine: 2rem 0;
`;

const StyledImg = styled.img`
width: 100%;
height: 100%;
flex: 1;
background: #C4C4C4;
width: 408px;
height: 280px;
flex-shrink: 0;
`;

const Right = styled.div`
flex: 1;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Title = styled.span`
  color: black;
  pudding:0;
font-size: 32px;
font-family: Montserrat;
font-weight: 600;
word-wrap: break-word;
`;

const Text = styled.span`
  color: black;
font-size: 18px;
font-family: Hind;
font-weight: 700;
word-wrap: break-word;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

const Buttons = styled.div`
display: flex;
align-items: center;
gap: 2rem;

`;

export const ProjectCard = ({ title, text }) => {
  return (
    <Content>
      <StyledImg />
      <Right>
        <h2>{title}</h2>
        <p>{text}</p>
        <TechStack>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>React</span>
          <span>Team Project</span>
          <span>Lighthouse</span>
          <span>WAVE</span>
        </TechStack>
        <Buttons>
          <Button
            variant="default"
            icon={<FaFileAlt />}
          >
            The  process
          </Button>
          <Button
            variant="default"
            icon={<FaGlobe />}
          >
            Live demo
          </Button>
          <Button
            variant="default"
            icon={<FaGithub />}
          >
            View the code
          </Button>
        </Buttons>
      </Right>
    </Content>

  )
}