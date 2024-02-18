import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MitarbeiterService from "../services/MitarbeiterService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ListMitarbeiterComponent = () => {
  const [MitarbeiterArray, setMitarbeiterArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMitarbeiter();
  }, []);

  function getMitarbeiter() {
    MitarbeiterService.getMitarbeiter()
      .then((res) => {
        setMitarbeiterArray(res.data);
      })
      .catch((e) => console.log(e));
  }

  function deleteMitarbeiter(e, id) {
    e.preventDefault();
    console.log(id);
    MitarbeiterService.deleteMitarbeiter(id)
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

      <h2 className="text-center mb-4">List Mitarbeiter</h2>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Adresse</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {MitarbeiterArray.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.mitarbeiter_nachname.toLowerCase().includes(search);
          }).map((mitarbeiter) => (
            <tr
              key={mitarbeiter.mitarbeiter_id}
              id={mitarbeiter.mitarbeiter_id}
            >
              <td>{mitarbeiter.mitarbeiter_id}</td>
              <td>{mitarbeiter.mitarbeiter_vorname}</td>
              <td>{mitarbeiter.mitarbeiter_nachname}</td>
              <td>{mitarbeiter.kd_email}</td>
              <td>{mitarbeiter.kd_phone_nr}</td>
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
                <Link
                  onClick={(e) => {
                    deleteMitarbeiter(e, mitarbeiter.mitarbeiter_id);
                  }}
                  className="btn btn-danger"
                  href=""
                >
                  <DeleteIcon />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        to={"/add-mitarbeiter"}
        className="btn btn-primary mb-2 mt-3"
        href=""
      >
        Add Mitarbeiter
      </Link>
    </div>
  );
};

export default ListMitarbeiterComponent;
