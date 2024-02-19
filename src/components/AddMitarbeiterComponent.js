import React, { useState, useEffect } from "react";
import MitarbeiterService from "../services/MitarbeiterService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import mitarbeiterSchema from "../schemas"


const AddMitarbeiterComponent = () => {

  const onSubmit = () => {
    console.log("submit")
  }

  const formik = useFormik({
    initialValues: {
      vorname: "",
      nachname: "",
      position: "",
      phone: "",
      plz: "",
      ort: "",
      strasse: "",
      email: "",
      hause_nr: "",
    },
    validationSchema: mitarbeiterSchema,
})

  // const [vorname, setVorname] = useState("");
  // const [nachname, setNachname] = useState("");
  // const [position, setPosition] = useState("");
  // const [phone, setTelefon] = useState("");
  // const [plz, setPlz] = useState("");
  // const [ort, setOrt] = useState("");
  // const [strasse, setStrasse] = useState("");
  // const [hause_nr, setHausNummer] = useState("");
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const vorname = formik.values.vorname;
  const nachname = formik.values.nachname;
  const position = formik.values.position;
  const phone = formik.values.phone;
  const plz = formik.values.plz;
  const ort = formik.values.ort;
  const strasse = formik.values.strasse;
  const  email = formik.values.email;
  const hause_nr = formik.values.hause_nr;

  const mitarbeiterData = {
    vorname,
    nachname,
    position,
    phone,
    plz,
    ort,
    strasse,
    email,
    hause_nr,
  };

  useEffect(() => {
    if (id) {
      MitarbeiterService.getMitarbeiterById(id)
        .then((res) => {
          const {
            mitarbeiter_vorname,
            mitarbeiter_nachname,
            mitarbeiter_position,
          } = res.data.mitarbeiter[0];
          const {
            kd_email,
            kd_haus_nr,
            kd_ort,
            kd_plz,
            kd_straße,
            kd_phone_nr,
          } = res.data.kontaktDaten[0];
          // setVorname(mitarbeiter_vorname);
          // setNachname(mitarbeiter_nachname);
          // setPosition(mitarbeiter_position);
          // setTelefon(kd_phone_nr);
          // setPlz(kd_plz);
          // setOrt(kd_ort);
          // setStrasse(kd_straße);
          // setHausNummer(kd_haus_nr);
          // setEmail(kd_email);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  // senden data zu api und navigate wenn alles gut
  function speicherMitarbeiter(e) {
    e.preventDefault();

    if (
      mitarbeiterData.vorname !== "" &&
      mitarbeiterData.nachname !== "" &&
      mitarbeiterData.email != ""
    ) {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        MitarbeiterService.updateMitarbeiter(id, mitarbeiterData)
          .then(navigate("/mitarbeiter"))
          .catch((e) => console.log(e));
      } else {
        MitarbeiterService.speicherMitarbeiter(mitarbeiterData)
          .then(navigate("/mitarbeiter"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please, fill in all inputes");
    }
  }

  //Update oder Add Titel

  function title() {
    if (id) {
      return "Mitarbeiter bearbeiten";
    } else {
      return "Mitarbeiter hinzufügen";
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{title()}</h2>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-2">
                  <input
                    className= "form-control"
                    name="vorname"
                    value={formik.values.vorname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="Vorname"    
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="nachname"
                    value={formik.values.nachname}
                    onChange={formik.handleChange}
                    type="text"
                    placeholder="Nachname"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="position"
                    value={formik.values.position}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="Position"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="telefon"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Telefon"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder="Email"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="plz"
                    value={formik.values.plz}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Plz"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="ort"
                    value={formik.values.ort}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="Ort"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="strasse"
                    value={formik.values.strasse}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="Strasse"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    name="hause_nr"
                    value={formik.values.hause_nr}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Haus Nummer"
                  />
                  <span className={formik.errors.vorname && formik.touched.vorname ? "error-message" : "invisible"}>Error</span>
                </div>

                <button
                  type="submit"
                  onClick={(e) => speicherMitarbeiter(e)}
                  className="btn btn-success">
                  Speichern
                </button>

                <Link to={"/mitarbeiter"} className="btn btn-danger" href="">
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

export default AddMitarbeiterComponent;
