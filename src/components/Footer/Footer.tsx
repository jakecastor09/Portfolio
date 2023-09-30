import Container from '../Container/Container';
import FooterContainer from './FooterContainer';
import FooterContent from './FooterContent';

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterContainer>
          <FooterContent />
        </FooterContainer>
      </Container>
    </footer>
  );
};

export default Footer;
