import Container from '../Container/Container';
import HeroContainer from './HeroContainer';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section id='home'>
      <Container>
        <HeroContainer>
          <HeroImage />
          <HeroContent />
        </HeroContainer>
      </Container>
    </section>
  );
};

export default Hero;
