import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./commande1.scss";
import ScrollToTop from "../../components/scrollToTopBtn";

// URL API
import { URL } from "../../utils/composants/urls.js";

function Commande1() {
  const [burgers, setBurgers] = useState([]);
  const [choosedProduct, setChoosedProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const { data } = await axios.get(URL.fetchBurgers);
        setBurgers(data);
        console.log(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchBurgers();
  }, []);

  function handleChange(event) {
    setChoosedProduct(event.target.value);
  }

  function next() {
    if (choosedProduct !== undefined) {
      fetch("https://titi.startwin.fr/products/" + choosedProduct)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("burger", JSON.stringify(data));
          navigate("/commande2");
        });
    }
  }

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
      <section class="burgers-list">
        <img className="line" src="images\Line 5.png" alt="" />

        {burgers.map((element, index) => {
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
              <img className="line" src="images\Line 5.png" alt="" />
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
export default Commande1;
