import styled from 'styled-components';
import faceIcon from '../assets/faceIcon.svg'

const Section = styled.section`
  padding: 8rem 4rem 4rem;
  
`;

const Container = styled.a`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
`;

const Name = styled.h2`
  color: black;
font-size: 32px;
font-family: Montserrat;
font-weight: 600;
word-wrap: break-word;
margin-block-end: 0;
margin-block-start: 0;
`;

const Title = styled.h1`
color: black;
font-size: 80px;
font-family: Montserrat;
font-weight: 700;
word-wrap: break-word;
padding: 0;
margin-block-end: 0;
margin-block-start: 0;
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
  color: black;
font-size: 18px;
font-family: Hind;
font-weight: 400;
word-wrap: break-word;
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
      <Container>
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
      </Container>
    </Section>
  )
}

