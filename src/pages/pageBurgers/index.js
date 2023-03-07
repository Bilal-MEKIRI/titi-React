import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pageBurgers.css";
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
    <main>
      <h1>Nos burgers</h1>
      <div id="burgers-container">
        {burgers.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <div className="burgers">
                <p id="burger-name">{element.name}</p>
                <img src={element.image} />
                <p>{element.description}</p>
                <p>{element.price.$numberDecimal}$</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
}
export default Burger;
