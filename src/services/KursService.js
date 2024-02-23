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
    console.log(id)
    return axios.delete(`${link}/delete_kurs/${id}`);
  }


  getTeilnehmerVonKurs(id) {
    return axios.get(`${link}/getTN_Fbuchung/${id}`);
  }

  postTeilnehmerZuKurs(body) {
    return axios.post(`${link}/insert_tn_buchung/`, body)
  }


  deleteDozenten(id) {
    return axios.put(`${link}/update_kurs_dozentDelete/${id}`)
}
PutdeleteTNvonKurs(body){
  return axios.put(`${link}/delete_TN_vonKurs`,body)
}

}
var kursService = new KursService();

export default kursService;
