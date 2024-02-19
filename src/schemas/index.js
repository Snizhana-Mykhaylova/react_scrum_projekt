import * as yup from "yup";

 const mitarbeiterSchema = yup.object().shape({
    vorname: yup.string().required("Pflichtfeld"),
    nachname: yup.string().required("Pflichtfeld"),
    position: yup.string().required("Pflichtfeld"),
    phone: yup.number().positive().integer(),
    plz: yup.number().positive().integer().required("Pflichtfeld"),
    ort: yup.string().required("Pflichtfeld"),
    strasse: yup.string().required("Pflichtfeld"),
    email: yup.string().email("Geben Sie bitte valid Daten").required("Pflichtfeld"),
    hause_nr: yup.number().positive().integer().required("Pflichtfeld"),

 })

export default mitarbeiterSchema;