import axios from "axios";

const link = "http://localhost:5500";

// const basicUrl = 'https://api.themoviedb.org/3/';
// const key = '8e2d6c50ec8673fce37d0988f16fea97';
// const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;

class DozentService {
  getDozent() {
    return axios.get(link + "/getAll_dozent_info");
  }

  getDozentById(id) {
    console.log(id);
    return axios.get(`${link}/get_one_dozent/${id}`);
  }

  speicherDozent(dozentData) {
    console.log(dozentData);
    return axios.post(link + "/insert_dozent_into", dozentData);
  }

  updateDozent(id, dozentData) {
    return axios.put(`${link}/update_dozent/${id}`, dozentData);
  }

  deleteDozent(id) {
    return axios.delete(`${link}/delete_dozent/${id}`);
  }
}

var dozentService = new DozentService();

export default dozentService;
