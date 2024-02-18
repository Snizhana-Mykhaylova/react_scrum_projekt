import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DozentenService from "../services/DozentenService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ListDozentenComponent = () => {
  const [dozentenArray, setdozentenArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getdozenten();
  }, []);

  function getdozenten() {
     DozentenService.getdozenten()
      .then((res) => {
        setdozentenArray(res.data);
        console.log(res)
      })
      .catch((e) => console.log(e));
  }

  function deletedozenten(e, id) {
    e.preventDefault();
    console.log(id);
     DozentenService.deletedozenten(id)
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

      <h2 className="text-center mb-4">Dozenten</h2>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Adresse</th>
            <th>Fachgebiet</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dozentenArray.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.dozent_nachname.toLowerCase().includes(search);
          }).map((dozenten) => (
            <tr
              key={dozenten.dozent_id}
              id={dozenten.dozent_id}
            >
              <td>{dozenten.dozent_id}</td>
              <td>{dozenten.dozent_vorname}</td>
              <td>{dozenten.dozent_nachname}</td>
              <td>{dozenten.kd_email}</td>
              <td>{dozenten.kd_phone_nr}</td>
              <td>
                {dozenten.kd_ort} {dozenten.kd_plz}{" "}
                {dozenten.kd_straße} {dozenten.kd_haus_nr}
              </td>
              <td>{dozenten.dozent_fachgebiet}</td>

              <td>
                <Link
                  to={`/add-dozenten/${dozenten.dozent_id}`}
                  className="btn btn-info action"
                >
                  <EditIcon />
                </Link>
                <a
                  onClick={(e) => {
                    deletedozenten(e, dozenten.dozent_id);
                  }}
                  className="btn btn-danger"
                  href=""
                >
                  <DeleteIcon />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        to={"/add-dozenten"}
        className="btn btn-primary mb-2 mt-3"
        href=""
      >
        Add dozenten
      </Link>
    </div>
  );
};

export default ListDozentenComponent;
