import "./home.css";
import googleplay from "../../images/googleplay.png";
import microsotstore from "../../images/microsoftstore.png";
import facebook from "../../images/facebook.svg";
import screenshot1 from "../../images/screenshot1.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="page">
        <div id="left-container">
          <img src={screenshot1} className="screenshots" alt="" />
        </div>

        <div id="right-container">
          <form action="">
            <p id="logo">Instagram </p>
            <div id="user" className="border">
              <label htmlFor="user">Telefone, nome de usuário ou e-mail</label>
              <br />
              <input type="text" id="user" />
            </div>
            <br />
            <div className="border">
              <label htmlFor="password">Senha</label>
              <br />
              <input type="password" id="password" />
              <button>Show</button>
            </div>

            <br />
            <button type="submit" id="login">Log in</button>
            <p>Ou</p>
            <div>
              <a href="">
                <img src={facebook} alt="" id="facebook" />
                <p>Entrar com facebook</p>
              </a>
            </div>
            <a href="http://">Esqueceu a senha?</a>
          </form>
          <div className="border">
            <p>
              Não tem uma conta? <Link to="/sign-up">Cadastre-se</Link>
            </p>
          </div>
          <div>
            <p>Obtenha o aplicativo</p>
            <img src={googleplay} alt="" className="link-icons" />
            <img src={microsotstore} alt="" className="link-icons" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
