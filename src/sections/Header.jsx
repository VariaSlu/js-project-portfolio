import styled from 'styled-components';
import faceIcon from '../assets/faceIcon.svg'

const Section = styled.section`
  padding: 8rem 2rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width:1000;
  marging 0;
`;

const Name = styled.h2`
font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #111;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h1`
color: black;
font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Montserrat', sans-serif;
word-wrap: break-word;
`;

const Face = styled.img`
width: 164px;
height: 164px;
background: #C4C4C4;
border-radius: 9999px;
`;

const Highlight = styled.span`
  color: green;
`;

const IntroContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  max-width: 800px;
  gap: 1.5rem;
`;

const IntroText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  text-align: left;
`;

const Arrow = styled.div`
  margin-top: 3rem;
  font-size: 2rem;
  color: #ff4081;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`;

export const Header = () => {
  return (
    <Section>
      <Name>Hi, I'm Varia</Name>
      <Title>
        Creative <Highlight>+</Highlight> Developer
      </Title>
      <IntroContainer>
        <Face src={faceIcon} alt="face" />
        <IntroText>
          My unique perspective allows me to work at the intersection of design and development, creating solutions that respect user experience and technical implementation. The future belongs to those who can speak both languages fluently, and I'm committed to being that bridge.
        </IntroText>
      </IntroContainer>
      <Arrow>↓</Arrow>
    </Section>
  )
}

