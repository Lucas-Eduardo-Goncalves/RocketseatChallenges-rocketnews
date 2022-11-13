import { FiArrowRight, FiSend } from "react-icons/fi";

import logo from "./assets/logo.svg";
import { GlobalStyles } from "./global";
import { Container, Content, Hero } from "./styles/Container";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>
          <header className="header">
            <img src={logo} alt="RocketNews" />
          </header>

          <div className="texts">
            <p className="texts__first">
              atualize ideias e informações em 5 minutos.
            </p>
            <p className="texts__second">
              tudo que você precisa saber para começar seu dia bem e informado
            </p>
            <p className="texts__terceary">
              noticias sobre o universo Rocketseat, e tudo o que precisa para
              começar o dia melhor. perfeito para se preparar para codar ☕
            </p>
          </div>

          <div className="inputArea">
            <label>Insira seu e-mail:</label>
            <div>
              <input type="text" placeholder="oi@rocketseat.com" />
              <button>
                <FiSend />
              </button>
            </div>
          </div>

          <a href="#">
            deixe-me ler primeiro <FiArrowRight />
          </a>
        </Content>

        <Hero />
      </Container>
    </>
  );
}
