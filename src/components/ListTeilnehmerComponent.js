import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeilnehmerService from "../services/TeilnehmerService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ListTeilnehmerComponent = () => {
  const [TeilnehmerArray, setTeilnehmerArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTeilnehmer();
  }, []);

  function getTeilnehmer() {
    TeilnehmerService.getTeilnehmer()
      .then((res) => {
        setTeilnehmerArray(res.data);
      })
      .catch((e) => console.log(e));
  }

  function deleteTeilnehmer(e, id) {
    e.preventDefault();
    console.log(id);
    TeilnehmerService.deleteTeilnehmer(id)
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

      <h2 className="text-center mb-4">List Schüler</h2>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {TeilnehmerArray.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.teilnehmer_nachname.toLowerCase().includes(search);
          }).map((teilnehmer) => (
            <tr key={teilnehmer.teilnehmer_id} id={teilnehmer.teilnehmer_id}>
              <td>{teilnehmer.teilnehmer_id}</td>
              <td>{teilnehmer.teilnehmer_vorname}</td>
              <td>{teilnehmer.teilnehmer_nachname}</td>
              <td>{teilnehmer.kd_email}</td>
              <td>{teilnehmer.kd_phone_nr}</td>
              <td>
                {teilnehmer.kd_ort} {teilnehmer.kd_plz} {teilnehmer.kd_straße}{" "}
                {teilnehmer.kd_haus_nr}
              </td>

              <td>
                <Link
                  to={`/add-teilnehmer/${teilnehmer.teilnehmer_id}`}
                  className="btn btn-info action"
                >
                  <EditIcon />
                </Link>
                <Link
                  onClick={(e) => {
                    console.log(e, teilnehmer.teilnehmer_id);
                    deleteTeilnehmer(e, teilnehmer.teilnehmer_id);
                  }}
                  className="btn btn-danger"
                >
                  <DeleteIcon />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        to={"/add-teilnehmer"}
        className="btn btn-primary mb-2 mt-3"
        href=""
      >
        Add Schüler
      </Link>
    </div>
  );
};

export default ListTeilnehmerComponent;
