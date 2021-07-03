import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container text-white">
      <div className="base-card upper-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>

      <div className="base-card botton-card mt-3 mb-5">
      <div className="home-content-botton-container">
        <div>
          <ButtonIcon />
        </div>
        <div>
        <p className="text-muted h3 mb-5">Comece agora a navegar</p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
