import React, { useEffect, useState } from "react";
import KursService from "../services/KursService";
import teilnehmerService from "../services/TeilnehmerService";
import { useParams, useNavigate } from "react-router-dom";
import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

const KursDetailsComponents = () => {
  const [teilnehmer, setTeilnehmer] = useState([]);
  const [alleTeilnehmer, setAlleTeilnehmer] = useState([]);
  const [kurs_name, setKursName] = useState("");
  const [kurs_beschreibung, setBeschreibung] = useState("");
  const [fk_dozent_id, setDozentId] = useState("");
  const [dozent_vorname, setDozentVorname] = useState("");
  const [dozent_nachname, setDozentNachname] = useState("");

  const [selectedItemsTeilnehmer, setSelectedItemsTeilnehmer] = useState([]);
  const [selectedItemsAlleTeilnehmer, setSelectedItemsAlleTeilnehmer] =
    useState([]);
  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    getKursById(id);
    getTeilnehmerVonKurs(id);
    getAlleTeilnehmer();
  }, [id]);

  function addTeilnehmerZuKurs(teilnehmerList, id) {
    const body = {
      teilnehmer_ids: teilnehmerList,
      k_id: id,
    };
    KursService.postTeilnehmerZuKurs(body)
      .then(() => {
        window.location.reload(true);
      })
      .catch((e) => console.log(e));
  }

  function checkboxHandlerTeilnehmer(e) {
    const value = parseInt(e.target.value, 10);
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedItemsTeilnehmer([...selectedItemsTeilnehmer, value]);
    } else {
      setSelectedItemsTeilnehmer(
        selectedItemsTeilnehmer.filter((id) => id !== value)
      );
    }
  }

  function checkboxHandlerAlleTeilnehmer(e) {
    const value = parseInt(e.target.value, 10);
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedItemsAlleTeilnehmer([...selectedItemsAlleTeilnehmer, value]);
    } else {
      setSelectedItemsAlleTeilnehmer(
        selectedItemsAlleTeilnehmer.filter((id) => id !== value)
      );
    }
  }
 
  function deleteTNvonKurs(teilnehmerList, id) {
    const body = {
      teilnehmer_ids: teilnehmerList,
      k_id: id,
    };
    KursService.PutdeleteTNvonKurs(body)
      .then(() => {
        window.location.reload(true);
      })
      .catch((e) => console.log(e));
  }

  function deleteTN() {
    deleteTNvonKurs(selectedItemsTeilnehmer, id);
    setSelectedItemsAlleTeilnehmer([]);
  }

  function submitHandler() {
    addTeilnehmerZuKurs(selectedItemsAlleTeilnehmer, id);
    setSelectedItemsAlleTeilnehmer([]);
  }

  function getTeilnehmerVonKurs(id) {
    KursService.getTeilnehmerVonKurs(id)
      .then((res) => {
        if (res.data.length === 0) {
          console.log("kein Teilnehmer");
        } else {
          setTeilnehmer(res.data);
        }
      })
      .catch((e) => console.log(e));
  }

  function getAlleTeilnehmer() {
    teilnehmerService
      .getTeilnehmer()
      .then((res) => {
        if (res.data.length === 0) {
          console.log("kein Teilnehmer");
        } else {
          setAlleTeilnehmer(res.data);
        }
      })
      .catch((e) => console.log(e));
  }

  function getKursById(id) {
    KursService.getKursById(id)
      .then((res) => {
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
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <h2 className="text-center mb-6">Kurs Details</h2>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered text-center">
            <thead className="text-center">
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
                <th className="text-center col-3">Beschreibung</th>
                {/* <th className="text-center">Do-ID</th> */}
                <th className="text-center col-2">Dozenten & ID</th>
                {/* <th className="text-center ">TN-ID</th> */}
                <th className="text-center col-3">Teilnehmer & ID</th>
                <th className=" text-center col-3">Teilnehmer hinzufügen</th>
              </tr>
            </thead>

            <tbody>
              <tr key={id} id={id}>
                <td>{id}</td>
                <td>{kurs_name}</td>
                <td>{kurs_beschreibung}</td>
                <td>       {fk_dozent_id}-{dozent_vorname} {dozent_nachname}</td>
                {/* <td>
                  <span>{dozent_vorname}</span>
                  <span> </span>
                  <span>{dozent_nachname}</span>
                </td> */}
                {/* <td>
                  {teilnehmer.map((el) => (
                    <ul key={el.teilnehmer_id}>
                      <li>
                        <span>{el.teilnehmer_id}</span>
                      </li>
                    </ul>
                  ))}
                </td> */}
                <td>
                  <FormGroup>
                    {teilnehmer.map((el) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            key={el.teilnehmer_id}
                            value={el.teilnehmer_id}
                            checked={selectedItemsTeilnehmer.includes(
                              el.teilnehmer_id
                            )}
                            onChange={checkboxHandlerTeilnehmer}
                          />
                        }
                        key={el.teilnehmer_id}
                        label={`${el.teilnehmer_id}-${el.teilnehmer_vorname} ${el.teilnehmer_nachname}`}
                      />
                    ))}
                    <Button onClick={deleteTN} variant="outlined">
                      Löschen
                    </Button>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                    {alleTeilnehmer.map((el) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            key={el.teilnehmer_id}
                            value={el.teilnehmer_id}
                            onChange={checkboxHandlerAlleTeilnehmer}
                            checked={selectedItemsAlleTeilnehmer.includes(
                              el.teilnehmer_id
                            )}
                          />
                        }
                        key={el.teilnehmer_id}
                        label={`${el.teilnehmer_vorname} ${el.teilnehmer_nachname}`}
                      />
                    ))}
                    <Button onClick={submitHandler} variant="outlined">
                      Hinzufügen
                    </Button>
                  </FormGroup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KursDetailsComponents;
