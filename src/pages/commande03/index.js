import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./commande3.scss";

// URL API
import { URL } from "../../utils/composants/urls";

function Commande3() {
  const [desert, setDesert] = useState([]);
  useEffect(() => {
    const fetchDeserts = async () => {
      try {
        const { data } = await axios.get(URL.fetchDeserts);
        setDesert(data);
        console.log(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchDeserts();
  }, []);

  return (
    <main className="commande3">
      <section id="sectionCommande">
        <div id="nosBurgers">
          <h1>Nos Desserts</h1>
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
      <section class="deserts-list">
        {desert.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <section className="choixMenu">
                <div>
                  <input
                    className="radioButton"
                    type="radio"
                    name="choixMenu"
                  />
                  <img className="menuImg" src={element.image} alt="" />
                </div>
                <h2>
                  {element.name} - {element.price.$numberDecimal}$
                </h2>
                <p>{element.description}</p>
              </section>
              <img className="line" src="images\Line 5.png" alt="" />
            </React.Fragment>
          );
        })}
      </section>
      <div id="lastSection">
        <section id="section">
          <Link to="/commande4">
            <button id="commencerButton">Suivant</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
export default Commande3;
