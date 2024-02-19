import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DozentService from "../services/DozentService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ListDozentComponent = () => {
  const [DozentArray, setDozentArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDozent();
  }, []);

  function getDozent() {
    DozentService.getDozent()
      .then((res) => {
        setDozentArray(res.data);
      })
      .catch((e) => console.log(e));
  }

  function deleteDozent(e, id) {
    e.preventDefault();
    console.log(id);
    DozentService.deleteDozent(id)
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

      <h2 className="text-center mb-4">List Dozent</h2>
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
          {DozentArray.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.dozent_nachname.toLowerCase().includes(search);
          }).map((dozent) => (
            <tr key={dozent.dozent_id} id={dozent.dozent_id}>
              <td>{dozent.dozent_id}</td>
              <td>{dozent.dozent_vorname}</td>
              <td>{dozent.dozent_nachname}</td>
              <td>{dozent.kd_email}</td>
              <td>{dozent.kd_phone_nr}</td>
              <td>
                {dozent.kd_ort} {dozent.kd_plz} {dozent.kd_straße}{" "}
                {dozent.kd_haus_nr}
              </td>
              <td>{dozent.dozent_fachgebiet}</td>

              <td>
                <Link
                  to={`/add-dozent/${dozent.dozent_id}`}
                  className="btn btn-info action"
                >
                  <EditIcon />
                </Link>
                <Link
                  onClick={(e) => {
                    deleteDozent(e, dozent.dozent_id);
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

      <Link to={"/add-dozent"} className="btn btn-primary mb-2 mt-3" href="">
        Add Dozent
      </Link>
    </div>
  );
};

export default ListDozentComponent;