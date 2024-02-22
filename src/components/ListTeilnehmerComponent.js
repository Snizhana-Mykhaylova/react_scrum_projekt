import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeilnehmerService from "../services/TeilnehmerService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ListTeilnehmerComponent = () => {
  const [teilnehmerArray, setTeilnehmerArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTeilnehmer();
  }, []);

  const getTeilnehmer = () => {
    TeilnehmerService.getTeilnehmer()
      .then((res) => {
        setTeilnehmerArray(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteTeilnehmer = (id) => {
    if (window.confirm("WILLST DU TEILNEHMER LÖSCHEN?")) {
      TeilnehmerService.deleteTeilnehmer(id)
        .then(() => {
          getTeilnehmer();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <SearchIcon />
          </span>
        </div>
      </div>

      <h2 className="text-center mb-4">List Schüler</h2>
      <Link to={"/add-teilnehmer"} className="btn btn-primary mb-2 mt-3">
        Add Schüler
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teilnehmerArray
            .filter(
              (teilnehmer) =>
                Object.values(teilnehmer)
                  .filter(
                    (value) =>
                      typeof value === "string" &&
                      value !== teilnehmer.kd_phone_nr
                  )
                  .some((value) =>
                    value.toLowerCase().includes(search.toLowerCase())
                  ) ||
                teilnehmer.teilnehmer_id
                  .toString()
                  .includes(search.toLowerCase())
            )
            .map((teilnehmer) => (
              <tr key={teilnehmer.teilnehmer_id}>
                <td>{teilnehmer.teilnehmer_id}</td>
                <td>{teilnehmer.teilnehmer_vorname}</td>
                <td>{teilnehmer.teilnehmer_nachname}</td>
                <td>{teilnehmer.kd_email}</td>
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
                  <button
                    onClick={() => deleteTeilnehmer(teilnehmer.teilnehmer_id)}
                    className="btn btn-danger"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeilnehmerComponent;
