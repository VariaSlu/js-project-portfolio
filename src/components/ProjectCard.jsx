import styled from 'styled-components';

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

export const ProjectCard = ({ title, text }) => {
  return (
    <Content>
      <h2>{title}</h2>
      <p>{text}</p>
    </Content>
  )
}
