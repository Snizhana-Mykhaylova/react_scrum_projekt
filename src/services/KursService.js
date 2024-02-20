import axios from "axios";

const link = "http://localhost:5500";

class KursService {
  getKurs() {
    return axios.get(link + "/getAll_kurs_info");
  }

  getKursById(id) {
    console.log(id);
    return axios.get(`${link}/get_one_kurs/${id}`);
  }

  speicherKurs(kursData) {
    console.log(kursData);
    return axios.post(link + "/insert_kurs", kursData);
  }

  updateKurs(id, kursData) {
    return axios.put(`${link}/update_kurs/${id}`, kursData);
  }

  deleteKurs(id) {
    return axios.delete(`${link}/delete_kurs/${id}`);
  }


  getTeilnehmerVonKurs(id) {
    return axios.get(`${link}/getTN_Fbuchung/${id}`);
  }

  postTeilnehmerZuKurs(id) {
    return axios.post(`${link}/teilnehemr_kurs_insert/${id}`)
  }


  deleteDozenten(id, kursData) {
    return axios.put(`${link}/update_kurs_dozenzdelete/${id}`, kursData)
}

}
var kursService = new KursService();

export default kursService;
