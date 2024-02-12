import axios from "axios";

// const basicUrl = 'https://api.themoviedb.org/3/';
// const key = '8e2d6c50ec8673fce37d0988f16fea97';
// const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;




class MitarbeiterService{


    getMitarbeiter(){
        return axios.get('http://localhost:5500/get_mitarbeiter_info');
    }

    getMitarbeiterById(id) {
        console.log(id);
        return axios.get(`http://localhost:5500/get_mitarbeiter_info/${id}`)
    }

    speicherMitarbeiter(mitarbeiterData) {
        console.log(mitarbeiterData)
        return axios.post('http://localhost:5500/insert_mitarbeiter', mitarbeiterData);
    }

    updateMitarbeiter(id, mitarbeiterData) {
        return axios.put(`http://localhost:5500/update_mitarbeiter/${id}`, mitarbeiterData)
    }

    deleteMitarbeiter(id) {
        return axios.delete(`http://localhost:5500/update_mitarbeiter/${id}`)
    }

}

export default new MitarbeiterService();