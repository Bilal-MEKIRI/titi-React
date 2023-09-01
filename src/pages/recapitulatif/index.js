import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recapitulatif.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

function Recapitulatif() {
  const [burger, setBurger] = useState();
  const [sideDish, setSideDish] = useState();
  const [desert, setDesert] = useState();
  const [drink, setDrink] = useState();

  useEffect(() => {
    setBurger(JSON.parse(localStorage.getItem("burger")));
    setSideDish(JSON.parse(localStorage.getItem("sideDish")));
    setDesert(JSON.parse(localStorage.getItem("desert")));
    setDrink(JSON.parse(localStorage.getItem("drink")));
  }, []);

  const burgerPrice = parseFloat(burger?.price);
  const sideDishPrice = parseFloat(sideDish?.price);
  const desertPrice = parseFloat(desert?.price);
  const drinkPrice = parseFloat(drink?.price);
  const totalPrice = burgerPrice + sideDishPrice + desertPrice + drinkPrice;

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
              <img className="previous" src={burger?.image} alt="" />
              <img src="images\Line 12.png" alt="" />
              <img className="previous" src={sideDish?.image} alt="" />
              <img src="images\Line 13.png" alt="" />
              <img className="previous" src={desert?.image} alt="" />
              <img src="images\Line 14.png" alt="" />
              <img className="actual" src={drink?.image} alt="" />
              <img src="images\Line 17.png" alt="" />
            </div>
            <Link href="#">Paiment</Link>
          </div>
        </div>
      </section>
      <img className="line" src="images\Line 5.png" alt="" />

      <React.Fragment>
        <section className="choixMenu">
          <div>
            <img className="menuImg" src={burger?.image} alt="" />
          </div>
          <h2>
            {burger?.name} - {burger?.price}$
          </h2>
          <p className="description">{burger?.description}</p>
        </section>
        <img className="line" src="/images\Line 5.png" alt="" />
      </React.Fragment>

      <React.Fragment>
        <section className="choixMenu">
          <div>
            <img className="menuImg" src={sideDish?.image} alt="" />
          </div>
          <h2>
            {sideDish?.name} - {sideDish?.price}$
          </h2>
          <p className="description">{sideDish?.description}</p>
        </section>
        <img className="line" src="/images\Line 5.png" alt="" />
      </React.Fragment>

      <React.Fragment>
        <section className="choixMenu">
          <div>
            <img className="menuImg" src={desert?.image} alt="" />
          </div>
          <h2>
            {desert?.name} - {desert?.price}$
          </h2>
          <p className="description">{desert?.description}</p>
        </section>
        <img className="line" src="/images\Line 5.png" alt="" />
      </React.Fragment>

      <React.Fragment>
        <section className="choixMenu">
          <div>
            <img className="menuImg" src={drink?.image} alt="" />
          </div>
          <h2>
            {drink?.name} - {drink?.price}$
          </h2>
          <p className="description">{drink?.description}</p>
        </section>
        <img className="line" src="/images\Line 5.png" alt="" />
      </React.Fragment>

      <div id="lastSection">
        <section id="section">
          <div id="prixCommande">{totalPrice}$</div>
          <Link to="/recapitulatif2">
            <button id="paimentButton">Payer</button>
          </Link>
        </section>
      </div>
      <ScrollToTop />
    </main>
  );
}
export default Recapitulatif;
