import React from "react";
import { Link } from "react-router-dom";
import "./paiment.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

function Paiment() {
  return (
    <main className="paiment">
      <section id="sectionCommande">
        <div id="numeroCommande">Commande TITI03FTP092201</div>
        <div id="clickAndCollect">
          <img src="images\Group 14.png" alt="" />
        </div>
      </section>
      <img id="line" src="images\Line 5.png" alt="" />
      <div id="sectionPaiment">
        <div id="modePaiment">
          <section class="choixModePaiment">
            <div class="section">
              <div>
                <input
                  id="paypal"
                  class="radioButton"
                  type="radio"
                  name="choixMenu"
                />
                <div class="modePaiment">
                  <img src="images\paypal.png" alt=""></img>
                </div>

                <h2>PayPal</h2>
              </div>
              <img class="line" src="images\Line 5.png" alt="" />
            </div>
          </section>
          <section class="choixModePaiment">
            <div class="section">
              <div>
                <input
                  id="visa"
                  class="radioButton"
                  type="radio"
                  name="choixMenu"
                />
                <div class="modePaiment">
                  <img src="images\visa.png" alt=""></img>
                </div>

                <h2>Visa</h2>
              </div>
              <img class="line" src="images\Line 5.png" alt="" />
            </div>
          </section>
          <section class="choixModePaiment">
            <div class="section">
              <div>
                <input
                  id="bitcoin"
                  class="radioButton"
                  type="radio"
                  name="choixMenu"
                />
                <div class="modePaiment">
                  <img src="images\bitcoin.png" alt=""></img>
                </div>

                <h2>Bitcoin</h2>
              </div>
              <img class="line" src="images\Line 5.png" alt="" />
            </div>
          </section>
        </div>
        <div id="promotion">
          <p>Promo pour votre prochaine commande</p>
          <div id="codePromo"></div>
        </div>
      </div>
      <div id="lastSection">
        <section id="section">
          <Link to="/paiment2">
            <button id="commencerButton">Valider</button>
          </Link>
        </section>
      </div>
      <ScrollToTop />
    </main>
  );
}
export default Paiment;
