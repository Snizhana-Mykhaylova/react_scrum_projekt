import axios from "axios";

const link = "http://172.16.201.175:5500";

class dozentenService {
  getdozenten() {
    return axios.get(link + "/get_dozent");
  }

  getdozentenById(id) {
    console.log(id);
    return axios.get(`${link}/get_dozent/${id}`);
  }

  speicherdozenten(dozentenData) {
    console.log(dozentenData);
    return axios.post(link + "/insert_dozent", dozentenData);
  }

  updatedozenten(id, dozentenData) {
    return axios.put(`${link}/update_dozent/${id}`, dozentenData);
  }

  deletedozenten(id) {
    return axios.delete(`${link}/delete_dozent/${id}`);
  }
}

export default new dozentenService();
