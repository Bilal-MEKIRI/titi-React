import React from "react";
import { Link } from "react-router-dom";
import "./paiment2.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

function Paiment2() {
  return (
    <main className="paiment2">
      <section id="sectionCommande">
        <div id="numeroCommande">Commande TITI03FTP092201</div>
        <div id="clickAndCollect">
          <img src="images\Group 14.png" alt="" />
        </div>
      </section>
      <img id="line" src="images\Line 5.png" alt="" />
      <div id="sectionPaiment">
        <div id="modePaiment">
          <div>
            <input
              class="radioButton"
              type="radio"
              name="choixMenu"
              checked="true"
            />
            <div className="modePaiment">
              <img src="images\visa.png" alt=""></img>
            </div>
          </div>
          <form action="">
            <div class="inputBox">
              <p>Nom</p>
              <input type="text" name="nom" id="" class="input" />
            </div>
            <div class="inputBox">
              <p>Numéro carte</p>
              <input type="text" name="nom" id="" class="input" />
            </div>
            <div class="dateExpiration">
              <div>
                <p>Expiration</p>
                <input
                  type="text"
                  name="nom"
                  id=""
                  class="input"
                  placeholder="Month"
                />
              </div>
              <div id="separation">/</div>
              <div>
                <input
                  type="text"
                  name="nom"
                  id=""
                  class="input"
                  placeholder="Year"
                />
              </div>
            </div>
            <div class="inputBox">
              <p>N°crypto</p>
              <input type="text" name="nom" id="" class="input" />
            </div>
          </form>
        </div>
        <div id="promotion">
          <p>Promo pour votre prochaine commande</p>
          <div id="codePromo"></div>
        </div>
      </div>
      <div id="lastSection">
        <section id="section">
          <Link to="/confirmation">
            <button id="commencerButton">Payer</button>
          </Link>
        </section>
      </div>
      <ScrollToTop />
    </main>
  );
}
export default Paiment2;
