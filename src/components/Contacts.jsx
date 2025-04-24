import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Info = styled.p`
  margin: 0.5rem 0;
`;

const Contacts = () => {
  return (
    <Section>
      <Title>Let’s talk</Title>
      <Info>Varia SLu</Info>
      <Info>+46101000000</Info>
      <Info>varvaraslugina@gmail.com</Info>
    </Section>
  )
}

export default Contacts