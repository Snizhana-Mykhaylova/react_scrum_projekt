import React, { useState, useEffect } from "react";
import KursService from "../services/KursService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddKursComponent = () => {
  const [kurs_name, setKursName] = useState("");
  const [kurs_beschreibung, setBeschreibung] = useState("");
  const [kurs_start_datum, setStartDatum] = useState("");
  const [kurs_end_datum, setEndDatum] = useState("");
  const [fk_dozent_id, setDozentId] = useState("");
  const [dozent_vorname, setDozentVorname] = useState("");
  const [dozent_nachname, setDozentNachname] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const kursData = {
    kurs_name,
    kurs_beschreibung,
    kurs_start_datum,
    kurs_end_datum,
    fk_dozent_id,
    dozent_vorname,
    dozent_nachname,
  };

  useEffect(() => {
    if (id) {
      KursService.getKursById(id)
        .then((res) => {
          console.log(res);
          if (res.data.kurse || res.data.kurse.length > 0) {
            const {
              
              kurs_name,
              kurs_beschreibung,
              kurs_start_datum,
              kurs_end_datum,
              fk_dozent_id,
              dozent_vorname,
              dozent_nachname,
              // dozent_fachgebiet,
            } = res.data.kurse[0];
            setKursName(kurs_name);
            setBeschreibung(kurs_beschreibung);
            setStartDatum(kurs_start_datum);
            setEndDatum(kurs_end_datum);
            setDozentId(fk_dozent_id);
            setDozentVorname(dozent_vorname);
            setDozentNachname(dozent_nachname);
          } else {
          
            console.log("keine kursdaten");
          }
        })
        .catch((e) => console.log(e));
    }
  }, [id]);
  

  // senden data zu api und navigate wenn alles gut
  function speicherKurs(e) {
    e.preventDefault();

    if (kurs_name !== "" && kurs_beschreibung !== "" && kurs_start_datum !== "") {
      if (id) {
        KursService.updateKurs(id, kursData)
          .then(() => {
            navigate("/kurse");
          })
          .catch((e) => console.log(e));
      } else {
        KursService.speicherKurs(kursData)
          .then(() => {
            navigate("/kurse");
          })
          .catch((e) => console.log(e));
      }
    } else {
      alert("Bitte füllen Sie alle Felder aus");
    }
  }

  //Update oder Add Titel

  function title() {
    if (id) {
      return "Kurs bearbeiten";
    } else {
      return "Kurs hinzufügen";
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
                    value={kurs_name}
                    onChange={(e) => setKursName(e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={kurs_beschreibung}
                    onChange={(e) => setBeschreibung(e.target.value)}
                    type="text"
                    placeholder="Beschreibung"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={kurs_start_datum}
                    onChange={(e) => setStartDatum(e.target.value)}
                    type="date"
                    placeholder="Start"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={kurs_end_datum}
                    onChange={(e) => setEndDatum(e.target.value)}
                    type="date"
                    placeholder="Ende"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={fk_dozent_id}
                    onChange={(e) => setDozentId(e.target.value)}
                    type="text"
                    placeholder="DozentenId"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozent_vorname}
                    onChange={(e) => setDozentVorname(e.target.value)}
                    type="text"
                    placeholder="DozentenVorname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozent_nachname}
                    onChange={(e) => setDozentNachname(e.target.value)}
                    type="text"
                    placeholder="DozentenNachname"
                  />
                </div>
                <button
                  onClick={(e) => speicherKurs(e)}
                  className="btn btn-success"
                >
                  Speichern
                </button>{" "}
                <Link to={"/kurse"} className="btn btn-danger" href="">
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

export default AddKursComponent;
