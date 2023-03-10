import React from "react";
import { Link } from "react-router-dom";
import "./click&collect.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

function Collect() {
  return (
    <main className="clickAndcollect">
      <section class="clickAndCollect">
        <h1>Click & Collect</h1>
        <img id="imgLigne" src="images\Line 11.png" alt="ligne verticale" />
        <h2>Commander et déguster</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          eligendi labore, nihil, sapiente assumenda dolores ipsum, hic animi
          expedita fugit quia maxime a impedit delectus debitis est perferendis.
          Temporibus, neque?
        </p>
      </section>
      <div id="lastSection">
        <section id="section">
          <Link to="/commande1">
            <button id="commencerButton">Commencer</button>
          </Link>
        </section>
      </div>
      <ScrollToTop />
    </main>
  );
}
export default Collect;
