import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./homepage.scss";
import Slide from "../../components/slide";

function Home() {
  return (
    <main className="home">
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
          <Link id="link" href="#">
            Lire la suite
          </Link>
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
          <Slide />
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
