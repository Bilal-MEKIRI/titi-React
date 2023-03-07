import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pageBurgers.scss";
// URL API
import { URL } from "../../utils/composants/urls.js";

function Burger() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const { data } = await axios.get(URL.fetchBurger);
        setBurgers(data);
        console.log(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchBurgers();
  }, []);

  return (
    <main className="page-burgers">
      <h1>Nos burgers</h1>
      <div id="burgers-container">
        {burgers.map((element, index) => {
          return (
            <React.Fragment key={index}>
              {/* <div className="burgers">
                <p id="burger-name">{element.name}</p>
                <img src={element.image} alt="" />
                <p>{element.description}</p>
                <p>{element.price.$numberDecimal}$</p>
              </div> */}

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
              <img className="line" src="img\Line 5.png" alt="" />
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
}
export default Burger;
