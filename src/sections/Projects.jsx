import styled from 'styled-components';
import { ProjectCard } from '../components/ProjectCard';



const Section = styled.section`
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  color: black;
font-size: 80px;
font-family: Montserrat;
font-weight: 700;
word-wrap: break-word;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Projects = () => {
  return (
    <Section>
      <Title>Featured Projects</Title>
      <Grid>
        <ProjectCard title="Personal Portfolio" text="Showcasing my work and skills." />
        <ProjectCard title="Multiple-choice quiz" text="Fun quiz using React and logic." />
        <ProjectCard title="Heather-weather app" text="Weather app pulling from APIs." />
        <ProjectCard title="Recipe app" text="Discover and save your favorite recipes." />
        <ProjectCard title="Tarot for developers" text="A quirky card-based app for fun." />
      </Grid>
    </Section>
  )
}