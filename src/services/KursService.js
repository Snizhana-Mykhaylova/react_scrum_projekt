import axios from "axios";

const link = "http://localhost:5500";

// const basicUrl = 'https://api.themoviedb.org/3/';
// const key = '8e2d6c50ec8673fce37d0988f16fea97';
// const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;

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
  deleteDozenten(id, kursData) {
    return axios.put(`${link}/update_kurs_dozenzdelete/${id}`, kursData)
}
}
var kursService = new KursService();

export default kursService;
