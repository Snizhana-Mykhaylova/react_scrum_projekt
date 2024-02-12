import React from 'react'

import buchImg from '../img/buch.jpg';
import colleageImg from '../img/Colleagues discussing startup idea - 640x427 1.png'
import messagingImg from '../img/Messaging.png'

const MainComponent = () => {
    return (
            <main className="container">
      <section className="baner">
        <div className="banerText">
<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, amet!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a recusandae ex asperiores adipisci odit quis tempora inventore, neque saepe? Delectus inventore molestiae quae ipsam deserunt illo aliquid quo odio sunt perspiciatis obcaecati autem quod laboriosam sint, suscipit atque a iste cupiditate reprehenderit deleniti at mollitia. Amet dolore totam numquam, libero officiis nobis rerum ex, quam esse culpa autem unde consequatur temporibus eos placeat voluptates voluptatibus harum hic! Amet cum, rem voluptas libero nulla commodi?</p>
        </div>
      <img src={colleageImg} alt=""/>


      </section>


      <section className="beschreibung">
        
        <p>Beschreibung</p>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laboriosam expedita voluptatum suscipit qui quis obcaecati, amet, recusandae at laborum deserunt molestiae animi veritatis fugit dignissimos! Eligendi omnis blanditiis aperiam esse incidunt, ullam hic, eos molestiae deserunt deleniti obcaecati aliquam distinctio neque inventore magnam maxime consectetur voluptates veniam. Est, dignissimos.</p>
<img src={messagingImg } alt=""/>
      </section>


      <section>
        
        <ul className="kursCardList ">
          <li className="kursCard">
            <div className="card" >
              <img src={buchImg} className="card-img-top" alt="kurs1" />
              <div className="card-body">
                <h5 className="card-title">IT0123</h5>
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
                <h5 className="card-title">Projekt Management</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
          <li className="kursCard">
            <div className="card" >
              <img src={buchImg} className="card-img-top" alt="kurs3" />
              <div className="card-body">
                <h5 className="card-title">IT0127</h5>
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
   )
}

export default MainComponent