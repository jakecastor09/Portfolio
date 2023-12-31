import nestVista2 from '../../assets/nestVista-2-min.png';
import nestVista from '../../assets/nestVista1.png';
import spiralAdmin2 from '../../assets/spirals-2-min.png';
import spiralAdmin from '../../assets/spirals-min.png';
import agriApp from '../../assets/agri-app-min.png';
import agriApp2 from '../../assets/agri-app2-min.png';

import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';

import TechnologiesContainer from '../Technologies/TechnologiesContainer';
import TechnologiesItem from '../Technologies/TechnologiesItem';
import TechnologiesTitle from '../Technologies/TechnologiesTitle';
import TechnologiesItems from '../Technologies/TechnologiesItems';
import PortfolioDetails from './PortfolioDetails';
import PortfolioDetailsContainer from './PortfolioDetailsContainer';
import PortfolioImage from './PortfolioImage';

const Portfolio = () => {
  return (
    <section id='portfolio' className='mt-12'>
      <Container>
        <PageHeader title='My Portfolio' />
        <PortfolioImage smImage={spiralAdmin} midImage={spiralAdmin2} />
        <PortfolioDetailsContainer>
          <PortfolioDetails
            title={'Spirals'}
            subTitle={'Admin Web App and POS Mobile App'}
            description='The full-stack project that I developed for Spiral business during
            my college years. The project consists of two separate
            applications: a mobile app for branch use and a web application
            for the owner.'
          />
          <div className='md:w-1/2 xl:flex xl:justify-center'>
            <TechnologiesContainer>
              <TechnologiesTitle title='Spirals Web App' />
              <TechnologiesItems>
                <TechnologiesItem name='React' />
                <TechnologiesItem name='Typescript' />
                <TechnologiesItem name='Firebase' />
              </TechnologiesItems>
              <TechnologiesTitle title='Spirals Mobile App' />
              <TechnologiesItems>
                <TechnologiesItem name='HTML' />
                <TechnologiesItem name='CSS' />
                <TechnologiesItem name='Ionic' />
                <TechnologiesItem name='Angular' />
                <TechnologiesItem name='Firebase' />
              </TechnologiesItems>
            </TechnologiesContainer>
          </div>
        </PortfolioDetailsContainer>

        {/* //2 */}

        <PortfolioImage smImage={nestVista2} midImage={nestVista} />
        <PortfolioDetailsContainer>
          <PortfolioDetails
            title={'NestVista'}
            subTitle={'Personal Project'}
            description='This is the project I created while learning Tailwind CSS. It is a multipage project that includes various layouts, allowing me to practice using Flexbox and Grid and become more familiar with Tailwind.'
          />
          <div className='md:w-1/2 xl:flex xl:justify-center'>
            <TechnologiesContainer>
              <TechnologiesTitle title={'Static Website'} />
              <TechnologiesItems>
                <TechnologiesItem name='React' />
                <TechnologiesItem name='Typescript' />
                <TechnologiesItem name='Tailwind' />
              </TechnologiesItems>
            </TechnologiesContainer>
          </div>
        </PortfolioDetailsContainer>

        {/* //3 */}

        <PortfolioImage smImage={agriApp2} midImage={agriApp} />
        <PortfolioDetailsContainer>
          <PortfolioDetails
            title={'Agriculture App in Tabon'}
            subTitle={'School Project'}
            description='This is the project I developed, A mobile application for Tabon Nueva Ecija, focusing on agricultural education. Users can select crops and livestock they want to learn about, post problems that others can comment on, share farming methods with the community, and read other farming methods.'
          />
          <div className='md:w-1/2 xl:flex xl:justify-center'>
            <TechnologiesContainer>
              <TechnologiesTitle title={'Mobile App'} />
              <TechnologiesItems>
                <TechnologiesItem name='HTML' />
                <TechnologiesItem name='CSS' />
                <TechnologiesItem name='Ionic' />
                <TechnologiesItem name='Angular' />
                <TechnologiesItem name='Firebase' />
              </TechnologiesItems>
            </TechnologiesContainer>
          </div>
        </PortfolioDetailsContainer>
      </Container>
    </section>
  );
};

export default Portfolio;
