import styled from 'styled-components';
import { Button } from './Button';
import { FaGlobe, FaGithub, FaFileAlt } from "react-icons/fa";

const Content = styled.div`
  background: #eee;
  padding: 1.5rem;
  border-radius: 8px;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
`;

const Btn = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 40px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: grey;

  &:hover {
  backgrround color: blue;
  }
`

export const ProjectCard = ({ title, text }) => {
  return (
    <Content>
      <h2>{title}</h2>
      <p>{text}</p>
      <Btn cta>Hello</Btn>
      <div className="button-row">
        {/* Default "Read article" button with file icon */}
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
      </div>
    </Content>

  )
}