import React, { useState, useEffect } from "react";
import KursService from "../services/KursService";
import { Link, useNavigate, useParams } from "react-router-dom";



const AddKursComponent = () => {
  const [kurs_name, setKursName] = useState("");
  const [kurs_beschreibung, setBeschreibung] = useState("");
  const [fk_dozent_id, setDozentId] = useState("");
  const [dozent_vorname, setDozentVorname] = useState("");
  const [dozent_nachname, setDozentNachname] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const kursData = {
    kurs_name,
    kurs_beschreibung,
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
              fk_dozent_id,
              dozent_vorname,
              dozent_nachname,
            } = res.data.kurse[0];
            setKursName(kurs_name);
            setBeschreibung(kurs_beschreibung);
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

  const kursDataDozentDelete = {
    kurs_name,
    kurs_beschreibung,
    fk_dozent_id,
  };

  function zurucksetzen(e) {
    e.preventDefault();

    if (id) {
      KursService.deleteDozenten(id)
        .then(() => {
          navigate("/kurse");
        })
        .catch((e) => console.log(e));
    }
  }
  function speicherKurs(e) {
    e.preventDefault();

    if (kurs_name !== "" && kurs_beschreibung !== "") {
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
                    value={fk_dozent_id}
                    onChange={(e) => setDozentId(e.target.value)}
                    type="text"
                    // readOnly
                    placeholder="DozentenId"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozent_vorname}
                    onChange={(e) => setDozentVorname(e.target.value)}
                    type="text"
                    readOnly
                    placeholder="DozentenVorname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozent_nachname}
                    onChange={(e) => setDozentNachname(e.target.value)}
                    readOnly
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
                <button
                  onClick={(e) => zurucksetzen(e)}
                  className="btn btn-success"
                >
                  Dozent Entfernt
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
