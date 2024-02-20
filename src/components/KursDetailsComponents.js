import React, { useEffect, useState } from "react";
import KursService from "../services/KursService";
import teilnehmerService from "../services/TeilnehmerService";
import { useParams } from "react-router-dom";
import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";



const KursDetailsComponents = () => {
  const [teilnehmer, setTeilnehmer] = useState([]);
  const [alleTeilnehmer, setAlleTeilnehmer] = useState([]);
  const [kurs_name, setKursName] = useState("");
  const [kurs_beschreibung, setBeschreibung] = useState("");
  const [kurs_start_datum, setStartDatum] = useState("");
  const [kurs_end_datum, setEndDatum] = useState("");
  const [fk_dozent_id, setDozentId] = useState("");
  const [dozent_vorname, setDozentVorname] = useState("");
  const [dozent_nachname, setDozentNachname] = useState("");

  const [selectedItems, setSelectedItems] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getKursById(id);
    getTeilnehmerVonKurs(id);
    getAlleTeilnehmer();
  }, [id]);


  function checkboxHandler(e) {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);

    if (isSelected) {
      setSelectedItems([...selectedItems, value])
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        })
      }
        )
    }

  }
  
  function submitHandler() {
    console.log(selectedItems);
    setSelectedItems([]);
   
  }

  function getTeilnehmerVonKurs(id) {
    KursService.getTeilnehmerVonKurs(id)
      .then((res) => {

        if(res.data.length === 0){
          console.log("kein Teilnehmer");
        }
        else {
          setTeilnehmer(res.data)
    }  })
    .catch((e) => console.log(e));
  }

  function getAlleTeilnehmer() {
    teilnehmerService.getTeilnehmer()
      .then((res) => {
        if(res.data.length === 0){
          console.log("kein Teilnehmer");
        }
        else {
          setAlleTeilnehmer(res.data)
    } })
    .catch((e) => console.log(e));
  }

  function getKursById(id) {
    KursService.getKursById(id)
      .then((res) => {
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
      })
      .catch((e) => console.log(e));
  }



  return (
    <div className="container">
      <h2 className="text-center mb-4">Kurs Details</h2>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Beschreibung</th>
            <th>Start</th>
            <th>Ende</th>
            <th>Dozenten ID</th>
            <th>Dozenten Vorname</th>
            <th>Dozenten Nachname</th>
            <th>Teilnehmer</th>
            <th>Teilnehmer hinzufügen</th>
          </tr>
        </thead>
        <tbody>
         
              <tr key={id} id={id}>
                <td>{id}</td>
                <td>{kurs_name}</td>
                <td>{kurs_beschreibung}</td>
                <td>{kurs_start_datum}</td>
                <td>{kurs_end_datum}</td>
                <td>{fk_dozent_id}</td>
                <td>{dozent_vorname}</td>
                <td>{dozent_nachname}</td>
            <td>{teilnehmer.map((el) => (
              <ul>
                <li key={el.teilnehmer_id}>
                  <span>{el.teilnehmer_vorname}</span>
                  <span>{el.teilnehmer_nachname}</span>
                </li>
            </ul>))}
            </td>
            <td> <FormGroup>{alleTeilnehmer.map((el) => (
              <FormControlLabel control={<Checkbox key={el.teilnehmer_id} value={el.teilnehmer_id} onChange={checkboxHandler} checked={selectedItems.includes(el.teilnehmer_id) } />} key={el.teilnehmer_id} label={el.teilnehmer_vorname} />        
            ))}
             
           <Button onClick={submitHandler} variant="outlined" >Hinzufügen</Button>  
              </FormGroup> 
            </td>
            
              </tr>
      
        </tbody>
      </table>
    </div>
  );
};

export default KursDetailsComponents;
