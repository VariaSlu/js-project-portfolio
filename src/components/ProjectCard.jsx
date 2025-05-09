import styled from 'styled-components';
import { FaFileAlt, FaGlobe, FaGithub } from 'react-icons/fa';



const ProjectItem = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProjectImagePlaceholder = styled.img`
  background-color: #d3d3d3;
  width: 100%;
  height: 240px;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    width: 40%;
    max-width: 400px;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ProjectGoal = styled.div`
  margin-bottom: 0.75rem;
`;

const ProjectRole = styled.div`
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: black;
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f5f5f5;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  &.live-demo:hover {
    background-color: #0B24F5;
    color: white;
  }
  
  &.view-code:hover {
    background-color: #EB5577;
    color: white;
  }
  
  &.the-process:hover {
    background-color: #FFD338;
    color: #333;
  }
`;


export const ProjectCard = ({ project }) => {
  return (
    <ProjectItem>
      <ProjectImagePlaceholder
        src={project.image}
        alt={`${project.name} project screenshot`}
        onError={(e) => { e.target.src = 'path/to/fallback-image.jpg'; }}
      />
      <ProjectContent>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectGoal>
          <strong>Goal:</strong> {project.goal}
        </ProjectGoal>
        <ProjectRole>
          <strong>My role:</strong> {project.role}
        </ProjectRole>

        <TagContainer>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>

        <ButtonContainer>
          <Button href={project.links.process} className="the-process">
            <FaFileAlt /> The process
          </Button>
          <Button href={project.links.demo} className="live-demo">
            <FaGlobe /> Live demo
          </Button>
          <Button href={project.links.code} className="view-code">
            <FaGithub /> View the code
          </Button>
        </ButtonContainer>
      </ProjectContent>
    </ProjectItem>
  )
}