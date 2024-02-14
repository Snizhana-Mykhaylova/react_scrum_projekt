import React, { useState, useEffect } from 'react'
import MitarbeiterService from '../services/MitarbeiterService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddMitarbeiterComponent = () => {

    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [position, setPosition] = useState('');
    const [phone, setTelefon] = useState('');
    const [plz, setPlz] = useState('');
    const [ort, setOrt] = useState('');
    const [strasse, setStrasse] = useState('');
    const [hause_nr , setHausNummer] = useState('');
    const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  


  const mitarbeiterData = { vorname, nachname, position, phone, plz, ort, strasse, email, hause_nr };
  
   useEffect(() => {
    if (id) {
      MitarbeiterService.getMitarbeiterById(id)
        .then(res => {
          const{mitarbeiter_vorname, mitarbeiter_nachname, mitarbeiter_position } = res.data.mitarbeiter[0];
        const{kd_email, kd_haus_nr, kd_ort, kd_plz, kd_straße,kd_phone_nr } = res.data.kontaktDaten[0];
          setVorname(mitarbeiter_vorname);
          setNachname(mitarbeiter_nachname);
          setPosition(mitarbeiter_position);
          setTelefon(kd_phone_nr);
          setPlz(kd_plz);
          setOrt(kd_ort);
          setStrasse(kd_straße);
          setHausNummer(kd_haus_nr);
          setEmail(kd_email);
          })
        .catch(e => console.log(e))
    }
    
  }, []);

  // senden data zu api und navigate wenn alles gut
  function speicherMitarbeiter(e) {
    e.preventDefault();

    if (mitarbeiterData.vorname !== "" && mitarbeiterData.nachname !== "" && mitarbeiterData.email != "") {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        MitarbeiterService.updateMitarbeiter(id, mitarbeiterData)
        .then(navigate("/mitarbeiter"))
        .catch(e => console.log(e));
      } else {
          MitarbeiterService.speicherMitarbeiter(mitarbeiterData)
          .then(navigate("/mitarbeiter"))
          .catch(e=>console.log(e))
        }

    } else {
      alert("Please, fill in all inputes");
    }

  }
  
  //Update oder Add Titel

  function title() {
    if (id) {
return "Mitarbeiter bearbeiten"
    } else {
      return "Mitarbeiter hinzufügen"
    }
  }



  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'>{title()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={vorname}
                                onChange={(e)=>setVorname(e.target.value)}
                                type="text" placeholder='Vorname' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                value={nachname}
                                onChange={(e)=>setNachname(e.target.value)}
                                type="text" placeholder='Nachname' />
                              </div>
                              <div className='form-group mb-2'>
                                <input className='form-control'
                                value={position}
                                onChange={(e)=>setPosition(e.target.value)}
                                type="text" placeholder='Position' />
                              </div>
                              <div className='form-group mb-2'>
                                <input className='form-control'
                                value={phone}
                                onChange={(e)=>setTelefon(e.target.value)}
                                type="text" placeholder='Telefon' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" placeholder='Email' />
                              </div>
                              <div className='form-group mb-2'>
                                <input className='form-control'
                                value={plz}
                                onChange={(e)=>setPlz(e.target.value)}
                                type="text" placeholder='Plz' />
                              </div>
                              <div className='form-group mb-2'>
                                <input className='form-control'
                                value={ort}
                                onChange={(e)=>setOrt(e.target.value)} 
                                type="text" placeholder='Ort' />
                              </div>
                              <div className='form-group mb-2'>
                                <input className='form-control'
                                value={strasse}
                                onChange={(e)=>setStrasse(e.target.value)} 
                                type="text" placeholder='Strasse' />
                              </div>
                              <div className='form-group mb-2'>
                                <input className='form-control'
                                value={ hause_nr }
                                onChange={(e)=>setHausNummer(e.target.value)} 
                                type="text" placeholder='Haus Nummer' />
                            </div>
                            
                            
                            <button onClick={(e)=>speicherMitarbeiter(e)} className='btn btn-success'>Speichern</button> {" "}
                            <Link to={"/mitarbeiter"} className='btn btn-danger' href="">Stornieren</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMitarbeiterComponent