import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MitarbeiterService from '../services/MitarbeiterService'

const ListMitarbeiterComponent = () => {

const [MitarbeiterArray, setMitarbeiterArray] = useState([]);

  useEffect(() => {
    getMitarbeiter();
  }, []);


function getMitarbeiter() {
        MitarbeiterService.getMitarbeiter()
          .then(res => { setMitarbeiterArray(res.data.results); console.log(res) })
            .catch(e => console.log(e));
    }


  return (
    <div className='container'>
      <Link to={"/add-mitarbeiter"} className='btn btn-primary mb-2 mt-3' href="">Add Mitarbeiter</Link>
        <h2 className='text-center mb-4'>List Mitarbeiter</h2>
        <table className='table table-bordered table striped'>
        <thead>
          <tr>
                <th>ID</th>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Position</th>
            <th>Actions</th>
          </tr>
            </thead>
        <tbody>
          {MitarbeiterArray.map(mitarbeiter =>
            <tr key={mitarbeiter.id} id={mitarbeiter.id}>
              <td>{mitarbeiter.id}</td>
              <td>{mitarbeiter.title}</td>
              <td></td>
              <td></td>
              <td></td>
              <td><a className='btn btn-info'>Bearbeiten</a></td>
              <td><a className='btn btn-danger'href=''>Löschen</a></td>
              
            </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default ListMitarbeiterComponent