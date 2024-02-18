import React, { useState, useEffect } from "react";
import DozentService from "../services/DozentService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddDozentComponent = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [fachgebiet, setFachgebiet] = useState("");
  const [phone, setTelefon] = useState("");
  const [plz, setPlz] = useState("");
  const [ort, setOrt] = useState("");
  const [strasse, setStrasse] = useState("");
  const [hause_nr, setHausNummer] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const dozentData = {
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
      DozentService.getDozentById(id)
        .then((res) => {
          const {
            dozent_vorname,
            dozent_nachname,
            dozent_fachgebiet,
          } = res.data.dozent[0];
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
          setFachgebiet(dozent_fachgebiet);
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
  function speicherDozent(e) {
    e.preventDefault();

    if (
      dozentData.vorname !== "" &&
      dozentData.nachname !== "" &&
      dozentData.email !== ""
    ) {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        DozentService.updateDozent(id, dozentData)
          .then(navigate("/dozenten"))
          .catch((e) => console.log(e));
          window.location.reload();
      } else {
        DozentService.speicherDozent(dozentData)
          .then(navigate("/dozenten"))
          .catch((e) => console.log(e));
          window.location.reload();
      }
    } else {
      alert("Please, fill in all inputes");
    }
  }

  //Update oder Add Titel

  function title() {
    if (id) {
      return "Dozent bearbeiten";
    } else {
      return "Dozent hinzufügen";
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
                    placeholder="Vorname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={nachname}
                    onChange={(e) => setNachname(e.target.value)}
                    type="text"
                    placeholder="Nachname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={fachgebiet}
                    onChange={(e) => setFachgebiet(e.target.value)}
                    type="text"
                    placeholder="Fachgebiet"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={phone}
                    onChange={(e) => setTelefon(e.target.value)}
                    type="text"
                    placeholder="Telefon"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={plz}
                    onChange={(e) => setPlz(e.target.value)}
                    type="text"
                    placeholder="Plz"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={ort}
                    onChange={(e) => setOrt(e.target.value)}
                    type="text"
                    placeholder="Ort"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={strasse}
                    onChange={(e) => setStrasse(e.target.value)}
                    type="text"
                    placeholder="Strasse"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={hause_nr}
                    onChange={(e) => setHausNummer(e.target.value)}
                    type="text"
                    placeholder="Haus Nummer"
                  />
                </div>
                <button
                  onClick={(e) => speicherDozent(e)}
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

export default AddDozentComponent;
