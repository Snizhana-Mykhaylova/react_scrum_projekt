import axios from "axios";

const link = "http://172.16.201.175:5500";



class MitarbeiterService {
  getMitarbeiter() {
    return axios.get(link + "/get_mitarbeiter_info");
  }

  getMitarbeiterById(id) {
    console.log(id);
    return axios.get(`${link}/get_mitarbeiter_info/${id}`);
  }

  speicherMitarbeiter(mitarbeiterData) {
    console.log(mitarbeiterData);
    return axios.post(link + "/insert_mitarbeiter", mitarbeiterData);
  }

  updateMitarbeiter(id, mitarbeiterData) {
    return axios.put(`${link}/update_mitarbeiter/${id}`, mitarbeiterData);
  }

  deleteMitarbeiter(id) {
    return axios.delete(`${link}/delete_mitarbeiter/${id}`);
  }
}

var mitarbeiterService = new MitarbeiterService();

export default mitarbeiterService;
