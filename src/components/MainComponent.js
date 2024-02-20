import React from "react";

import csharpImg from "../img/cis.png";
import cppImg from "../img/cpp.png";
import sqlImg from "../img/SQL.png";
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
    <Carousel className="carousel_item">
      <Carousel.Item >
      <img src={sqlImg} className="card-img-top" alt="kurs1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img src={csharpImg} className="card-img-top" alt="kurs2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item >
      
      <Carousel.Item >
      <img src={cppImg} className="card-img-top" alt="kurs3" />
        <Carousel.Caption> 
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
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
