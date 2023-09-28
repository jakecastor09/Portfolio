import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import service1 from '../../assets/service-1.png';
import service2 from '../../assets/service-2.png';
import service3 from '../../assets/service-3.png';
import ServiceItem from './ServiceItem';
import ServiceItems from './ServiceItems';

const Service = () => {
  return (
    <section id='service' className='mt-12'>
      <Container>
        <PageHeader title='My Service' />
        <ServiceItems>
          <ServiceItem
            image={service1}
            title='Responsive Design'
            desc='Ensuring websites are optimized and responsive for various device
              and screen sizes.'
          />
          <ServiceItem
            image={service2}
            title='Development'
            desc='Write clean, well-structured, and maintainable code following industry best practices.'
          />
          <ServiceItem
            image={service3}
            title='Website Performance 
            Optimization'
            desc='Enhancing website speed and performance to provide an exceptional user experience.'
          />
        </ServiceItems>
      </Container>
    </section>
  );
};

export default Service;
