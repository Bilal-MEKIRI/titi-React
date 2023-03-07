import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function Home() {
  return (
    <main>
      <section id="section1" class="section">
        <div id="restoImg">
          <h1>Le resto</h1>
          <div id="restoImgDiv">
            <img id="imgResto2" src="images\Group 13.png" alt="" />
            <img id="imgResto1" src="images\resto.jpg" alt="" />
          </div>
        </div>
        <div id="titiStory">
          <h1>Titi story</h1>
          <h2>Une équipe authentique</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            corrupti, repellat molestiae ea in eveniet atque, commodi quidem
            velit nemo nam facere totam suscipit. Quibusdam, facere quam!
            Tenetur, expedita sequi.
          </p>
          <Link href="#">Lire la suite</Link>
        </div>
      </section>
      <section id="section2" class="section">
        <div id="nosBurgers">
          <h1 id="h1section2">Nos burger</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            enim quasi, ut fuga quaerat autem, et nostrum, voluptates quos ea
            ex?
          </p>
        </div>
        <div id="menu">
          <img
            class="fleche"
            id="flecheDroite"
            src="images\flecheGauche.png"
            alt="fleche gauche"
          />
          <div class="menu">
            <img class="menuImg" src="images\burger1.jpg" alt="" />
            <p>Burger n°1</p>
          </div>
          <div class="menu">
            <img class="menuImg" src="images\burger2.jpg" alt="" />
            <p>Burger n°2</p>
          </div>
          <div class="menu">
            <img class="menuImg" src="images\burger3.jpg" alt="" />
            <p>Burger n°3</p>
          </div>
          <div class="menu">
            <img class="menuImg" src="images\burger4.jpg" alt="" />
            <p>Burger n°4</p>
          </div>
          <div class="menu">
            <img class="menuImg" src="images\burger5.jpg" alt="" />
            <p>Burger n°5</p>
          </div>
          <div class="menu">
            <img class="menuImg" src="images\burger6.jpg" alt="" />
            <p>Burger n°6</p>
          </div>
          <img
            class="fleche"
            id="flecheGauche"
            src="images\flecheDroite.png"
            alt="fleche droite"
          />
        </div>
      </section>
      <div id="section3Title">
        <img id="lineImg" src="images\Line 2.png" alt="" />
        <img id="smallEclipse" src="images\Ellipse 7.png" alt="" />
        <img id="bigEclipse" src="images\Ellipse 6.png" alt="" />
        <h1>Actus</h1>
        <img id="bigEclipse" src="images\Ellipse 6.png" alt="" />
        <img id="smallEclipse" src="images\Ellipse 7.png" alt="" />
        <img id="lineImg" src="images\Line 2.png" alt="" />
      </div>
      <section id="section3" class="section">
        <article id="article1" class="article">
          <h3>Notre dark titi arrive</h3>
          <img id="articleImg" src="images\darkTiti.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae corporis vitae repellat quod temporibus ad harum iste
            vero voluptate, velit voluptates obcaecati.
          </p>
          <button class="articleButton">En savoir +</button>
        </article>
        <article id="article2" class="article">
          <h3>Des coktails sur mesure</h3>
          <img id="articleImg" src="images\coktail.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae corporis vitae repellat quod temporibus ad harum iste
            vero voluptate, velit voluptates obcaecati.
          </p>
          <button class="articleButton">En savoir +</button>
        </article>
        <article id="article3" class="article">
          <h3>Une ambiance authentique</h3>
          <img id="articleImg" src="images\decor.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae corporis vitae repellat quod temporibus ad harum iste
            vero voluptate, velit voluptates obcaecati.
          </p>
          <button class="articleButton">En savoir +</button>
        </article>
      </section>
      <div id="lastSection">
        <section id="section4" class="section">
          <div id="newsLetter1">
            <h2>Des offres et des actus Chaque semaine sur titi Burger</h2>
          </div>
          <div id="newsLetter2">
            <h2>Inscription à la newsletter</h2>
            <div id="newsLetterInscription">
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <img id="sendButton" src="images\Group 10.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Home;
