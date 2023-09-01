import { useState } from "react";
import "../contact/contact.scss";
export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
  };

  return (
    <main className="contact-form">
      <section className="contact-form-container">
        <h1>Contactez-nous</h1>
        <div className="main-grid" id="paiment">
          <form onSubmit={handleSubmit}>
            <label htmlFor="lastName">Nom</label>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              onChange={(event) => setLastName(event.target.value)}
            ></input>
            <br />
            <label htmlFor="firstName">Prénom</label>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
            <br />
            <label htmlFor="phone">Téléphone</label>
            <input
              required
              type="text"
              name="phone"
              id="phone"
              onChange={(event) => setPhone(event.target.value)}
            ></input>
            <br />
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <br />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>

            <button>Envoyer</button>
          </form>
        </div>
      </section>
    </main>
  );
}
