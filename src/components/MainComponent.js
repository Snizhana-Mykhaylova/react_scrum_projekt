import React from "react";

import csharpImg from "../img/cis.png";
import cppImg from "../img/cpp.png";
import javaImg from "../img/Java.png";
import sqlImg from "../img/SQL.png";
import htmlcssjsImg from "../img/HTML-CSS-JS.png";
import phpImg from "../img/PHP.png";
import pythonImg from "../img/Python.png";
import pctechImg from "../img/PCTechnik.png";
import cmotherImg from "../img/C.png";

import workspacebackgroundImg from "../img/workspacebackground.png";
import workspaceImg from "../img/workspace.jpg";

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MainComponent = () => {
  return (
    <main className="container">
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
        
    <div className="modulContainer">
      
    <Carousel className="carousel_item"> 
      <Carousel.Item >
      <img src={sqlImg} className="card-img-top" alt="kurs1" />
        <Carousel.Caption>
          <h3></h3>
          <p>Datenbanken</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img src={csharpImg} className="card-img-top" alt="kurs2" />
        <Carousel.Caption>
          <h3></h3>
          <p>OOP</p>
        </Carousel.Caption>
      </Carousel.Item >
      
      <Carousel.Item >
      <img src={cppImg} className="card-img-top" alt="kurs3" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            Nur für die Absoluten Genies
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    <Carousel.Item >
      <img src={javaImg} className="card-img-top" alt="kurs4" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            JS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item >
      <img src={htmlcssjsImg} className="card-img-top" alt="kurs5" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            Web Programmierung
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
      <img src={phpImg} className="card-img-top" alt="kurs6" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            $
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img src={pythonImg} className="card-img-top" alt="kurs7" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            Meh
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img src={pctechImg} className="card-img-top" alt="kurs8" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            PC Technick & Betriebssysteme
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img src={cmotherImg} className="card-img-top" alt="kurs9" />
        <Carousel.Caption> 
          <h3></h3>
          <p>
            Mutter aller Sprachen
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
    <div className="modulText">
        <h2>Kurs Module</h2>
        <p>Hier finden sie ein überblick auf die vorhandenen Kurse</p>
    </div>

    </div>
  
      </section>
      
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


    </main>
  );
};

export default MainComponent;
