import styled from 'styled-components';

const Section = styled.section`
  padding: 234px 128px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PhotoMe = styled.img`
width: 10%;
height: 10%;
background: #D9D9D9;
border-radius: 9999px;
`;

const Info = styled.p`
  margin: 0.5rem 0;
`;

export const Contacts = () => {
  return (
    <Section>
      <Title>Let’s talk</Title>
      <PhotoMe src="https://placehold.co/164x164" alt="Me" />
      <Info>Varia SLu</Info>
      <Info>+46101000000</Info>
      <Info>varvaraslugina@gmail.com</Info>
    </Section>
  )
}

