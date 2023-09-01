import React, { useRef } from "react";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../resetCSS/reset.scss";
import "./template.scss";

export default function Template() {
  const location = useLocation();
  const navRef = useRef();
  const burgerBtn = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("responsive-nav");
    burgerBtn.current.classList.toggle("hide");
  }

  function getPath() {
    return location.pathname;
  }

  return (
    <>
      <header className={getPath() === "/" ? "header-home" : ""}>
        <div id="logo">
          <div
            className={getPath() === "/" ? "home-page-logo" : "logo"}
            id="logoImg"
          ></div>
        </div>
        <div id="navigation">
          <div class="desktop-nav-bar" ref={navRef}>
            <div id="button" className="navbar-btn">
              <Link to="collect">
                <button>Click & Collect</button>
              </Link>
              <Link to="commande1">
                <button>Livraison</button>
              </Link>
            </div>
            <nav>
              <ol>
                <Link
                  to="collect"
                  className="hide-link navItems"
                  id={getPath() === "/" ? "home-page-nav" : ""}
                >
                  Click & Collect
                </Link>
                <Link
                  to="commande1"
                  className="hide-link navItems"
                  id={getPath() === "/" ? "home-page-nav" : ""}
                >
                  Livraison
                </Link>
                <Link
                  class="navItems"
                  to="/commande1"
                  id={getPath() === "/" ? "home-page-nav" : ""}
                >
                  <li>La carte</li>
                </Link>
                <Link
                  class="navItems"
                  smooth
                  to="/#section1"
                  id={getPath() === "/" ? "home-page-nav" : ""}
                >
                  <li>Titi story</li>
                </Link>
                <Link
                  class="navItems"
                  smooth
                  to="/#section1"
                  id={getPath() === "/" ? "home-page-nav" : ""}
                >
                  <li>Le resto</li>
                </Link>
                <Link
                  class="navItems"
                  smooth
                  to="/#section3Title"
                  id={getPath() === "/" ? "home-page-nav" : ""}
                >
                  <li>Actus</li>
                </Link>
              </ol>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </div>
          <button
            className="nav-btn nav-open-btn"
            onClick={showNavbar}
            ref={burgerBtn}
          >
            <FaBars />
          </button>
        </div>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <section id="sectionFooter">
          <div id="footer1">
            <h3>Mentions Légales</h3>
            <Link class="footerLink" href="#">
              CGU
            </Link>
            <Link class="footerLink" href="#">
              CGV
            </Link>
          </div>
          <div id="footer2">
            <h3>Plan du site</h3>
            <Link class="footerLink" href="#">
              La carte
            </Link>
            <Link class="footerLink" href="#">
              Titi story
            </Link>
            <Link class="footerLink" href="#">
              Le resto
            </Link>
            <Link class="footerLink" href="#">
              Actu
            </Link>
          </div>
          <div id="footer3">
            <h3>Où nous trouver?</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42004.0305296544!2d2.6125700133751226!3d48.8534065973401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61aad94e49cdf%3A0x40b82c3688c4980!2s77200%20Torcy!5e0!3m2!1sen!2sfr!4v1673272663735!5m2!1sen!2sfr" />
          </div>
          <div id="footer4">
            <Link class="footerLink" to="contact">
              Contact
            </Link>
            <Link class="footerLink" href="#">
              Où nous trouver
            </Link>
            <Link class="footerLink" href="#">
              FAQ
            </Link>
          </div>
          <div id="footer5">
            <Link href="#">
              <img
                class="socialMedia"
                src="images\Facebook (1).png"
                alt="FaceBook logo"
              />
            </Link>
            <Link href="#">
              <img
                class="socialMedia"
                src="images\Instagram (1).png"
                alt="Instagram logo"
              />
            </Link>
            <Link href="#">
              <img
                class="socialMedia"
                src="images\TikTok.png"
                alt="Tiktok logo"
              />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
}
