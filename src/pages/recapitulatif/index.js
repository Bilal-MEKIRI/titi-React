import React from "react";
import { Link } from "react-router-dom";
import "./recapitulatif.scss";

function Recapitulatif() {
  return (
    <main className="recapitulatif">
      <section id="sectionCommande">
        <div id="nosBurgers">
          <h1>Récapitulatif</h1>
        </div>
        <div id="nosBurgers2">
          <div id="clickAndCollect1">
            <img src="images\Group 14.png" alt="" />
          </div>
          <div id="clickAndCollect2">
            <div id="images">
              <img src="images\Group 21.png" alt="" />
              <img src="images\Line 12.png" alt="" />
              <img src="images\Group 20.png" alt="" />
              <img src="images\Line 13.png" alt="" />
              <img src="images\Group 19.png" alt="" />
              <img src="images\Line 14.png" alt="" />
              <img src="images\Group 18.png" alt="" />
              <img src="images\Line 17.png" alt="" />
            </div>
            <Link href="#">Paiment</Link>
          </div>
        </div>
      </section>
      <img className="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\darkBurger.png" alt="" />
        </div>
        <h2>Le Dark Burger</h2>
        <p>5,5.€</p>
      </section>
      <img className="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\frites-sel.jpg" alt="" />
        </div>

        <h2>Frites</h2>
        <p>3,50€</p>
      </section>
      <img className="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\gaufres.jpg" alt="" />
        </div>

        <h2>Gauffres</h2>
        <p>3,50€</p>
      </section>
      <img className="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\cristalline.jpeg" alt="" />
        </div>

        <h2>Eau</h2>
        <p>1€</p>
      </section>
      <img className="line" src="images\Line 5.png" alt="" />
      <div id="lastSection">
        <section id="section">
          <div id="prixCommande">15€</div>
          <Link to="/recapitulatif2">
            <button id="paimentButton">Payer</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
export default Recapitulatif;
