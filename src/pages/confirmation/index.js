import React from "react";
import "./confirmation.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

function Confirmation() {
  return (
    <main className="confirmation">
      <section id="sectionCommande">
        <div id="numeroCommande">Commande TITI03FTP092201</div>
        <div id="clickAndCollect">
          <img src="images\Group 14.png" alt="" />
        </div>
      </section>
      <img id="line" src="images\Line 5.png" alt="" />
      <div id="sectionPaiment">
        <p id="p1">Merci pour votre commande</p>
        <p id="p2">Vous pouvez venir la chercher à:</p>
        <p id="p3">12H45</p>
      </div>
      <ScrollToTop />
    </main>
  );
}
export default Confirmation;
