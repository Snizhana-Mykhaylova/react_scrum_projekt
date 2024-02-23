import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DozentService from "../services/DozentService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
const ListDozentComponent = () => {
  const [dozenten, setDozenten] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDozenten();
  }, []);

  const getDozenten = () => {
    DozentService.getDozent()
      .then((res) => {
        setDozenten(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteDozent = (id) => {
    if (window.confirm("WILLST DU DOZENT WIRKLICH LÖSCHEN")) {
      DozentService.deleteDozent(id)
        .then(() => {
          getDozenten();
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

      <h2 className="text-center mb-4">List Dozenten</h2>
      <Link to={"/add-dozent"} className="btn btn-primary mb-2 mt-3" href="">
        Add Dozent
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Adresse</th>
            <th>Fachgebiet</th>
            <th className="col-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dozenten
            .filter(
              (dozent) =>
                Object.values(dozent)
                  .filter(
                    (value) =>
                      typeof value === "string" && value !== dozent.kd_phone_nr
                  )
                  .some((value) =>
                    value.toLowerCase().includes(search.toLowerCase())
                  ) ||
                dozent.dozent_id.toString().includes(search.toLowerCase())
            )
            .map((dozent) => (
              <tr key={dozent.dozent_id}>
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
                <td className="flex">
  <div className="icon-container">
    <Link
      to={`/add-dozent/${dozent.dozent_id}`}
      className="btn btn-info action"
    >
      <EditIcon />
    </Link>
  </div>
  <div className="icon-container">
    <Link
      onClick={() => deleteDozent(dozent.dozent_id)}
      className="btn btn-danger action"
    >
      <DeleteIcon />
    </Link>
  </div>
  <div className="icon-container">
    <Link
      to={`/dozenten/${dozent.dozent_id}`}
      className="btn btn-success action"
    >
      <InfoIcon />
    </Link>
  </div>
</td>

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDozentComponent;
