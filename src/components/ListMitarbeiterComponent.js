import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MitarbeiterService from "../services/MitarbeiterService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ListMitarbeiterComponent = () => {
  const [mitarbeiterArray, setMitarbeiterArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMitarbeiter();
  }, []);

  const getMitarbeiter = () => {
    MitarbeiterService.getMitarbeiter()
      .then((res) => {
        setMitarbeiterArray(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteMitarbeiter = (id) => {
    if (window.confirm("WILLST DU Mitarbeiter LÖSCHEN?")) {
      MitarbeiterService.deleteMitarbeiter(id)
        .then(() => {
          getMitarbeiter();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
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

      <h2 className="text-center mb-4">List Mitarbeiter</h2>
      <Link
        to={"/add-mitarbeiter"}
        className="btn btn-primary mb-2 mt-3"
        href=""
      >
        Add Mitarbeiter
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mitarbeiterArray
            .filter(
              (mitarbeiter) =>
                Object.values(mitarbeiter)
                  .filter(
                    (value) =>
                      typeof value === "string" &&
                      value !== mitarbeiter.kd_phone_nr
                  )
                  .some((value) =>
                    value.toLowerCase().includes(search.toLowerCase())
                  ) ||
                mitarbeiter.mitarbeiter_id
                  .toString()
                  .includes(search.toLowerCase())
            )
            .map((mitarbeiter) => (
              <tr key={mitarbeiter.mitarbeiter_id}>
                <td>{mitarbeiter.mitarbeiter_id}</td>
                <td>{mitarbeiter.mitarbeiter_vorname}</td>
                <td>{mitarbeiter.mitarbeiter_nachname}</td>
                <td>{mitarbeiter.kd_email}</td>
                <td>
                  {mitarbeiter.kd_ort} {mitarbeiter.kd_plz}{" "}
                  {mitarbeiter.kd_straße} {mitarbeiter.kd_haus_nr}
                </td>
                <td>{mitarbeiter.mitarbeiter_position}</td>
                <td>
                  <Link
                    to={`/add-mitarbeiter/${mitarbeiter.mitarbeiter_id}`}
                    className="btn btn-info action"
                  >
                    <EditIcon />
                  </Link>
                  <button
                    onClick={() =>
                      deleteMitarbeiter(mitarbeiter.mitarbeiter_id)
                    }
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

export default ListMitarbeiterComponent;
