import React, { useState, useEffect } from "react";
import DozentenService from "../services/DozentService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddDozentenComponent = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [fachgebiet, setfachgebiet] = useState("");
  const [phone, setTelefon] = useState("");
  const [plz, setPlz] = useState("");
  const [ort, setOrt] = useState("");
  const [strasse, setStrasse] = useState("");
  const [hause_nr, setHausNummer] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const dozentenData = {
    vorname,
    nachname,
    fachgebiet,
    phone,
    plz,
    ort,
    strasse,
    email,
    hause_nr,
  };

  useEffect(() => {
    if (id) {
      DozentenService.getDozentById(id)
        .then((res) => {
          const { dozent_vorname, dozent_nachname, dozent_fachgebiet } =
            res.data.dozenten[0];
          const {
            kd_email,
            kd_haus_nr,
            kd_ort,
            kd_plz,
            kd_straße,
            kd_phone_nr,
          } = res.data.kontaktDaten[0];
          setVorname(dozent_vorname);
          setNachname(dozent_nachname);
          setfachgebiet(dozent_fachgebiet);
          setTelefon(kd_phone_nr);
          setPlz(kd_plz);
          setOrt(kd_ort);
          setStrasse(kd_straße);
          setHausNummer(kd_haus_nr);
          setEmail(kd_email);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  // senden data zu api und navigate wenn alles gut
  function speicherDozenten(e) {
    e.preventDefault();

    if (
      dozentenData.vorname !== "" &&
      dozentenData.nachname !== "" &&
      dozentenData.email !== "" &&
      dozentenData.fachgebiet !== "" &&
      dozentenData.phone !== "" &&
      dozentenData.plz !== "" &&
      dozentenData.ort !== "" &&
      dozentenData.strasse !== "" &&
      dozentenData.hause_nr !== "" 
    ) {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        DozentenService.updateDozent(id, dozentenData)
          .then(navigate("/dozenten"))
          .catch((e) => console.log(e));
      } else {
        DozentenService.speicherDozent(dozentenData)
          .then(navigate("/dozenten"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please, fill in all inputes");
    }
  }

  //Update oder Add Titel

  function title() {
    if (id) {
      return "Dozenten bearbeiten";
    } else {
      return "Dozenten hinzufügen";
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{title()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={vorname}
                    onChange={(e) => setVorname(e.target.value)}
                    type="text"
                    required
                    placeholder="Vorname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={nachname}
                    onChange={(e) => setNachname(e.target.value)}
                    type="text"
                    required
                    placeholder="Nachname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={fachgebiet}
                    onChange={(e) => setfachgebiet(e.target.value)}
                    type="text"
                    required
                    placeholder="Fachgebiet"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={phone}
                    onChange={(e) => setTelefon(e.target.value)}
                    type="text"
                    required
                    placeholder="Telefon"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={plz}
                    onChange={(e) => setPlz(e.target.value)}
                    type="text"required
                    
                    placeholder="Plz"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={ort}
                    onChange={(e) => setOrt(e.target.value)}
                    type="text"
                    required
                    placeholder="Ort"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={strasse}
                    onChange={(e) => setStrasse(e.target.value)}
                    type="text"
                    required
                    placeholder="Strasse"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={hause_nr}
                    onChange={(e) => setHausNummer(e.target.value)}
                    type="text"
                    required
                    placeholder="Haus Nummer"
                  />
                </div>
                <button
                  onClick={(e) => speicherDozenten(e)}
                  className="btn btn-success"
                >
                  Speichern
                </button>{" "}
                <Link to={"/dozenten"} className="btn btn-danger" href="">
                  Stornieren
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDozentenComponent;
