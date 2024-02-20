import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KursService from "../services/KursService";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from '@mui/icons-material/Info';



const ListKursComponent = () => {
  const [kursArray, setKursArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getKurs();
  }, []);

  function getKurs() {
    KursService.getKurs()
      .then((res) => {
        setKursArray(res.data.kurse);
      })
      .catch((e) => console.log(e));
  }

  function deleteKurs(e, id) {
    e.preventDefault();
    console.log(id);
    KursService.deleteKurs(id)
      .then(window.location.reload(true))
      .catch((e) => console.log(e));
  }

  return (
    
    <div className="container">
      <div className="input-group mb-3">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Suchen nach Nachname"
          aria-label="Suchen"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <SearchIcon />
          </span>
        </div>
      </div>
      <Link to={"/add-kurs"} className="btn btn-primary mb-2 mt-3" href="">
        Add Kurs
      </Link>
      <h2 className="text-center mb-4">List Kurs</h2>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Beschreibung</th>

            <th>Dozenten ID</th>
            <th>Dozenten Vorname</th>
            <th>Dozenten Nachname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {kursArray
            .filter((kurs) => {
              return search.toLowerCase() === ""
                ? kurs
                : kurs.kurs_name.toLowerCase().includes(search);
            })
            .map((kurs) => (
              <tr key={kurs.kurs_id} id={kurs.kurs_id}>
                <td>{kurs.kurs_id}</td>
                <td>{kurs.kurs_name}</td>
                <td>{kurs.kurs_beschreibung}</td>
                <td>{kurs.fk_dozent_id}</td>
                <td>{kurs.dozent_vorname}</td>
                <td>{kurs.dozent_nachname}</td>

                <td>
                  <Link
                    to={`/add-kurs/${kurs.kurs_id}`}
                    className="btn btn-info action"
                  >
                    <EditIcon />
                  </Link>

                  <Link
                    onClick={(e) => {
                      deleteKurs(e, kurs.kurs_id);
                    }}
                    className="btn btn-danger"
                    href=""
                  >
                    <DeleteIcon />
                  </Link>

                  <Link
                    to={`/kurs_details/${kurs.kurs_id}`}
                    className="btn btn-success"
                  >
                    <InfoIcon/>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default ListKursComponent;
