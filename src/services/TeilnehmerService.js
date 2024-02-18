import axios from "axios";

const link = "http://172.16.201.175:5500";

// const basicUrl = 'https://api.themoviedb.org/3/';
// const key = '8e2d6c50ec8673fce37d0988f16fea97';
// const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;

class TeilnehmerService {
  getTeilnehmer() {
    return axios.get(link + "/get_teilnehmer_info");
  }

  getTeilnehmerById(id) {
    console.log(id);
    return axios.get(`${link}/teilnehemr_einzel/${id}`);
  }

  speicherTeilnehmer(teilnehmerData) {
    console.log(teilnehmerData);
    return axios.post(`${link}/insert_teilnehmer`, teilnehmerData);
  }

  updateTeilnehmer(id, teilnehmerData) {
    return axios.put(`${link}/update_TN/${id}`, teilnehmerData);
  }

  deleteTeilnehmer(id) {
    console.log("service delete " + id)
    return axios.delete(`${link}/delete_tn/${id}`);
  }
}

var teilnehmerService = new TeilnehmerService();

export default teilnehmerService;
