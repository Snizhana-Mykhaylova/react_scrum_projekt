import axios from "axios";

const link = "http://localhost:5500";

// const basicUrl = 'https://api.themoviedb.org/3/';
// const key = '8e2d6c50ec8673fce37d0988f16fea97';
// const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;

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

export default new MitarbeiterService();
