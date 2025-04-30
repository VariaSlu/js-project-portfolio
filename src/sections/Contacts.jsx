import styled from 'styled-components';
import photoMe from '../assets/PhotoVaria.png';

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: black;
  font-size: clamp(32px, 6vw, 80px);
font-family: Montserrat;
font-weight: 700;
word-wrap: break-word;
`;

const PhotoMe = styled.img`
width: 164px; /* Better to use fixed size */
  height: 164px;
  background: #D9D9D9;
  border-radius: 9999px;
  object-fit: cover;
`;

const Info = styled.p`
color: black;
font-size: clamp(16px, 6vw, 32px);
font-family: Montserrat; sans-serif;
font-weight: 600;
word-wrap: break-word;  
margin: 0.5rem 0;
`;

export const Contacts = () => {
  return (
    <Section>
      <Title>Contact (But No Pressure)</Title>
      <PhotoMe src={photoMe} alt="Portrait of Varvara Slugina" />
      <Info>Varia Slugina</Info>
      <Info>+46101000000</Info>
      <Info>varvaraslugina@gmail.com</Info>
    </Section>
  )
}

