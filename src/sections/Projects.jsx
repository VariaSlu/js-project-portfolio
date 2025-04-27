import styled from 'styled-components';
import { ProjectCard } from '../components/ProjectCard';



const Section = styled.section`
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
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