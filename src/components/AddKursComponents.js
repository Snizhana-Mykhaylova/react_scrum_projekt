import React, { useState, useEffect } from "react";
import KursService from "../services/KursService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddKursComponent = () => {
  const [name, setKursName] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [startDatum, setStartDatum] = useState("");
  const [endDatum, setEndDatum] = useState("");
  const [dozentId, setDozentId] = useState("");
  const [dozentVorname, setDozentVorname] = useState("");
  const [dozentNachname, setDozentNachname] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const kursData = {
    name,
    beschreibung,
    startDatum,
    endDatum,
    dozentId,
    dozentVorname,
    dozentNachname,
  };

  useEffect(() => {
    if (id) {
      KursService.getKursById(id)
        .then((res) => {
          const {
            kurs_name,
            kurs_beschreibung,
            kurs_start_datum,
            kurs_end_datum,
            fk_dozent_id,
          } = res.data.kurs[0];
          const { dozent_vorname, dozent_nachname } = res.data.dozentenDaten[0];
          setKursName(kurs_name);
          setBeschreibung(kurs_beschreibung);
          setStartDatum(kurs_start_datum);
          setEndDatum(kurs_end_datum);
          setDozentId(fk_dozent_id);
          setDozentVorname(dozent_vorname);
          setDozentNachname(dozent_nachname);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  // senden data zu api und navigate wenn alles gut
  function speicherKurs(e) {
    e.preventDefault();

    if (
      kursData.name !== "" &&
      kursData.beschreibung !== "" &&
      kursData.startDatum !== ""
    ) {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        KursService.updateKurs(id, kursData)
          .then(navigate("/kurs"))
          .catch((e) => console.log(e));
        window.location.reload();
      } else {
        KursService.speicherKurs(kursData)
          .then(navigate("/kurs"))
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
                    value={name}
                    onChange={(e) => setKursName(e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={beschreibung}
                    onChange={(e) => setBeschreibung(e.target.value)}
                    type="text"
                    placeholder="Beschreibung"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={startDatum}
                    onChange={(e) => setStartDatum(e.target.value)}
                    type="text"
                    placeholder="Start"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={endDatum}
                    onChange={(e) => setEndDatum(e.target.value)}
                    type="text"
                    placeholder="Ende"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozentId}
                    onChange={(e) => setDozentId(e.target.value)}
                    type="text"
                    placeholder="DozentenId"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozentVorname}
                    onChange={(e) => setDozentVorname(e.target.value)}
                    type="text"
                    placeholder="DozentenVorname"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={dozentNachname}
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
                <Link to={"/kurs"} className="btn btn-danger" href="">
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
