import React from "react";

import buchImg from "../img/buch.jpg";
import workspacebackgroundImg from "../img/workspacebackground.png";
import workspaceImg from "../img/workspace.jpg";

const MainComponent = () => {
  return (
    <main className="container">
      <section className="baner">
        <div className="banerText">
          <h2>Die COMKOLLEGE verwaltungs web-App</h2>
          <p>
            Mit unserer Innovativen web app ermöglichen wir dem anwender eine
            übersichtliche verwaltung seiner Vakanzen, sowie die erstellung von
            Kurs Modulen mit der möglichkeit Dozenten, Teilnehmer und
            Mitarbeiter zuzuweisen.
          </p>
        </div>

        <img
          className="workspacebackground"
          src={workspacebackgroundImg}
          alt=""
        />
      </section>

      <section className="beschreibung">
        <p>Beschreibung</p>
        <h2>Flexible einsatzmöglichkeiten</h2>
        <p>
          Egal ob zuhause am Computer, im garten am Tablet oder unterwegs über
          das Smartphone, unsere webapp lässt sich auf nahezu allen
          betriebssystemen die einen Webbrowser öffnen können, verwenden. Der
          anwender hat die möglichkeit von "überall" aus, seine Firma mit
          leichtigkeit zu verwalten.{" "}
        </p>
        <img className="workspace" src={workspaceImg} alt="" />
      </section>

      <section>
        <ul className="kursCardList ">
          <li className="kursCard">
            <div className="card">
              <img src={buchImg} className="card-img-top" alt="kurs1" />
              <div className="card-body">
                <h5 className="card-title">Kurse</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
          <li className="kursCard">
            <div className="card">
              <img src={buchImg} className="card-img-top" alt="kurs2" />
              <div className="card-body">
                <h5 className="card-title">Klassen</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
          <li className="kursCard">
            <div className="card">
              <img src={buchImg} className="card-img-top" alt="kurs3" />
              <div className="card-body">
                <h5 className="card-title">Teilnehmer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainComponent;
