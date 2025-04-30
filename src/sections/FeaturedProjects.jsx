import styled from 'styled-components';
import { myprojects } from '../data/myprojects.js';
import { ProjectCard } from '../components/ProjectCard.jsx';

const ProjectsContainer = styled.section`
  background-color: white;
  padding: 2rem 1rem;
  max-width: 1044px;
  margin: 0 auto;
`;

const ProjectsHeading = styled.h1`
  
  text-align: left;
  margin-bottom: 3rem;

  color: black;
font-size: clamp(32px, 6vw, 80px);
font-family: Montserrat;
font-weight: 700;
word-wrap: break-word;
`;


export const FeaturedProjects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeading>Featured Projects</ProjectsHeading>
      {myprojects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ProjectsContainer>
  )
}