import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import AboutContainer from './AboutContainer';
import AboutContent from './AboutContent';

import AboutImage from './AboutImage';

const About = () => {
  return (
    <section id='about' className='mt-12'>
      <Container>
        <PageHeader title={'About Me'} />
        <div className='mt-16 xl:mt-24 md:py-16 lg:py-20 xl:py-24'>
          <AboutContainer>
            <AboutImage />
            <AboutContent />
          </AboutContainer>
        </div>
      </Container>
    </section>
  );
};

export default About;
