import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./commande2.scss";

// URL API
import { URL } from "../../utils/composants/urls";

function Commande2() {
  const [sideDishes, setsideDishes] = useState([]);
  useEffect(() => {
    const fetchSideDishes = async () => {
      try {
        const { data } = await axios.get(URL.fetchSideDishes);
        setsideDishes(data);
        console.log(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchSideDishes();
  }, []);

  return (
    <main className="commande2">
      <section id="sectionCommande">
        <div id="nosBurgers">
          <h1>Nos Accompagnements</h1>
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
      <section className="side-dishes-list">
        <img class="line" src="images\Line 5.png" alt="" />
        {sideDishes.map((element, index) => {
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
                <p className="description">{element.description}</p>
              </section>
              <img className="line" src="images\Line 5.png" alt="" />
            </React.Fragment>
          );
        })}
      </section>
      <div id="lastSection">
        <section id="section">
          <Link to="/commande3">
            <button id="commencerButton">Suivant</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
export default Commande2;
