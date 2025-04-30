import styled from 'styled-components';
import faceIcon from '../assets/faceIcon.svg'
import arrow from '../assets/arrow.svg';

const Section = styled.section`
  padding: 8rem 1.5rem 4rem;

  @media (min-width: 768px) {
    padding: 8rem 4rem 4rem;
  }
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

const Name = styled.h2`
  color: black;
  font-size: clamp(20px, 4vw, 32px);
  font-family: Montserrat;
  font-weight: 600;
  margin: 0;
`;

const Title = styled.h1`
  color: black;
  font-size: clamp(36px, 8vw, 80px);
  font-family: Montserrat;
  font-weight: 700;
  margin: 0;
`;

const Face = styled.img`
  width: clamp(80px, 20vw, 164px);
  height: clamp(80px, 20vw, 164px);
  background: #C4C4C4;
  border-radius: 9999px;
  flex-shrink: 0;
`;

const Highlight = styled.span`
  color: green;
`;

const IntroContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  max-width: 800px;
  width: 100%;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IntroText = styled.p`
  color: black;
  font-size: clamp(14px, 2.5vw, 18px);
  font-weight: 400;
  word-wrap: break-word;
  max-width: 500px;
`;

const Arrow = styled.img`
  margin: 3rem auto 0;
  width: 32px;
  height: auto;
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
          <Face src={faceIcon} alt="face emoji" />
          <IntroText>
            I work somewhere between design and development. It's a lot of building things, fixing things, and pretending that's what I meant to do the whole time.
          </IntroText>
        </IntroContainer>
        <Arrow src={arrow} alt="scroll down arrow" />
      </Container>
    </Section>
  )
}
