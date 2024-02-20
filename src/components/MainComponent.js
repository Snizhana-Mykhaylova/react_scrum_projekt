import React from "react";

import buchImg from "../img/buch.jpg";
import csharpImg from "../img/cis.png";
import cppImg from "../img/cpp.png";
import sqlImg from "../img/SQL.png";
import workspacebackgroundImg from "../img/workspacebackground.png";
import workspaceImg from "../img/workspace.jpg";

const MainComponent = () => {
  return (
    <main className="container">
      <section className="baner">
        <div className="banerText">
          <h2>Die ComKollege verwaltungs web-App</h2>
          <p>
            Mit unserer Innovativen web app ermöglichen wir dem Anwender eine
            übersichtliche Verwaltung seiner Vakanzen, sowie die erstellung von
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

      <section className="baner2">
        <div className="beschreibung">
          <h2>Flexible einsatzmöglichkeiten</h2>

          <p>
            Egal ob zuhause am Computer, im Garten am Tablet oder unterwegs über
            das Smartphone, unsere webapp lässt sich auf nahezu allen
            betriebssystemen die einen Webbrowser öffnen können, verwenden. Der
            Anwender hat die möglichkeit von "überall" aus, sein Unternehmen mit
            leichtigkeit zu verwalten.{" "}
          </p>
        </div>
        <img className="workspace" src={workspaceImg} alt="" />
      </section>
      <section>
        {
          <ul className="kursCardList ">
            <li className="kursCard">
              <div className="card">
                <img src={sqlImg} className="card-img-top" alt="kurs1" />
                <div className="card-body">
                  <h5 className="card-title">SQL</h5>
                  <p className="card-text">Datenbanken, Listen, Tabellen</p>
                </div>
              </div>
            </li>
            <li className="kursCard">
              <div className="card">
                <img src={csharpImg} className="card-img-top" alt="kurs2" />
                <div className="card-body">
                  <h5 className="card-title">C#</h5>
                  <p className="card-text">Objektorientierte Programmierung</p>
                </div>
              </div>
            </li>
            <li className="kursCard">
              <div className="card">
                <img src={cppImg} className="card-img-top" alt="kurs3" />
                <div className="card-body">
                  <h5 className="card-title">C++</h5>
                  <p className="card-text">Grundlagen der Programmierung.</p>
                </div>
              </div>
            </li>
          </ul>
        }
      </section>
    </main>
  );
};

export default MainComponent;
