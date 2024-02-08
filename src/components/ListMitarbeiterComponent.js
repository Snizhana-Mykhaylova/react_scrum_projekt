import React from 'react'

const ListMitarbeiterComponent = () => {
  return (
    <div className='container'>
        <a className='btn btn-primary mb-2 mt-3' href="">Add Mitarbeiter</a>
        <h2 className='text-center mb-4'>List Mitarbeiter</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th>ID</th>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Position</th>
                <th>Actions</th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}

export default ListMitarbeiterComponent