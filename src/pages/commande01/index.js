import React from "react";
import { Link } from "react-router-dom";
import "./commande1.scss";

function Commande1() {
  return (
    <main className="commande1">
      <section id="sectionCommande">
        <div id="nosBurgers">
          <h1>Nos burgers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            velit rem magnam culpa reprehenderit, incidunt nobis quasi maiores
            illo corrupti. Provident asperiores rem quas numquam nemo neque odio
            tenetur temporibus.
          </p>
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
      <section class="burgers-list"></section>
      <div id="lastSection">
        <section id="section">
          <Link to="/commande2">
            <button id="commencerButton">Suivant</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
export default Commande1;
