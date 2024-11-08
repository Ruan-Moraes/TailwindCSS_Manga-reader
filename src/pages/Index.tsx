// @ts-expect-error - ignore import error
import '@splidejs/react-splide/css';

import { Colors } from '../constants/Colors';

import Header from '../layouts/Header';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';

import Warning from '../components/notifications/Warning';
import Carousel from '../components/carousel/Carousel';
import Highlight_Cards from '../components/cards/highlight/Cards_Container';
import Horizontal_Card from '../components/cards/horizontal/Cards_Container';
import Vertical_Cards from '../components/cards/vertical/Cards_Container';
import Social_Medias from '../components/social_medias/Social_Medias_Container';

const Index = () => {
  return (
    <>
      <Header />
      <Main>
        <Warning
          title="Atenção!"
          message="Site em desenvolvimento, algumas funcionalidades podem não estar disponíveis."
          color={Colors.QUATERNARY}
        />
        <Social_Medias />
        <Carousel />
        <Highlight_Cards
          title="Tops 5 obras em ascensão"
          sub="Quero ver mais..."
        />
        <Horizontal_Card title="10 Obras aleatórias" sub="Quero ver mais..." />
        <Vertical_Cards title="Obras Atualizadas" sub="Quero ver mais..." />
      </Main>
      <Footer />
    </>
  );
};

export default Index;
