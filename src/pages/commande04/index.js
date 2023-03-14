import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./commande4.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

// URL API
import { URL } from "../../utils/composants/urls";

function Commande4() {
  const [drinks, setDrinks] = useState([]);
  const [choosedProduct, setChooseProduct] = useState();
  const navigate = useNavigate();

  const [burger, setBurger] = useState();
  const [sideDish, setSideDish] = useState();
  const [desert, setDesert] = useState();

  useEffect(() => {
    setBurger(JSON.parse(localStorage.getItem("burger")));
    setSideDish(JSON.parse(localStorage.getItem("sideDish")));
    setDesert(JSON.parse(localStorage.getItem("desert")));
  }, []);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const { data } = await axios.get(URL.fetchDrinks);
        setDrinks(data);
        console.log(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchDrinks();
  }, []);

  function handleChange(event) {
    setChooseProduct(event.target.value);
  }

  function next() {
    if (choosedProduct !== undefined) {
      fetch("https://titi.startwin.fr/products/" + choosedProduct)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("drink", JSON.stringify(data));
          navigate("/recapitulatif");
        });
    }
  }

  return (
    <main className="commande4">
      <section id="sectionCommande">
        <div id="nosBoissons1">
          <h1>Nos Boissons</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            velit rem magnam culpa reprehenderit, incidunt nobis quasi maiores
            illo corrupti. Provident asperiores rem quas numquam nemo neque odio
            tenetur temporibus.
          </p>
        </div>
        <div id="nosBoissons2">
          <div id="clickAndCollect1">
            <img src="/images\Group 14.png" alt="" />
          </div>
          <div id="clickAndCollect2">
            <div id="images">
              <img className="previous" src={burger?.image} alt="" />
              <img src="/images\Line 12.png" alt="" />
              <img className="previous" src={sideDish?.image} alt="" />
              <img src="/images\Line 13.png" alt="" />
              <img className="actual" src={desert?.image} alt="" />
              <img src="/images\Line 14.png" alt="" />
              <img src="/images\Group 18.png" alt="" />
              <img src="/images\Line 17.png" alt="" />
            </div>
            <Link href="#">Paiment</Link>
          </div>
        </div>
      </section>

      <section id="drinks" className="drinks-list-1">
        <img className="line" src="/images\Line 5.png" alt="" />
        {drinks.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <section className="choixMenu">
                <div>
                  <input
                    className="radioButton"
                    type="radio"
                    name="choixMenu"
                    value={element._id}
                    onChange={handleChange}
                  />
                  <img className="menuImg" src={element.image} alt="" />
                </div>
                <h2>
                  {element.name} - {element.price.$numberDecimal}$
                </h2>
                <p className="description">{element.description}</p>
              </section>
              <img className="line" src="/images\Line 5.png" alt="" />
            </React.Fragment>
          );
        })}
      </section>

      <div id="lastSection">
        <section id="section">
          <button id="commencerButton" onClick={next}>
            Suivant
          </button>
        </section>
      </div>
      <ScrollToTop />
    </main>
  );
}
export default Commande4;
