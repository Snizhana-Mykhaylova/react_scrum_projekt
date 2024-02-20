import React, { useState, useEffect } from "react";
import TeilnehmerService from "../services/TeilnehmerService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddTeilnehmerComponent = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [phone, setTelefon] = useState("");
  const [plz, setPlz] = useState("");
  const [ort, setOrt] = useState("");
  const [straße, setStrasse] = useState("");
  const [hause_nr, setHausNummer] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const teilnehmerData = {
    vorname,
    nachname,
    ort,
    straße,
    hause_nr,
    plz,
    email,
    phone,
  };

  useEffect(() => {
    if (id) {
      TeilnehmerService.getTeilnehmerById(id)
        .then((res) => {
          const { teilnehmer_vorname, teilnehmer_nachname } =
            res.data.teilnehmer[0];
          const {
            kd_ort,
            kd_straße,
            kd_haus_nr,
            kd_plz,
            kd_email,
            kd_phone_nr,
          } = res.data.kontaktDaten[0];
          setVorname(teilnehmer_vorname);
          setNachname(teilnehmer_nachname);
          setOrt(kd_ort);
          setStrasse(kd_straße);
          setHausNummer(kd_haus_nr);
          setPlz(kd_plz);
          setEmail(kd_email);
          setTelefon(kd_phone_nr);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  // senden data zu api und navigate wenn alles gut
  function speicherTeilnehmer(e) {
    e.preventDefault();

    if (
      teilnehmerData.vorname !== "" &&
      teilnehmerData.nachname !== "" &&
      teilnehmerData.email !== "" &&
      teilnehmerData.vorname !== "" &&
      teilnehmerData.nachname !== "" &&
      teilnehmerData.ort !== "" &&
      teilnehmerData.straße !== "" &&
      teilnehmerData.hause_nr !== "" &&
      teilnehmerData.plz !== "" &&
      teilnehmerData.phone !== ""
    ) {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        TeilnehmerService.updateTeilnehmer(id, teilnehmerData)
          .then(navigate("/teilnehmer"))
          .catch((e) => console.log(e));
        window.location.reload();
      } else {
        TeilnehmerService.speicherTeilnehmer(teilnehmerData)
          .then(navigate("/teilnehmer"))
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
      return "Schüler bearbeiten";
    } else {
      return "Schüler hinzufügen";
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
                    value={straße}
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
                  onClick={(e) => speicherTeilnehmer(e)}
                  className="btn btn-success"
                >
                  Speichern
                </button>{" "}
                <Link to={"/teilnehmer"} className="btn btn-danger" href="">
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

export default AddTeilnehmerComponent;
