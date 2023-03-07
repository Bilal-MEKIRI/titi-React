import React from "react";
import { Link } from "react-router-dom";
import "./recapitulatif2.scss";

function Recapitulatif2() {
  return (
    <main className="recapitulatif2">
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
      <img class="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\darkBurger.png" alt="" />
        </div>
        <h2>Le Dark Burger</h2>
        <div>
          <p>Modifier</p>
        </div>
        <p>5,5.€</p>
      </section>
      <img class="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\frites.png" alt="" />
        </div>
        <h2>Frites</h2>
        <div>
          <p>Modifier</p>
        </div>
        <p>3,50€</p>
      </section>
      <img class="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\Gauffres.jpg" alt="" />
        </div>
        <h2>Gauffres</h2>
        <div>
          <p>Modifier</p>
        </div>
        <p>3,50€</p>
      </section>
      <img class="line" src="images\Line 5.png" alt="" />
      <section class="choixMenu">
        <div>
          <input class="radioButton" type="radio" name="" checked="true" />
          <img class="menuImg" src="images\eau.jpeg" alt="" />
        </div>
        <h2>Eau</h2>
        <div>
          <p>Modifier</p>
        </div>
        <p>1€</p>
      </section>
      <img class="line" src="images\Line 5.png" alt="" />
      <div id="lastSection">
        <section id="section">
          <div id="prixCommande">
            <div id="numeroCommande">Commande TITI03FTP092201</div>
            <p>15€</p>
          </div>
          <Link to="/paiment">
            <button id="paimentButton">Payer</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
export default Recapitulatif2;
