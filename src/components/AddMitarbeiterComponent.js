import React from 'react'

const AddMitarbeiterComponent = () => {
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Mitarbeiter hinzufügen</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Vorname' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Nachname' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="email" placeholder='Email' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Telefon' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Position' />
                            </div>
                            <button className='btn btn-success'>Speichern</button> {" "}
                            <a className='btn btn-danger' href="">Stornieren</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMitarbeiterComponent